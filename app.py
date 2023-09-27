from flask import Flask, request, render_template, redirect, url_for, jsonify
import os
from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import NameObject
import PyPDF2

reader = PdfReader("fl100.pdf")
writer = PdfWriter()
# print(reader.pages)

app = Flask(__name__)

textfieldsCheck1 = {
    0:{
'BarNo_ft[0]': 'ENTER STATE BAR NUMBER:',
'AttyName_ft[0]': 'ENTER ATTORNEY NAME:',
'AttyFirm_ft[0]': 'ENTER ATTORNEY FIRM NAME:',
'AttyStreet_ft[0]': 'ENTER ATTORNEY STREET ADDRESS:',
'AttyCity_ft[0]': 'ENTER ATTORNEY YOUR CITY:',
'AttyState_ft[0]': 'ENTER ATTORNEY STATE:',
'AttyZip_ft[0]': 'ENTER ATTORNEY ZIP CODE:',
'Phone_ft[0]': 'ENTER YOUR TELEPHONE NO.:',
'Fax_ft[0]': 'ENTER FAX NO.:',
'Email_ft[0]': 'ENTER E-MAIL ADDRESS:',
'AttyFor_ft[0]': 'ENTER ATTORNEY FOR (name):',
'CrtCounty_ft[0]': 'ENTER SUPERIOR COURT OF CALIFORNIA, COUNTY OF',
'Street_ft[0]': 'ENTER STREET ADDRESS:',
'MailingAdd_ft[0]': 'ENTER YOUR MAILING ADDRESS:',
'CityZip_ft[0]': 'ENTER YOUR CITY AND ZIP CODE:',
'Branch_ft[0]': 'BRANCH NAME:',
'Party1_ft[0]': 'ENTER PETITIONER:',
'Party2_ft[0]': 'ENTER RESPONDENT:', 
'CaseNumber_ft[0]': 'CASE NUMBER:', #petiion se sart kro
'Amended_cb[0]': 'AMENDED?',
'DissolutionOf_cb[0]': 'IS IT A DISSOLUTION (DIVORCE)?', #'Dissolution (Divorce) of:'
'Marriage_cb[0]': 'IS IT A DISSOLUTION (DIVORCE) OF MARRIAGE?',
'DomesticPartnership_cb[0]': 'OR IS IT A DISSOLUTION (DIVORCE) OF DOMESTIC PARTNERSHIP?',
'NullityOf_cb[0]': 'IS IT NULLITY?',
'Marriage_cb[1]': 'IS IT NULLITY  OF MARRIAGE?',
'DomesticPartnership_cb[1]': 'IS IT NULLITY  OF DOMESTIC PARTNERSHIP?',
'LegalSeparationOf_cb[0]': 'IS IT LEGAL SEPARATION?',
'Marriage_cb[2]': 'IS IT LEGAL SEPARATION OF MARRIAGE?',
'DomesticPartnership_cb[2]': 'IS IT A LEGAL SEPARATION OF DOMESTIC PARTNERSHIP?',
'WeAreMarried_cb[0]': '"We are married."',
'DPEstablishedInCalifornia[0]': '"We are domestic partners and our domestic partnership was established in California."',
'DPNOTEstablishedinCA_cb[0]': '"We are domestic partners and our domestic partnership was NOT established in California."',
'RespondentMeetsResidencyReqs_cb[0]': 'Respondent has been a resident of this state for atleast six months and of this county for atleast three months immediately preceding the filing of this Petition.(For a divorce, unless you are in the legal relationship described in 1b, atleast one of you must comply with this requirement.)',
'PetitionerMeetsResidencyReqs_cb[0]': 'Petitioner has been a resident of this state for atleast six months and of this county for atleast three months immediately preceding the filing of this Petition.(For a divorce, unless you are in the legal relationship described in 1b, atleast one of you must comply with this requirement.)',
'DPNOTEstablishedinCA_cb[1]': '"Our domestic partnership was established in California. Neither of us has to be a resident or have a domicile in California to dissolve our partnership here."',
'SameSexMarriedInCA_cb[0]': '"We are the same sex, were married in California, but currently live in a jurisdiction that does not recognize, and will not dissolve, our marriage.This Petition is filed in the county where we married."',
'RespondentsResidence_tf[0]': 'Respondent lives in (specify):',
'PetitionersResidence_tf[0]': 'Petitioner lives in (specify): ',
'CheckBox61[0]': 'Is this dissolution of marriage?',
'DateOfMarriage_dt[0]': 'Date of marriage (specify):',
'DateOfSeparation_dt[0]': 'Date of separation (specify):',
'MonthsSeparated_tf[0]': 'Years',
'MonthsSeparated_tf[1]': 'Months',
'CheckBox61[1]': 'Is it a dissolution of domestic partnership?',
'DateTimeField1[0]': 'date', #other one 3 b 
'DatePartnersSeparated_dt[0]': 'Date of separation (specify):',
'MonthsSeparated_tf[3]': 'Enter Years Since you have been separated',
'MonthsSeparated_tf[2]': 'Enter Months if remaining after years e.g. X years Y months',
'ThereAreNoMinorChildren_cb[0]': 'There are no minor children. ',
'MinorChildrenList_cb[0]': 'The minor children are:',
'Child1Name_tf[0]': "Enter First Child's name",
'Child1Birthdate_dt[0]': "Enter First Child's Birth date",
'Child1Age_tf[0]': "Enter First Child's  Age",
'Child2Name_tf[0]': "Enter Second Child's name",
'Child2Birthdate_dt[0]': "Enter Second Child's Birth date",
'Child2Age_tf[0]': "Enter Second Child's  Age",
'Child3Name_tf[0]': "Enter Third Child's name",
'Child3Date_dt[0]': "Enter Third Child's Birth date",
'Child3Age_tf[0]': "Enter Third Child's  Age",
'Child4Name_tf[0]': "Enter Fourth Child's name",
'Child4Birthdate_dt[0]': "Enter Fourth Child's Birth date",
'Child4Age_tf[0]': "Enter Fourth Child's  Age",
'Attachment4b[0]': 'continued on Attachment 4b.',
'UnbornChild_cb[0]': 'is there a child who is not yet born?',
'PartiesSignedVoluntaryPaternityDec_cb[0]': 'Petitioner and Respondent signed a voluntary declaration of parentage or paternity. (Attach a copy if available.)',
    },
# Page 2 starts here
# 'Party1_ft[0]': 'PETITIONER:',
# 'Party2_ft[0]': 'RESPONDENT:',
1:{
'Party1_ft[0]': 'ENTER PETITIONER:',
'Party2_ft[0]': 'ENTER RESPONDENT:', 
'SepTypeDef_cb[0]': 'Legal separation of the marriage or domestic partnership based on (check one):',
'SepTypeDef_cb[1]': 'Divorce of the marriage or domestic partnership based on (check one):',
'SepBasis_cb[0]': 'irreconcilable differences.',
'SepBasis_cb[1]': 'permanent legal incapacity to make decisions.',
'Nullity_cb[0]': 'Is it a Nullity of void marriage or domestic partnership?',
'BasedOnIncest_cb[0]': 'Nullity of void marriage or domestic partnership based on incest.',
'BasedOnBigamy_cb[0]': 'Nullity of void marriage or domestic partnership based on bigamy.',
'NullityofVoidableMarriageOrDP_cb[0]': 'Is it a Nullity of voidable marriage or domestic partnership?',
'BasedonAge_cb[0]': 'Nullity of voidable marriage or domestic partnership based on petitioner’s age at time of registration of domestic partnership or marriage.',
'PriorExistingMarriageOrDP_cb[0]': ' Nullity of voidable marriage or domestic partnership based on prior existing marriage or domestic partnership. ',
'BasedOnUnsoundMind_cb[0]': ' Nullity of voidable marriage or domestic partnership based on unsound mind.',
'BasedonFraud_cb[0]': ' Nullity of voidable marriage or domestic partnership based on fraud.',
'BasedOnForce_cb[0]': ' Nullity of voidable marriage or domestic partnership based on force.',
'BasedonPhysicalIncapacity_cb[0]': ' Nullity of voidable marriage or domestic partnership based on physical incapacity.',
# legal cutody of children to
'ToPetitioner_cb[0]': ' legal cutody of children to Petitioner',
'ToRespondent_cb[0]': ' legal cutody of children to Respondent',
'ToBothJointly_cb[0]': 'legal cutody of children to Joint',
'ToOther_cb[0]': 'legal cutody of children to Other',
# Physical custody of chuildren to
'ToPetitioner_cb[1]': 'Physical custody of chuildren to Petitioner',
'ToRespondent_cb[1]': 'Physical custody of chuildren to Respondent',
'ToBothJointly_cb[1]': 'Physical custody of chuildren to Joint',
'ToOther_cb[1]': 'Physical custody of chuildren to Other',
# child visitation 
'ForPetitioner_cb[0]': 'child visitation (parenting time) be granted to Petitioner',
'ForRespondent_cb[0]': 'child visitation (parenting time) be granted to Respondent',
'ForOther_cb[0]': 'child visitation (parenting time) be granted to Other',
# are requested
'FormFL-311_cb[0]': 'are requested in form FL-311 ',
'FormFL-312_cb[0]': 'are requested in form FL-312 ',
'FormFL-341C_cb[0]': 'are requested in form FL-341(C)',
'FormFL-341D_cb[0]': 'are requested in form FL-341(D)',
'FormFL-341E[0]': 'are requested in form FL-341(E) ',
'Attachment6e1[0]': 'are requested in Attachment 6c(1)',
'OtherChildSupport_cb[0]': 'Any Other Child Support you want? Read in 7 Child Support Section (specify):',
'ChildSupport_ft[0]': 'If Yes Please Specify',
'PaySupport_cb[0]': 'Do you want spousal or domestic partner support?',
'PaySupporttoPetitioner_cb[0]': 'Is spousal or domestic partner support payable to the Petitioner?',
'PaySupportoRespondent_cb[0]': 'Is spousal or domestic partner support payable to the Respondent?',
'EndJurixReSupport[0]': "Do you want Terminate (end) the court's ability to award support?",
'EndJurixRePetitioner_cb[0]': "Terminate (end) the court's ability to award support to Petitioner",
'EndJurixReRespondent_cb[0]': "Terminate (end) the court's ability to award support to Respondent",
'PartiesSignedVoluntaryPaternityDec_cb[0]': 'Should we reserve for future determination the issue of support payable?',
'ReserveJurixSupportResp_cb[0]': 'Reserve for future determination the issue of support payable to Respondent ',
'ReserveJurixSupportPet_cb[0]': 'Reserve for future determination the issue of support payable to Petitioner',
'Other_cb[0]': 'Any Other Spousal or Domestic Partner Support you want?',
'OtherSupport_ft[0]': 'If Yes Please Specify',
'NoSeparateProperty_cb[0]': '"There are no such assets or debts that I know of to be confirmed by the court."',
'ConfirmSeparateProperty_cb[0]': '"Confirm as separate property the assets and debts"',
'WhereSPListed_cb[1]': ' Confirm as separate property the assets and debts Property Declaration (form FL-160).',
'WhereSPListed_cb[0]': 'Confirm as separate property the assets and debts Attachment 9b.',
'WhereSPListed_cb[2]': 'Do you want to Confirm as separate property the assets and debts?',
'SeparatePropertyList1_tf[0]': 'Enter Item 1',
'ConfirmPropertyList1To_tf[0]': 'Confirm to',
'SeparatePropertyList2_tf[0]': 'Enter Item 2',
'ConfirmPropertyList2To_tf[0]': 'Confirm to',
'SeparatePropertyList3_tf[0]': 'Enter Item 3',
'ConfirmPropertyList3To_tf[0]': 'Confirm to',
'SeparatePropertyList4_tf[0]': 'Enter Item 4',
'ConfirmPropertyList4To_tf[0]': 'Confirm to',
'SeparatePropertyList4_tf[1]': 'Enter Item 5',
'ConfirmPropertyList4To_tf[1]': 'Confirm to',
},
2:{
# page 3 starts here
'Party1_ft[0]': 'ENTER PETITIONER:',
'Party2_ft[0]': 'ENTER RESPONDENT:', 
'NoCommOrQuasiCommProperty_cb[0]': '"There are no such assets or debts that I know of to be divided by the court."',
'PropertyListed_cb[0]': '"Determine rights to community and quasi-community assets and debts. All such assets and debts are listed "',
'WhereCPListed_cb[1]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed  in Property Declaration (form FL-160).',
'WhereCPListed_cb[0]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed  in Attachment 10b.',
'WhereCPListed_cb[2]': 'Is there any other community and quasi-community support you want?',
'ListProperty_ft[0]': 'if yes please (specify)',
'FeesAndCost_cb[0]': "Do you want attorney's fees and costs to be payable?",
'AttyFeePay_cb[0]': 'Respondent ',
'AttyFeePay_cb[1]': 'Petitioner',
'RestoreFormerName_cb[0]': "Should the Petitioner's former name be restored?",
'SpecifyFormerName_tf[0]': 'if yes please specify:',
'OtherRequests_cb[0]': 'Is there any other request?',
'SpecifyOtherRequests_tf[0]': 'if yes please specify',
'ContinuedOnAttachment_cb[0]': 'Continued on Attachment 11c.',
'SigDate[0]': 'Date:',
'PrintPetitionerName_tf[0]': 'Type or Print Petitioner Name',
'SigDate[1]': 'Date:',
'PrintPetitionerAttorneyName_tf[0]': 'Type or Print Petitioner Attorney Name',


}
}

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
    dataFields = data.get('dataFields', {})
    # btnsmsgs = data.get('btnsmsgs', [])
    # print("this is data fields",dataFields)
    # print("Something",dataFields['0']['BarNo_ft[0]'])
    for pageNum in range(len(reader.pages)):
        page = reader.pages[pageNum]
        # print(len(page["/Annots"]))
        btnpointer = 0
        fields = list(dataFields[str(pageNum)].keys())
        txtpointer = 0
        for g in range(len(page["/Annots"])):
            annot = page["/Annots"][g].get_object()
            for vals in range(len(fields)):
                # print(fields[0])
                try:
                    if annot['/FT'] == "/Btn" and annot['/T'] == fields[vals]:
                        

                        impu_field = dataFields[str(pageNum)][annot['/T']]
                        print(impu_field) 
                        # print(annot)
                        # Try different values to mark the checkbox as checked
                        if impu_field == "yes":
                            annot.update({
                                NameObject("/V"): NameObject("/1"),  # for btn use NameObject("/V"): NameObject("/1")
                                NameObject("/AS"): NameObject("/1")  # for btn use NameObject("/V"): NameObject("/1")
                            })
                            if(annot['/T'] ==  'SepTypeDef_cb[0]' or annot['/T'] == 'SepBasis_cb[1]' or annot['/T'] ==  'WhereSPListed_cb[0]' or annot['/T'] ==  'WhereCPListed_cb[0]' or annot['/T'] ==  'AttyFeePay_cb[0]'):
                                annot.update({
                                NameObject("/V"): NameObject("/2"),  # for btn use NameObject("/V"): NameObject("/1")
                                NameObject("/AS"): NameObject("/2")  # for btn use NameObject("/V"): NameObject("/1")
                                })
                            elif(annot['/T'] == 'WhereSPListed_cb[2]' or annot['/T'] ==  'WhereCPListed_cb[2]'):
                                annot.update({
                                NameObject("/V"): NameObject("/3"),  # for btn use NameObject("/V"): NameObject("/1")
                                NameObject("/AS"): NameObject("/3")  # for btn use NameObject("/V"): NameObject("/1")
                                })
                            # print(annot)
                        # print(annot)
                    if annot['/FT'] == "/Tx" and annot['/T'] == fields[vals]:
                        impu_field = dataFields[str(pageNum)][annot['/T']]
                        print(impu_field)
                        annot.update({
                            NameObject("/V"): PyPDF2.generic.TextStringObject(impu_field),  # NameObject("/V"): For text field use PyPDF2.generic.TextStringObject(<value>)
                        })
                        txtpointer += 1
                except Exception as e:
                    pass
            # Print the received lists
        writer.add_page(page)
# Save the modified PDF to a new file
    # if not os.path.exists(f"./static/filled_Pdfs/{dataFields['0']['Email_ft[0]']}"):
    #     os.makedirs(f"./static/filled_Pdfs/{dataFields['0']['Email_ft[0]']}/")
    with open(f"./static/filled_Pdfs/filled-out.pdf", "wb") as output_stream:
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
