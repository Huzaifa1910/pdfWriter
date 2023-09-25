from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import NameObject


textfieldsCheck1 = {
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
'Child2Name_tf[0]': "Enter Second Child's name",
'Child3Name_tf[0]': "Enter Third Child's name",
'Child4Name_tf[0]': "Enter Fourth Child's name",
'Child1Birthdate_dt[0]': "Enter First Child's Birth date",
'Child2Birthdate_dt[0]': "Enter Second Child's Birth date",
'Child3Date_dt[0]': "Enter Third Child's Birth date",
'Child4Birthdate_dt[0]': "Enter Fourth Child's Birth date",
'Child1Age_tf[0]': "Enter First Child's  Age",
'Child2Age_tf[0]': "Enter Second Child's  Age",
'Child3Age_tf[0]': "Enter Third Child's  Age",
'Child4Age_tf[0]': "Enter Fourth Child's  Age",
'Attachment4b[0]': 'continued on Attachment 4b.',
'UnbornChild_cb[0]': 'is there a child who is not yet born?',
'PartiesSignedVoluntaryPaternityDec_cb[0]': 'Petitioner and Respondent signed a voluntary declaration of parentage or paternity. (Attach a copy if available.)',

# Page 2 starts here
# 'Party1_ft[0]': 'PETITIONER:',
# 'Party2_ft[0]': 'RESPONDENT:',
'SepTypeDef_cb[0]': 'Legal separation of the marriage or domestic partnership based on (check one):', #check2
'SepTypeDef_cb[1]': 'Divorce of the marriage or domestic partnership based on (check one):',
'SepBasis_cb[0]': 'irreconcilable differences.',
'SepBasis_cb[1]': 'permanent legal incapacity to make decisions.', #check2
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
'WhereSPListed_cb[0]': 'Confirm as separate property the assets and debts Attachment 9b.', #check2
'WhereSPListed_cb[2]': 'Do you want to Confirm as separate property the assets and debts?', #check3
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

# page 3 starts here
'NoCommOrQuasiCommProperty_cb[0]': '"There are no such assets or debts that I know of to be divided by the court."',
'PropertyListed_cb[0]': '"Determine rights to community and quasi-community assets and debts. All such assets and debts are listed "',
'WhereCPListed_cb[1]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed  in Property Declaration (form FL-160).',
'WhereCPListed_cb[0]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed  in Attachment 10b.', #check2
'WhereCPListed_cb[2]': 'Is there any other community and quasi-community support you want?', #check3
'ListProperty_ft[0]': 'if yes please (specify)',
'FeesAndCost_cb[0]': "Do you want attorney's fees and costs to be payable?",
'AttyFeePay_cb[0]': 'Respondent ', #check2
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

# checkdict1 = {
# # 'Amended_cb[0]': 'AMENDED',
# # 'DissolutionOf_cb[0]': 'Dissolution (Divorce) of:',
# # 'Marriage_cb[0]': 'Marriage',
# # 'DomesticPartnership_cb[0]': 'Domestic Partnership',
# # 'NullityOf_cb[0]': 'Nullity of:',
# # 'Marriage_cb[1]': 'Marriage',
# # 'DomesticPartnership_cb[1]': 'Domestic Partnership',
# # 'LegalSeparationOf_cb[0]': 'Legal Separation of:',
# # 'Marriage_cb[2]': 'Marriage',
# # 'DomesticPartnership_cb[2]': 'Domestic Partnership',
# # 'WeAreMarried_cb[0]': 'We are married.',
# # 'DPEstablishedInCalifornia[0]': 'We are domestic partners and our domestic partnership was established in California.',
# # 'DPNOTEstablishedinCA_cb[0]': 'We are domestic partners and our domestic partnership was NOT established in California.',
# # 'RespondentMeetsResidencyReqs_cb[0]': 'Respondent ',
# # 'PetitionerMeetsResidencyReqs_cb[0]': 'Petitioner',
# # 'CheckBox61[0]': '(1)',
# # 'CheckBox61[1]': '(1)',
# # 'DPNOTEstablishedinCA_cb[1]': 'Our domestic partnership was established in California. Neither of us has to be a resident or have a domicile in California to dissolve our partnership here.',
# # 'SameSexMarriedInCA_cb[0]': 'We are the same sex, were married in California, but currently live in a jurisdiction that does not recognize, and will not dissolve, our marriage.This Petition is filed in the county where we married.',
# 'Button1[0]': 'FL-105'
# }


textfieldsCheck2 = {
# 'ChildSupport_ft[0]': 'Other (specify)',
# 'OtherSupport_ft[0]': 'Other (specify)',
# 'SeparatePropertyList1_tf[0]': 'Item',
# 'SeparatePropertyList3_tf[0]': 'Item',
# 'SeparatePropertyList2_tf[0]': 'Item',
# 'ConfirmPropertyList1To_tf[0]': 'Confirm to',
# 'ConfirmPropertyList3To_tf[0]': 'Confirm to',
# 'SeparatePropertyList4_tf[0]': 'Item',
# 'ConfirmPropertyList4To_tf[0]': 'Confirm to',
# 'SeparatePropertyList4_tf[1]': 'Item',
# 'ConfirmPropertyList4To_tf[1]': 'Confirm to',
# 'ConfirmPropertyList2To_tf[0]': 'Confirm to',
# 'CaseNumber_ft[0]': 'CASE NUMBER:',
# 'Party2_ft[0]': 'RESPONDENT:',
# 'Party1_ft[0]': 'PETITIONER:',
# 'Party1_ft[0]': 'PETITIONER:'
}

checkdict2 = {
# 'Nullity_cb[0]': 'Nullity of void marriage or domestic partnership based on  ',
# 'BasedOnIncest_cb[0]': 'incest.',
# 'BasedOnBigamy_cb[0]': 'bigamy.',
# 'NullityofVoidableMarriageOrDP_cb[0]': 'Nullity of voidable marriage or domestic partnership based on         ',
# 'BasedonAge_cb[0]': 'petitioner’s age at time of registration of domestic partnership or marriage.',
# 'PriorExistingMarriageOrDP_cb[0]': 'prior existing marriage or domestic partnership. ',
# 'BasedOnUnsoundMind_cb[0]': 'unsound mind.',
# 'BasedonFraud_cb[0]': 'fraud.',
# 'BasedOnForce_cb[0]': 'force.',
# 'BasedonPhysicalIncapacity_cb[0]': 'physical incapacity.',
# 'SepTypeDef_cb[0]': 'Legal separation of the marriage or domestic partnership based on (check one):',
# 'SepTypeDef_cb[1]': 'Divorce      or                       ',
# 'SepBasis_cb[0]': 'irreconcilable differences.',
# 'SepBasis_cb[1]': 'permanent legal incapacity to make decisions.',
# 'ToPetitioner_cb[0]': 'Petitioner',
# 'ToRespondent_cb[0]': 'Respondent',
# 'ToBothJointly_cb[0]': 'Joint',
# 'ToOther_cb[0]': 'Other',
# 'ToPetitioner_cb[1]': 'Petitioner',
# 'ToRespondent_cb[1]': 'Respondent',
# 'ToBothJointly_cb[1]': 'Joint',
# 'ToOther_cb[1]': 'Other',
# 'ForPetitioner_cb[0]': 'Petitioner',
# 'ForOther_cb[0]': 'Other',
# 'ForRespondent_cb[0]': 'Respondent',
# 'FormFL-311_cb[0]': 'form FL-311 ',
# 'FormFL-312_cb[0]': 'form FL-312 ',
# 'FormFL-341C_cb[0]': 'form FL-341(C)',
# 'FormFL-341D_cb[0]': 'form FL-341(D)',
# 'FormFL-341E[0]': 'form FL-341(E) ',
# 'Attachment6e1[0]': 'Attachment 6c(1)',
# 'OtherChildSupport_cb[0]': 'Other (specify):',
# 'EndJurixReRespondent_cb[0]': 'Respondent ',
# 'EndJurixRePetitioner_cb[0]': 'Petitioner',
# 'EndJurixReSupport[0]': "Terminate (end) the court's ability to award support to",
# 'PaySupporttoPetitioner_cb[0]': 'Petitioner',
# 'PaySupportoRespondent_cb[0]': 'Respondent ',
# 'PaySupport_cb[0]': 'Spousal or domestic partner support payable to',
# 'PartiesSignedVoluntaryPaternityDec_cb[0]': 'Reserve for future determination the issue of support payable to ',
# 'ReserveJurixSupportResp_cb[0]': 'Respondent ',
# 'ReserveJurixSupportPet_cb[0]': 'Petitioner',
# 'Other_cb[0]': 'Other (specify):',
# 'Button1[0]': 'Attachment 9b.',
# 'WhereSPListed_cb[0]': 'Attachment 9b.',
# 'ConfirmSeparateProperty_cb[0]': 'Confirm as separate property the assets and debts in',
# 'WhereSPListed_cb[1]': ' Property Declaration (form FL-160).',
# 'WhereSPListed_cb[2]': 'the following list.',
'Button1[1]': 'FL-160',
# 'NoSeparateProperty_cb[0]': 'There are no such assets or debts that I know of to be confirmed by the court.',
# 'Party1_ft[0]': 'PETITIONER:'
}

checkdict3 = {
# 'NoCommOrQuasiCommProperty_cb[0]': 'There are no such assets or debts that I know of to be divided by the court.',
# 'WhereCPListed_cb[0]': 'in Attachment 10b.',
# 'WhereCPListed_cb[1]': 'in Property Declaration (form FL-160).',
# 'PropertyListed_cb[0]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed ',
# 'WhereCPListed_cb[2]': 'as follows (specify):',
# 'Button1[0]': 'FL-160',
# 'Button1[1]': 'Attachment 10b.',
# 'FeesAndCost_cb[0]': "Attorney's fees and costs payable by ",
# 'AttyFeePay_cb[0]': 'Respondent ',
# 'AttyFeePay_cb[1]': 'Petitioner',
# 'RestoreFormerName_cb[0]': "Petitioner's former name be restored to ",
# 'ContinuedOnAttachment_cb[0]': 'Continued on Attachment 11c.',
# 'OtherRequests_cb[0]': 'Other (specify):'
}

textfieldsCheck3 = {
#      'CaseNumber_ft[0]': 'CASE NUMBER:',
# 'Party2_ft[0]': 'RESPONDENT:',
# 'Party1_ft[0]': 'PETITIONER:',
# 'ListProperty_ft[0]': 'as follows (specify)',
# 'SpecifyFormerName_tf[0]': '(specify):',
# 'SpecifyOtherRequests_tf[0]': 'Other (specify)',
# 'SigDate[0]': 'Date:',
# 'PrintPetitionerName_tf[0]': '(TYPE OR PRINT NAME)',
# 'SigDate[1]': 'Date:',
# 'PrintPetitionerAttorneyName_tf[0]': '(TYPE OR PRINT NAME)'
}

# {'/AP': {'/D': {'/2': IndirectObject(242, 0, 2477488354768), '/Off': IndirectObject(225, 0, 2477488354768)}, '/N': {'/2': IndirectObject(214, 0, 2477488354768)}}, '/AS': '/1', '/DA': '/ZaDb 7.2 Tf 0 g /ZaDb 7.2 Tf 0 g ', '/F': 4, '/FT': '/Btn', '/MK': {'/CA': '6'}, '/P': IndirectObject(1, 0, 2477488354768), '/Parent': IndirectObject(443, 0, 2477488354768), '/Rect': [174.067, 660.464, 183.067, 669.464], '/StructParent': 78, '/Subtype': '/Widget', '/T': 'SepTypeDef_cb[0]', '/TU': 'Legal separation of the marriage or domestic partnership based on (check one):', '/Type': '/Annot', '/V': '/1'}

textfieldsDict = {}
btnsDict = {}

reader = PdfReader("output.pdf")
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
        textfieldsDict = {}
        btnsDict = {}

        annot = page["/Annots"][i].get_object()
        # print(i,annot)
        # print(annot['/FT'] == "/Btn")
        try:
            if annot['/FT'] == "/Btn" and (annot['/T'] == 'DissolutionOf_cb[0]' or annot['/T'] == 'Marriage_cb[0]'):
                print(annot)
                # btnsDict[str(annot['/T'])] = str(annot['/TU'])
                # print(btnsDict)
                # impu_field = input(f'{annot["/T"]} Yes/No: ')
                # print(annot)
                # Try different values to mark the checkbox as checked
                if True:
                    annot.update({
                        NameObject("/V"): NameObject("/1"),  # Try "/1" or "/Yes" or "/On"
                        NameObject("/AS"): NameObject("/1")  # Try "/1" or "/Yes" or "/On"
                    })
                #     print(annot)
                # print(annot)
            if annot['/FT'] == "/Tx":
                textFields.append(annot['/TU'])
                textfieldsDict[str(annot['/T'])] = str(annot['/TU'])
                print(textfieldsDict)
                # impu_field = input(f'{annot["/T"]} Tell me value: ')
                # annot.update({
                #     NameObject("/V"): NameObject(f'/{impu_field}'),  # Try "/1" or "/Yes" or "/On"
                #     NameObject("/AS"): NameObject(f'/{impu_field}')  # Try "/1" or "/Yes" or "/On"
                # })
                # print(annot)
        except:
            pass
                
        s += 1
        # print(s)

    # # Add the modified page to the writer
inputsDict['btns'] = btns 
inputsDict['textFields'] = textFields
# print(inputsDict)
print(textfieldsDict)
print(btnsDict)
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
