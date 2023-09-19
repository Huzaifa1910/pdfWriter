from flask import Flask, request, render_template, redirect, url_for, jsonify
import os
from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import NameObject
import PyPDF2

reader = PdfReader("fl100.pdf")
writer = PdfWriter()
# print(reader.pages)

app = Flask(__name__)

@app.route('/')
def upload_page():
    return render_template('upload.html')
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    # Specify the folder where you want to save the uploaded file.
    upload_folder = './static/uploads'
    file.save(os.path.join(upload_folder, file.filename))

    return 'File uploaded successfully'

# def upload_file():
#     if 'file' not in request.files:
#         return redirect(request.url)

#     file = request.files['file']

#     if file.filename == '':
#         return redirect(request.url)

#     if file and file.filename.endswith('.pdf'):
#         filename = os.path.join(app.config['UPLOAD_FOLDER'],'uploaded.pdf')
#         file.save(filename)
#         print(filename)
#         return redirect(url_for('display_file', pdf_path=filename))  # Pass the PDF path

# Add a route to serve the PDF file
# @app.route('/pdf')
# def display_file():
#     return render_template('display.html')

@app.route('/display.html')
def display_pdf():
    # Get the 'file' query parameter from the URL
    global file_name
    file_name = request.args.get('file', default=None)
    
    # Check if the file_name is not None and handle it accordingly
    if file_name:
        # Render the "display.html" template and pass the file name to it
        return render_template('display.html', file_name=file_name)
    else:
        return 'File parameter missing or invalid.'

@app.route('/check.html')
def check_pdf():
    return render_template('check.html')

@app.route('/receive-lists', methods=['POST'])
def receive_lists():
    data = request.get_json()

    # Assuming you have sent the lists as 'textmsgs' and 'btnsmsgs' in the JSON payload
    textmsgs = data.get('textmsgs', [])
    btnsmsgs = data.get('btnsmsgs', [])
    print(textmsgs)
    print(btnsmsgs)
    for pageNum in range(len(reader.pages)):
        page = reader.pages[pageNum]
        print(len(page["/Annots"]))
        btnpointer = 0
        txtpointer = 0
        for g in range(len(page["/Annots"])):
            annot = page["/Annots"][g].get_object()
            print(txtpointer, textmsgs)
            try:
                if annot['/FT'] == "/Btn":
                
                    print(btnsmsgs[pageNum])
                    impu_field = btnsmsgs[pageNum][btnpointer]
                    # print(annot)
                    # Try different values to mark the checkbox as checked
                    if impu_field == "yes":
                        annot.update({
                            NameObject("/V"): NameObject("/1"),  # Try "/1" or "/Yes" or "/On"
                            NameObject("/AS"): NameObject("/1")  # Try "/1" or "/Yes" or "/On"
                        })
                        # print(annot)
                    # print(annot)
                    btnpointer += 1
                if annot['/FT'] == "/Tx":
                    print(annot)
                    print(textmsgs[pageNum])
                    impu_field = textmsgs[pageNum][txtpointer]
                    annot.update({
                        NameObject("/V"): PyPDF2.generic.TextStringObject(impu_field),  # Try "/1" or "/Yes" or "/On"
                    })
                    txtpointer += 1
            except Exception as e:
                print("break",e)
        # Print the received lists
        writer.add_page(page)
# Save the modified PDF to a new file
    with open("./static/filled_Pdfs/filled-out.pdf", "wb") as output_stream:
        writer.write(output_stream)

    output_stream.close()    

    return 'Lists received and printed in the terminal'

@app.route('/get_fields', methods=['POST'])
def get_fields():
    inputDicts = {}
    try:
        # Read the PDF and extract field titles
        reader = PdfReader(file_name)
        for paged in range(len(reader.pages)):
            page = reader.pages[paged]
            btns = []
            textFields = []
            
            for annot in page["/Annots"]:
                annot = annot.get_object()
                print(paged)
                print(annot)
                print("=============================")
                try:
                    if annot['/FT'] == "/Btn":
                        
                        btns.append(annot['/TU'])
                    if annot['/FT'] == "/Tx":
                        textFields.append(annot['/TU'])
                except Exception as e:
                    print("break",e)
                # if (str(annot['/P']) == 'IndirectObject(4, 0, 2630994791632)'):
                #     print("break")
            pagedict = {'btns': btns, 'textFields': textFields}
            print(pagedict)
            inputDicts[paged] = pagedict
        print(inputDicts)
        return jsonify(inputDicts)  # Return the dictionary as JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
