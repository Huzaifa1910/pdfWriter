// // ATTORNEY FOR (name):
// : 
// "Enter Attorney For (Name):"
// Age
// : 
// "Enter Fourth Child's Age:"
// BRANCH NAME:
// : 
// "Enter Branch Name:"
// Birth date
// : 
// "Enter Fourth Child's Birth Date"
// CASE NUMBER:
// : 
// "Enter Case Number"
// CITY AND ZIP CODE:
// : 
// "Enter City and Zip Code:"
// CITY:
// : 
// "Enter City:"
// Child's name
// : 
// "Enter Fourth Child's Name"
// Date of marriage (specify):
// : 
// "Enter Date of Marriage:"
// Date of separation (specify):
// : 
// "Enter Date of Separation 1"
// E-MAIL ADDRESS:
// : 
// "Enter E-Mail Address:"
// FAX NO.:
// : 
// "Enter Fax No."
// FIRM NAME:
// : 
// "Enter Firm Name:"
// MAILING ADDRESS:
// : 
// "Enter Mailing Address:"
// Months
// : 
// "Enter Months 2"
// NAME:
// : 
// "Enter Your Name:"
// PETITIONER:
// : 
// "Enter Petitioner"
// "Petitioner lives in (specify): "
// : 
// "Enter Petitioner Lives In\""
// RESPONDENT:
// : 
// "Enter Respondent"
// Respondent lives in (specify):
// : 
// "Enter Respondent Lives in (Specify):"
// STATE BAR NUMBER:
// : 
// "Enter State Bar Number:"
// STATE:
// : 
// "Enter State:"
// STREET ADDRESS:
// : 
// "Enter Street Address:"
// SUPERIOR COURT OF CALIFORNIA, COUNTY OF
// : 
// "Enter Superior Court of California County of:"
// TELEPHONE NO.:
// : 
// "Enter Telephone No."
// Years
// : 
// "Enter Years 2:"
// ZIP CODE:
// : 
// "Enter Zip Code:"
// date
// : 
// "Enter Date"





var dataFields = {
    0:{'BarNo_ft[0]': 'ENTER STATE BAR NUMBER:',
    'AttyName_ft[0]': 'ENTER ATTORNEY NAME:',
    'AttyFirm_ft[0]': 'ENTER ATTORNEY FIRM NAME:',
    'AttyStreet_ft[0]': 'ENTER ATTORNEY STREET ADDRESS:',
    'AttyCity_ft[0]': 'ENTER ATTORNEY CITY:',
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
    'CaseNumber_ft[0]': 'ENTER CASE NUMBER:', //#petiion se sart kro
    'Amended_cb[0]': 'AMENDED? (Yes/No)',
    'DissolutionOf_cb[0]': 'IS IT A DISSOLUTION (DIVORCE)  (Yes/No)?', //#'Dissolution (Divorce) of:'
    'Marriage_cb[0]': 'IS IT A DISSOLUTION (DIVORCE) OF MARRIAGE?  (Yes/No)',
    'DomesticPartnership_cb[0]': 'OR IS IT A DISSOLUTION (DIVORCE) OF DOMESTIC PARTNERSHIP?  (Yes/No)',
    'NullityOf_cb[0]': 'IS IT NULLITY?  (Yes/No)',
    'Marriage_cb[1]': 'IS IT NULLITY  OF MARRIAGE?  (Yes/No)',
    'DomesticPartnership_cb[1]': 'IS IT NULLITY  OF DOMESTIC PARTNERSHIP?  (Yes/No)',
    'LegalSeparationOf_cb[0]': 'IS IT LEGAL SEPARATION?  (Yes/No)',
    'Marriage_cb[2]': 'IS IT LEGAL SEPARATION OF MARRIAGE?  (Yes/No)',
    'DomesticPartnership_cb[2]': 'IS IT A LEGAL SEPARATION OF DOMESTIC PARTNERSHIP?  (Yes/No)',
    'WeAreMarried_cb[0]': '"We are married."  (Yes/No)',
    'DPEstablishedInCalifornia[0]': '"We are domestic partners and our domestic partnership was established in California."  (Yes/No)',
    'DPNOTEstablishedinCA_cb[0]': '"We are domestic partners and our domestic partnership was NOT established in California."  (Yes/No)',
    'RespondentMeetsResidencyReqs_cb[0]': 'Respondent has been a resident of this state for atleast six months and of this county for atleast three months immediately preceding the filing of this Petition.(For a divorce, unless you are in the legal relationship described in 1b, atleast one of you must comply with this requirement.)  (Yes/No)',
    'PetitionerMeetsResidencyReqs_cb[0]': 'Petitioner has been a resident of this state for atleast six months and of this county for atleast three months immediately preceding the filing of this Petition.(For a divorce, unless you are in the legal relationship described in 1b, atleast one of you must comply with this requirement.)  (Yes/No)',
    'DPNOTEstablishedinCA_cb[1]': '"Our domestic partnership was established in California. Neither of us has to be a resident or have a domicile in California to dissolve our partnership here."  (Yes/No)',
    'SameSexMarriedInCA_cb[0]': '"We are the same sex, were married in California, but currently live in a jurisdiction that does not recognize, and will not dissolve, our marriage.This Petition is filed in the county where we married."  (Yes/No)',
    'RespondentsResidence_tf[0]': 'Respondent lives in (specify):',
    'PetitionersResidence_tf[0]': 'Petitioner lives in (specify): ',
    'CheckBox61[0]': 'Is this dissolution of marriage?  (Yes/No)',
    'DateOfMarriage_dt[0]': 'Date of marriage (specify):',
    'DateOfSeparation_dt[0]': 'Date of separation of your Marriage (specify):',
    'MonthsSeparated_tf[0]': 'Enter Years Since you have been separated',
    'MonthsSeparated_tf[1]': 'Enter Months if remaining after years e.g. X years Y months',
    'CheckBox61[1]': 'Is it a dissolution of domestic partnership?  (Yes/No)',
    'DateTimeField1[0]': 'Enter registeration date of domestic partnership with the California Secretary of State or other state equivalent (specify below):', //#other one 3 b 
    'DatePartnersSeparated_dt[0]': 'Date of separation of your Partnership (specify):',
    'MonthsSeparated_tf[3]': 'Enter Years Since you have been separated',
    'MonthsSeparated_tf[2]': 'Enter Months if remaining after years e.g. X years Y months',
    'ThereAreNoMinorChildren_cb[0]': 'There are no minor children.  (Yes/No)',
    'MinorChildrenList_cb[0]': 'The minor children are:  (Yes/No)',
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
    'Attachment4b[0]': 'continued on Attachment 4b. (Yes/No)',
    'UnbornChild_cb[0]': 'is there a child who is not yet born?  (Yes/No)',
    'PartiesSignedVoluntaryPaternityDec_cb[0]': 'Petitioner and Respondent signed a voluntary declaration of parentage or paternity. (Attach a copy if available.)  (Yes/No)',
},
    // # Page 2 starts here
    // # 'Party1_ft[0]': 'PETITIONER:',
    // # 'Party2_ft[0]': 'RESPONDENT:',
    1:{  'SepTypeDef_cb[0]': 'Legal separation of the marriage or domestic partnership based on (check one):  (Yes/No)',
    'SepTypeDef_cb[1]': 'Divorce of the marriage or domestic partnership based on (check one):  (Yes/No)',
    'SepBasis_cb[0]': 'irreconcilable differences.  (Yes/No)',
    'SepBasis_cb[1]': 'permanent legal incapacity to make decisions.  (Yes/No)',
    'Nullity_cb[0]': 'Is it a Nullity of void marriage or domestic partnership?  (Yes/No)',
    'BasedOnIncest_cb[0]': 'Nullity of void marriage or domestic partnership based on incest.  (Yes/No)',
    'BasedOnBigamy_cb[0]': 'Nullity of void marriage or domestic partnership based on bigamy.  (Yes/No)',
    'NullityofVoidableMarriageOrDP_cb[0]': 'Is it a Nullity of voidable marriage or domestic partnership?  (Yes/No)',
    'BasedonAge_cb[0]': 'Nullity of voidable marriage or domestic partnership based on petitioner’s age at time of registration of domestic partnership or marriage.  (Yes/No)',
    'PriorExistingMarriageOrDP_cb[0]': ' Nullity of voidable marriage or domestic partnership based on prior existing marriage or domestic partnership.  (Yes/No)',
    'BasedOnUnsoundMind_cb[0]': ' Nullity of voidable marriage or domestic partnership based on unsound mind.  (Yes/No)',
    'BasedonFraud_cb[0]': ' Nullity of voidable marriage or domestic partnership based on fraud.  (Yes/No)',
    'BasedOnForce_cb[0]': ' Nullity of voidable marriage or domestic partnership based on force.  (Yes/No)',
    'BasedonPhysicalIncapacity_cb[0]': ' Nullity of voidable marriage or domestic partnership based on physical incapacity.  (Yes/No)',
    // # legal cutody of children to
    'ToPetitioner_cb[0]': ' legal cutody of children to Petitioner  (Yes/No)',
    'ToRespondent_cb[0]': ' legal cutody of children to Respondent  (Yes/No)',
    'ToBothJointly_cb[0]': 'legal cutody of children to Joint  (Yes/No)',
    'ToOther_cb[0]': 'legal cutody of children to Other  (Yes/No)',
    // # Physical custody of chuildren to
    'ToPetitioner_cb[1]': 'Physical custody of chuildren to Petitioner  (Yes/No)',
    'ToRespondent_cb[1]': 'Physical custody of chuildren to Respondent  (Yes/No)',
    'ToBothJointly_cb[1]': 'Physical custody of chuildren to Joint  (Yes/No)',
    'ToOther_cb[1]': 'Physical custody of chuildren to Other  (Yes/No)',
    // # child visitation 
    'ForPetitioner_cb[0]': 'child visitation (parenting time) be granted to Petitioner  (Yes/No)',
    'ForRespondent_cb[0]': 'child visitation (parenting time) be granted to Respondent  (Yes/No)',
    'ForOther_cb[0]': 'child visitation (parenting time) be granted to Other  (Yes/No)',
    // # are requested
    'FormFL-311_cb[0]': 'are requested in form FL-311  (Yes/No)',
    'FormFL-312_cb[0]': 'are requested in form FL-312  (Yes/No)',
    'FormFL-341C_cb[0]': 'are requested in form FL-341(C)  (Yes/No)',
    'FormFL-341D_cb[0]': 'are requested in form FL-341(D)  (Yes/No)',
    'FormFL-341E[0]': 'are requested in form FL-341(E)   (Yes/No)',
    'Attachment6e1[0]': 'are requested in Attachment 6c(1)  (Yes/No)',
    'OtherChildSupport_cb[0]': 'Any Other Child Support you want? Read in 7 Child Support Section (specify):  (Yes/No)',
    'ChildSupport_ft[0]': 'If Yes Please Specify',
    'PaySupport_cb[0]': 'Do you want spousal or domestic partner support?  (Yes/No)',
    'PaySupporttoPetitioner_cb[0]': 'Is spousal or domestic partner support payable to the Petitioner?  (Yes/No)',
    'PaySupportoRespondent_cb[0]': 'Is spousal or domestic partner support payable to the Respondent?  (Yes/No)',
    'EndJurixReSupport[0]': "Do you want Terminate (end) the court's ability to award support?  (Yes/No)",
    'EndJurixRePetitioner_cb[0]': "Terminate (end) the court's ability to award support to Petitioner  (Yes/No)",
    'EndJurixReRespondent_cb[0]': "Terminate (end) the court's ability to award support to Respondent  (Yes/No)",
    'PartiesSignedVoluntaryPaternityDec_cb[0]': 'Should we reserve for future determination the issue of support payable?  (Yes/No)',
    'ReserveJurixSupportResp_cb[0]': 'Reserve for future determination the issue of support payable to Respondent  (Yes/No)',
    'ReserveJurixSupportPet_cb[0]': 'Reserve for future determination the issue of support payable to Petitioner  (Yes/No)',
    'Other_cb[0]': 'Any Other Spousal or Domestic Partner Support you want?  (Yes/No)',
    'OtherSupport_ft[0]': 'If Yes Please Specify',
    'NoSeparateProperty_cb[0]': '"There are no such assets or debts that I know of to be confirmed by the court."  (Yes/No)',
    'ConfirmSeparateProperty_cb[0]': '"Confirm as separate property the assets and debts"  (Yes/No)',
    'WhereSPListed_cb[1]': ' Confirm as separate property the assets and debts Property Declaration (form FL-160).  (Yes/No)',
    'WhereSPListed_cb[0]': 'Confirm as separate property the assets and debts Attachment 9b.  (Yes/No)',
    'WhereSPListed_cb[2]': 'Do you want to Confirm as separate property the assets and debts?  (Yes/No)',
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
// Pge 3
  2:{  'NoCommOrQuasiCommProperty_cb[0]': '"There are no such assets or debts that I know of to be divided by the court."  (Yes/No)',
    'PropertyListed_cb[0]': '"Determine rights to community and quasi-community assets and debts. All such assets and debts are listed "  (Yes/No)',
    'WhereCPListed_cb[1]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed  in Property Declaration (form FL-160).  (Yes/No)',
    'WhereCPListed_cb[0]': 'Determine rights to community and quasi-community assets and debts. All such assets and debts are listed  in Attachment 10b.  (Yes/No)',
    'WhereCPListed_cb[2]': 'Is there any other community and quasi-community support you want?  (Yes/No)',
    'ListProperty_ft[0]': 'if yes please (specify)',
    'FeesAndCost_cb[0]': "Do you want attorney's fees and costs to be payable by any other of you?  (Yes/No)",
    'AttyFeePay_cb[0]': 'to be payable by Respondent?  (Yes/No)',
    'AttyFeePay_cb[1]': 'to be payable by Petitioner?  (Yes/No)',
    'RestoreFormerName_cb[0]': "Should the Petitioner's former name be restored?  (Yes/No)",
    'SpecifyFormerName_tf[0]': 'if yes please specify:',
    'OtherRequests_cb[0]': 'Is there any other request?  (Yes/No)',
    'SpecifyOtherRequests_tf[0]': 'if yes please specify',
    'ContinuedOnAttachment_cb[0]': 'Continued on Attachment 11c.  (Yes/No)',
    'SigDate[0]': 'Date:',
    'PrintPetitionerName_tf[0]': 'Type or Print Petitioner Name',
    'SigDate[1]': 'Date:',
    'PrintPetitionerAttorneyName_tf[0]': 'Type or Print Petitioner Attorney Name',
    
    
    }
}
    
var pdfData
var pdfPage
var textmsgsDict = { // this is the dictionary that will be sent to the backend
    0:{},
    1:{},
    2:{},
}
var textmsgsDictAll = {}
var btnsmsgsDict = {} 
var btnsmsgsDictAll = {}
var textmsgs = []
var textmsgsAll = []
var btnsmsgs = []
var btnsmsgsAll = []
var limit 
var pageNo = 0
var pageRemainder
// fetch('/get_fields', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
// .then(response => response.json())
// .then(data => {
//     // Use the 'data' dictionary in your frontend code
//     pdfData = data
// })
// .catch(error => {
//     console.error('Error:', error);
// });
setTimeout(function(){
    const botMessage = createBotMessage(`Greetings! <br> I will help you to fill out the pdf showing on your right. <br> Answer me the questions I ask you and I will fill out the pdf for you. <br> Say "Start" to begin.`);
    chatMessages.appendChild(botMessage);
}, 3000);

// const uploadedPDF = sessionStorage.getItem('uploadedPDF');
// if (uploadedPDF) {
//     const formData = JSON.parse(uploadedPDF);
    
//     // Access the uploaded PDF file
//     const pdfFile = formData.get('pdfFile');

//     if (pdfFile) {
//         // Create a URL for the uploaded PDF
//         const pdfURL = URL.createObjectURL(pdfFile);

//         // Display the PDF using an embed element or another method of your choice
//         const pdfViewer = document.getElementById('pdf');
//         pdfViewer.innerHTML = `<embed src="${pdfURL}" width="100%" height="500" type="application/pdf">`;
//     }
// }
// else {
//     alert('No PDF file was uploaded.');
//     window.location.href = 'upload.html'; // Redirect back to the upload page if no PDF was uploaded.
// }
var mode = 'textFields'

// Creating questions logics
const chatMessages = document.querySelector('.chat-messages');
// Function to scroll to the bottom of the container
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
const chatInput = document.querySelector('.chat-input input');
const chatSendButton = document.querySelector('.chat-input button');
var startVar = 0
// async function start(){
//     // const botMessageStart = createBotMessage(`Starting from page 1`);
//     // chatMessages.appendChild(botMessageStart);
//     // console.log(pdfData[1]['textFields'][0])
//     const botMessage = createBotMessage(`Enter ${pdfData[1]['textFields'][startVar]}`);
//     chatMessages.appendChild(botMessage);
//     startVar = startVar + 1
//     chatInput.value = '';
// }

var startFlag = 0
var messageFlag = 0
const propertyNames1 = Object.keys(dataFields[0]);
const propertyNames2 = Object.keys(dataFields[1]);
const propertyNames3 = Object.keys(dataFields[2]);
const propertyNames = propertyNames1.concat(propertyNames2,propertyNames3)
chatSendButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default action of the "click" event
    const message = chatInput.value;
        if(startVar == propertyNames.length){
            textmsgsDict[pageNo][propertyNames[startVar-1]] = message
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`End <br> Thank you for using our service. <br> Your pdf is ready to download. <br> Click on the check button to check the pdf.`);
            var chat = document.getElementsByClassName('chat-input')[0]
            chat.innerHTML = ''
            chat.innerHTML = `<button class="btn btn-lg btn-primary" id="check" style="width: 100%" onclick="check()">Check</button>`
            chatMessages.appendChild(botMessage);
            scrollToBottom();
            return
        }
        if (message.trim() !== '') {
            if(startFlag == 0 && message.toLowerCase() != "start"){
                const userMessage = createUserMessage(message);
                chatMessages.appendChild(userMessage);
                chatInput.value = '';
                const botMessage = createBotMessage(`Type "Start" to begin.`);
                chatMessages.appendChild(botMessage);
                scrollToBottom();
                return
            }
            
            if(message.toLowerCase() == "start"){
                const userMessage = createUserMessage(message);
                chatMessages.appendChild(userMessage);
                chatInput.value = '';
                const botMessage = createBotMessage(dataFields[pageNo][propertyNames[startVar]]);
                chatMessages.appendChild(botMessage);
                chatInput.value = '';
                startVar = startVar + 1
                startFlag = 1
                scrollToBottom()
                return
            }
            console.log(Object.keys(dataFields[pageNo]).length)
            console.log(Object.keys(textmsgsDict[pageNo]).length)
            if(Object.keys(dataFields[pageNo]).length-1 == Object.keys(textmsgsDict[pageNo]).length){
                textmsgsDict[pageNo][propertyNames[startVar-1]] = message
                messageFlag = 1
                pageNo = pageNo + 1
                if(pageNo == 3){
                    pageNo = 2
                }
                console.log(pageNo)
                return  
            }
            if(messageFlag == 0){
                textmsgsDict[pageNo][propertyNames[startVar-1]] = message
            }
            // textmsgsDict[pageNo][propertyNames[startVar-1]] = message
            messageFlag = 0
            console.log(textmsgsDict)
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(dataFields[pageNo][propertyNames[startVar]]);
            chatMessages.appendChild(botMessage);
            console.log(propertyNames[startVar])
            console.log(pageNo)
            console.log(startVar)
            chatInput.value = '';
            scrollToBottom();
            
            startVar = startVar + 1
            return
        }
    
   
});
// chatSendButton.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevents the default action of the "click" event
//     console.log(startVar)
//     console.log(limit)
//     const message = chatInput.value;
//     if(startVar == limit + 1){
//         pageNo = pageNo + 1
//         // console.log(pageNo/2)
//         pageRemainder = pageNo/2
//         console.log(parseInt(pageRemainder))
//         pdfPage = getPageData(parseInt(pageRemainder))
//         // pdfPage = getPageData(pageNo/2)
//         startVar = 0
//         if(mode == 'textFields'){
//             limit = pdfPage['btns'].length
//             mode = 'btnFields'
//             textmsgsAll.push(textmsgs)
//             console.log(textmsgsAll)
//             textmsgs = []
//             const userMessage = createUserMessage(message);
//             chatMessages.appendChild(userMessage);
//             chatInput.value = '';
//             const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             chatInput.value = '';
//         }else{
//             const userMessage = createUserMessage(message);
//             chatMessages.appendChild(userMessage);
//             btnsmsgsAll.push(btnsmsgs)
//             console.log(btnsmsgsAll)
//             btnsmsgs = []
//             chatInput.value = '';
//             const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             chatInput.value = '';
//             limit = pdfPage['textFields'].length
//             mode = 'textFields'
//         }
        
        
//         console.log(textmsgs)
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         chatInput.value = '';
//         const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]}`);
//         chatMessages.appendChild(botMessage);
//         startVar = startVar + 1
//         chatInput.value = '';
//         scrollToBottom();
//     }
//     while(startFlag == 0 && message.toLowerCase() != "start"){
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         chatInput.value = '';
//         const botMessage = createBotMessage(`Type "Start" to begin.`);
//         chatMessages.appendChild(botMessage);
//         scrollToBottom();

//         return
//     }
//     startFlag = 1
//     if (message.trim() !== '') {
//         if(message.toLowerCase() == "start"){
//             const userMessage = createUserMessage(message);
//             chatMessages.appendChild(userMessage);
//             chatInput.value = '';
//             const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             chatInput.value = '';
//         scrollToBottom();
//         return
//         }
//         if(mode == 'textFields'){
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         textmsgs.push(message)
//         chatInput.value = '';

//         // Send user's message to the server and get bot's response
//         const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
//         if(pdfPage['textFields'][startVar] == undefined){
//             const botMessage = createBotMessage(`Now Answer me in Yes or No for the following questions <br> reply "Yes" to mark Check <br>  "No" to leave blank <br> say "ok" for the acknowledgment`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             scrollToBottom();
//             return
//         }
//         startVar = startVar + 1
//         chatMessages.appendChild(botMessage);
//         scrollToBottom();
//         console.log(startVar)
//     }else if(mode == 'btnFields'){
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         btnsmsgs.push(message)
//         chatInput.value = '';

//         // Send user's message to the server and get bot's response
//         const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
//         if(pdfPage['btns'][startVar] == undefined){
//             if(parseInt(pageNo) == 5){
//                 const botMessage = createBotMessage(`End <br> Thank you for using our service. <br> Your pdf is ready to download. <br> Click on the check button to check the pdf. <button id="check" class="btn btn-sm btn-primary" onclick="check()">Check</button> `);
//                 chatMessages.appendChild(botMessage);
//                 btnsmsgsAll.push(btnsmsgs)
//                 console.log(btnsmsgsAll)
//                 btnsmsgs = []
//             }
//             else{
//                 const botMessage = createBotMessage(`Compelted page ${parseInt(pageRemainder+1)}`);
//                 chatMessages.appendChild(botMessage);
//             }
//             startVar = startVar + 1
//             scrollToBottom();
//             console.log(textmsgs)
//             console.log(btnsmsgs)
//             return
//         }
//         startVar = startVar + 1
//         chatMessages.appendChild(botMessage);
//         scrollToBottom();
//         console.log(startVar)
//     }
//     }
   
// });


// chatInput.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) { // If "Enter" key is pressed
//         event.preventDefault(); // Prevents the default action of the "click" event
//     console.log(startVar)
//     console.log(limit)
//     const message = chatInput.value;
//     if(startVar == limit + 1){
//         pageNo = pageNo + 1
//         pageRemainder = pageNo/2
//         console.log(parseInt(pageRemainder))
//         pdfPage = getPageData(parseInt(pageRemainder))
//         startVar = 0
//         if(mode == 'textFields'){
//             limit = pdfPage['btns'].length
//             mode = 'btnFields'
//             textmsgsAll.push(textmsgs)
//             textmsgsDictAll[pageNo] = textmsgsDict
//             console.log(textmsgsDictAll)
//             textmsgs = []
//             textmsgsDict = {}
//             const userMessage = createUserMessage(message);
//             chatMessages.appendChild(userMessage);
//             chatInput.value = '';
//             const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             chatInput.value = '';
//         }else{
//             const userMessage = createUserMessage(message);
//             chatMessages.appendChild(userMessage);
//             btnsmsgsAll.push(btnsmsgs)
//             console.log(btnsmsgsAll)
//             btnsmsgs = []
//             chatInput.value = '';
//             const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             chatInput.value = '';
//             limit = pdfPage['textFields'].length
//             mode = 'textFields'
//         }
        
//         console.log(textmsgs)
//         scrollToBottom();
//         return
//     }
//     while(startFlag == 0 && message.toLowerCase() != "start"){
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         chatInput.value = '';
//         const botMessage = createBotMessage(`Type "Start" to begin.`);
//         chatMessages.appendChild(botMessage);
//         scrollToBottom();
//         return
//     }
//     startFlag = 1
//     if (message.trim() !== '') {
//         if(message.toLowerCase() == "start"){
//             const userMessage = createUserMessage(message);
//             chatMessages.appendChild(userMessage);
//             chatInput.value = '';
//             const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             chatInput.value = '';
//         scrollToBottom();
//         return
//         }
//         if(mode == 'textFields'){
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         textmsgs.push(message)
//         textmsgsDict[pdfPage['textFields'][startVar-1]] = message
//         chatInput.value = '';

//         // Send user's message to the server and get bot's response
//         const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
//         if(pdfPage['textFields'][startVar] == undefined){
//             const botMessage = createBotMessage(`Now Answer me in Yes or No for the following questions <br> reply "Yes" to mark Check <br>  "No" to leave blank <br> say "ok" for the acknowledgment`);
//             chatMessages.appendChild(botMessage);
//             startVar = startVar + 1
//             scrollToBottom();
//             return
//         }
//         startVar = startVar + 1
//         chatMessages.appendChild(botMessage);
//         scrollToBottom();
//         console.log(startVar)
//     }else if(mode == 'btnFields'){
//         // while(message.toLowerCase() != "yes" && message.toLowerCase() != "no"){
//         //     const userMessage = createUserMessage(message);
//         //     chatMessages.appendChild(userMessage);
//         //     chatInput.value = '';
//         //     const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
//         //     chatMessages.appendChild(botMessage);
//         //     scrollToBottom();
//         //     return
//         // }
//         const userMessage = createUserMessage(message);
//         chatMessages.appendChild(userMessage);
//         btnsmsgs.push(message)
//         chatInput.value = '';

//         // Send user's message to the server and get bot's response
//         const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
//         if(pdfPage['btns'][startVar] == undefined){
//             if(parseInt(pageNo) == 5){
//                 const botMessage = createBotMessage(`End <br> Thank you for using our service. <br> Your pdf is ready to download. <br> Click on the check button to check the pdf. <button id="check" class="btn btn-sm btn-primary" onclick="check()">Check</button> `);
//                 chatMessages.appendChild(botMessage);
//                 btnsmsgsAll.push(btnsmsgs)
//                 console.log(btnsmsgsAll)
//                 btnsmsgs = []
//             }
//             else{
//                 const botMessage = createBotMessage(`Completed page ${parseInt(pageRemainder + 1)}`);
//                 chatMessages.appendChild(botMessage);
//             }
//             startVar = startVar + 1
//             scrollToBottom();
//             console.log(textmsgs)
//             console.log(btnsmsgs)
//             return
//         }
//         startVar = startVar + 1
//         chatMessages.appendChild(botMessage);
//         scrollToBottom();
//         console.log(startVar)
//     }
//     }
// }
// });

chatInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) { // If "Enter" key is pressed
        event.preventDefault(); // Prevents the default action of the "click" event
        const message = chatInput.value;
        if(startVar == propertyNames.length){
            textmsgsDict[pageNo][propertyNames[startVar-1]] = message
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`End <br> Thank you for using our service. <br> Your pdf is ready to download. <br> Click on the check button to check the pdf.`);
            var chat = document.getElementsByClassName('chat-input')[0]
            chat.innerHTML = ''
            chat.innerHTML = `<button class="btn btn-lg btn-primary" id="check" style="width: 100%" onclick="check()">Check</button>`
            chatMessages.appendChild(botMessage);
            scrollToBottom();
            return
        }
        if (message.trim() !== '') {
            if(startFlag == 0 && message.toLowerCase() != "start"){
                const userMessage = createUserMessage(message);
                chatMessages.appendChild(userMessage);
                chatInput.value = '';
                const botMessage = createBotMessage(`Type "Start" to begin.`);
                chatMessages.appendChild(botMessage);
                scrollToBottom();
                return
            }
            
            if(message.toLowerCase() == "start"){
                const userMessage = createUserMessage(message);
                chatMessages.appendChild(userMessage);
                chatInput.value = '';
                const botMessage = createBotMessage(dataFields[pageNo][propertyNames[startVar]]);
                chatMessages.appendChild(botMessage);
                chatInput.value = '';
                startVar = startVar + 1
                startFlag = 1
                scrollToBottom()
                return
            }
            console.log(Object.keys(dataFields[pageNo]).length)
            console.log(Object.keys(textmsgsDict[pageNo]).length)
            if(Object.keys(dataFields[pageNo]).length-1 == Object.keys(textmsgsDict[pageNo]).length){
                textmsgsDict[pageNo][propertyNames[startVar-1]] = message
                messageFlag = 1
                pageNo = pageNo + 1
                if(pageNo == 3){
                    pageNo = 2
                }
                console.log(pageNo)
                return  
            }
            if(messageFlag == 0){
                textmsgsDict[pageNo][propertyNames[startVar-1]] = message
            }
            // textmsgsDict[pageNo][propertyNames[startVar-1]] = message
            messageFlag = 0
            console.log(textmsgsDict)
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(dataFields[pageNo][propertyNames[startVar]]);
            chatMessages.appendChild(botMessage);
            console.log(propertyNames[startVar])
            console.log(pageNo)
            console.log(startVar)
            chatInput.value = '';
            scrollToBottom();
            
            startVar = startVar + 1
            return
        }
    
    }
}
    )


function check(){
    const payload = {
        dataFields: textmsgsDict,
    };
    
    // Send a POST request to the Flask API
    fetch('/receive-lists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // This will print the response from the API
        // i want to redirect to check.html on new tab
        window.open('/check.html', '_blank');
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function createUserMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('user-message');
    messageContainer.innerHTML = message;
    return messageContainer;
}

function createBotMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('bot-message');
    messageContainer.innerHTML = message;
    return messageContainer;
}

// PDFObject.embed("E:/MLSA/MSLearn_SA_StyleGuide_External_V1.1_081120.pdf", "#pdf", { 
//     height: "800px",
//         pdfOpenParams: { 
//         view: "FitV",
//         pagemode: "none",
//         zoom: "100%",
//         scrollbar: "0",
//         toolbar: "0",
//         statusbar: "0",
//         messages: "0"
//       }
//   });
var c = localStorage.getItem('filepath')
PDFObject.embed(c, "#pdf", { // Write by replacing X
    height: "690px", 
    width: "100%", 
    pdfOpenParams: { 
        zoom: "100%",
        toolbar: "0",
        statusbar: "0",
        navpanes: "0",
        scrollbar: "0",
        viewarea: "fit",
        pagemode: "none"
    } 
});

// PDFObject.embed(X, "#pdf", { // Write by replacing X
//     height: "690px", 
//     width: "100%", 
//     pdfOpenParams: { 
//         zoom: "100%",
//         toolbar: "0",
//         statusbar: "0",
//         navpanes: "0",
//         scrollbar: "0",
//         viewarea: "fit",
//         pagemode: "none"
//     } 
// });
//   height: "800px",
//   pdfOpenParams: { 
//     view: "FitV",
//     pagemode: "none",
//     zoom: "90%"
//   },
//   options: {
//     pdfOpenParams: {
//       toolbar: "0",
//     }
//   }

//   v


