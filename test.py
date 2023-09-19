from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import NameObject

reader = PdfReader("fl100.pdf")
writer = PdfWriter()
# print(reader.pages)
page = reader.pages[0]
# print(len(reader.pages))
# fields = reader.get_fields()
fields = reader.get_form_text_fields()
# Filter checkboxes with specific field names
inputsDict = {}
s = 0
print(len(page["/Annots"]))
        # print(field)
# print(s)
btns = []
textFields = []
for i in range(len(page["/Annots"])):
        annot = page["/Annots"][i].get_object()
        # print(i,annot)
        # print(annot['/FT'] == "/Btn")
        if annot['/FT'] == "/Btn":
            print("its button")
            # impu_field = input(f'{annot["/T"]} Yes/No: ')
            # print(annot)
            # Try different values to mark the checkbox as checked
            # if impu_field == "yes":
            #     annot.update({
            #         NameObject("/V"): NameObject("/1"),  # Try "/1" or "/Yes" or "/On"
            #         NameObject("/AS"): NameObject("/1")  # Try "/1" or "/Yes" or "/On"
            #     })
                # print(annot)
            # print(annot)
        if annot['/FT'] == "/Tx":
            textFields.append(annot['/TU'])
            # impu_field = input(f'{annot["/T"]} Tell me value: ')
            # annot.update({
            #     NameObject("/V"): NameObject(f'/{impu_field}'),  # Try "/1" or "/Yes" or "/On"
            #     NameObject("/AS"): NameObject(f'/{impu_field}')  # Try "/1" or "/Yes" or "/On"
            # })
            # print(annot)
            
        s += 1
    # # Add the modified page to the writer
inputsDict['btns'] = btns 
inputsDict['textFields'] = textFields
print(inputsDict)
writer.add_page(page)
# Save the modified PDF to a new file
with open("filled-out.pdf", "wb") as output_stream:
    writer.write(output_stream)

output_stream.close()



# ========================
# from flask import Flask, request, render_template, redirect, url_for
# # import os

# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = 'uploads'

# @app.route('/')
# def upload_page():
#     return render_template('pdf.html')

# # @app.route('/upload', methods=['POST'])
# # def upload_file():
# #     return render_template('upload.html')
# # def upload_file():
# #     if 'file' not in request.files:
# #         return redirect(request.url)

# #     file = request.files['file']

# #     if file.filename == '':
# #         return redirect(request.url)

# #     if file and file.filename.endswith('.pdf'):
# #         filename = os.path.join(app.config['UPLOAD_FOLDER'],'uploaded.pdf')
# #         file.save(filename)
# #         print(filename)
# #         return redirect(url_for('display_file', pdf_path=filename))  # Pass the PDF path

# # Add a route to serve the PDF file
# # @app.route('/pdf' )
# # def uploaded_file():
# #     return render_template('pdf.html')


# # @app.route('/display/<pdf_filename>')
# # def display_file(pdf_filename):
# #     pdf_path = os.path.join(app.config['UPLOAD_FOLDER'], pdf_filename)
# #     return render_template('pdf.html', pdf_path=pdf_path)


# if __name__ == '__main__':
#     app.run(debug=True)
