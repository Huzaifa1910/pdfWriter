var pdfData
var pdfPage
var textmsgs = []
var textmsgsAll = []
var btnsmsgs = []
var btnsmsgsAll = []
var limit 
var pageNo = 0
var pageRemainder
fetch('/get_fields', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    // Use the 'data' dictionary in your frontend code
    pdfData = data
})
.catch(error => {
    console.error('Error:', error);
});
setTimeout(function(){
    console.log(pdfData)
    const botMessage = createBotMessage(`Greetings! <br> I will help you to fill out the pdf showing on your right. <br> Answer me the questions I ask you and I will fill out the pdf for you. <br> Say "Start" to begin.`);
    chatMessages.appendChild(botMessage);
    pdfPage = getPageData(pageNo)    
    limit = pdfPage['textFields'].length
}, 3000);

function getPageData(pageNum){
    return pdfData[pageNum]
}
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

chatSendButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default action of the "click" event
    console.log(startVar)
    console.log(limit)
    const message = chatInput.value;
    if(startVar == limit + 1){
        pageNo = pageNo + 1
        // console.log(pageNo/2)
        pageRemainder = pageNo/2
        console.log(parseInt(pageRemainder))
        pdfPage = getPageData(parseInt(pageRemainder))
        // pdfPage = getPageData(pageNo/2)
        startVar = 0
        if(mode == 'textFields'){
            limit = pdfPage['btns'].length
            mode = 'btnFields'
            textmsgsAll.push(textmsgs)
            console.log(textmsgsAll)
            textmsgs = []
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            chatInput.value = '';
        }else{
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            btnsmsgsAll.push(btnsmsgs)
            console.log(btnsmsgsAll)
            btnsmsgs = []
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            chatInput.value = '';
            limit = pdfPage['textFields'].length
            mode = 'textFields'
        }
        
        
        console.log(textmsgs)
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]}`);
        chatMessages.appendChild(botMessage);
        startVar = startVar + 1
        chatInput.value = '';
        scrollToBottom();
    }
    while(startFlag == 0 && message.toLowerCase() != "start"){
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        const botMessage = createBotMessage(`Type "Start" to begin.`);
        chatMessages.appendChild(botMessage);
        scrollToBottom();

        return
    }
    startFlag = 1
    if (message.trim() !== '') {
        if(message.toLowerCase() == "start"){
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            chatInput.value = '';
        scrollToBottom();
        return
        }
        if(mode == 'textFields'){
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        textmsgs.push(message)
        chatInput.value = '';

        // Send user's message to the server and get bot's response
        const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
        if(pdfPage['textFields'][startVar] == undefined){
            const botMessage = createBotMessage(`Now Answer me in Yes or No for the following questions <br> reply "Yes" to mark Check <br>  "No" to leave blank <br> say "ok" for the acknowledgment`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            scrollToBottom();
            return
        }
        startVar = startVar + 1
        chatMessages.appendChild(botMessage);
        scrollToBottom();
        console.log(startVar)
    }else if(mode == 'btnFields'){
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        btnsmsgs.push(message)
        chatInput.value = '';

        // Send user's message to the server and get bot's response
        const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
        if(pdfPage['btns'][startVar] == undefined){
            if(parseInt(pageNo) == 5){
                const botMessage = createBotMessage(`End <br> Thank you for using our service. <br> Your pdf is ready to download. <br> Click on the check button to check the pdf. <button id="check" class="btn btn-sm btn-primary" onclick="check()">Check</button> `);
                chatMessages.appendChild(botMessage);
                btnsmsgsAll.push(btnsmsgs)
                console.log(btnsmsgsAll)
                btnsmsgs = []
            }
            else{
                const botMessage = createBotMessage(`Compelted page ${parseInt(pageRemainder+1)}`);
                chatMessages.appendChild(botMessage);
            }
            startVar = startVar + 1
            scrollToBottom();
            console.log(textmsgs)
            console.log(btnsmsgs)
            return
        }
        startVar = startVar + 1
        chatMessages.appendChild(botMessage);
        scrollToBottom();
        console.log(startVar)
    }
    }
   
});


chatInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) { // If "Enter" key is pressed
        event.preventDefault(); // Prevents the default action of the "click" event
    console.log(startVar)
    console.log(limit)
    const message = chatInput.value;
    if(startVar == limit + 1){
        pageNo = pageNo + 1
        pageRemainder = pageNo/2
        console.log(parseInt(pageRemainder))
        pdfPage = getPageData(parseInt(pageRemainder))
        startVar = 0
        if(mode == 'textFields'){
            limit = pdfPage['btns'].length
            mode = 'btnFields'
            textmsgsAll.push(textmsgs)
            console.log(textmsgsAll)
            textmsgs = []
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            chatInput.value = '';
        }else{
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            btnsmsgsAll.push(btnsmsgs)
            console.log(btnsmsgsAll)
            btnsmsgs = []
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            chatInput.value = '';
            limit = pdfPage['textFields'].length
            mode = 'textFields'
        }
        
        console.log(textmsgs)
        scrollToBottom();
        return
    }
    while(startFlag == 0 && message.toLowerCase() != "start"){
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        const botMessage = createBotMessage(`Type "Start" to begin.`);
        chatMessages.appendChild(botMessage);
        scrollToBottom();
        return
    }
    startFlag = 1
    if (message.trim() !== '') {
        if(message.toLowerCase() == "start"){
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            chatInput.value = '';
        scrollToBottom();
        return
        }
        if(mode == 'textFields'){
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        textmsgs.push(message)
        chatInput.value = '';

        // Send user's message to the server and get bot's response
        const botMessage = createBotMessage(`Enter ${pdfPage['textFields'][startVar]}`);
        if(pdfPage['textFields'][startVar] == undefined){
            const botMessage = createBotMessage(`Now Answer me in Yes or No for the following questions <br> reply "Yes" to mark Check <br>  "No" to leave blank <br> say "ok" for the acknowledgment`);
            chatMessages.appendChild(botMessage);
            startVar = startVar + 1
            scrollToBottom();
            return
        }
        startVar = startVar + 1
        chatMessages.appendChild(botMessage);
        scrollToBottom();
        console.log(startVar)
    }else if(mode == 'btnFields'){
        while(message.toLowerCase() != "yes" && message.toLowerCase() != "no"){
            const userMessage = createUserMessage(message);
            chatMessages.appendChild(userMessage);
            chatInput.value = '';
            const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
            chatMessages.appendChild(botMessage);
            scrollToBottom();
            return
        }
        const userMessage = createUserMessage(message);
        chatMessages.appendChild(userMessage);
        btnsmsgs.push(message)
        chatInput.value = '';

        // Send user's message to the server and get bot's response
        const botMessage = createBotMessage(`Enter ${pdfPage['btns'][startVar]} (Yes/No)`);
        if(pdfPage['btns'][startVar] == undefined){
            if(parseInt(pageNo) == 5){
                const botMessage = createBotMessage(`End <br> Thank you for using our service. <br> Your pdf is ready to download. <br> Click on the check button to check the pdf. <button id="check" class="btn btn-sm btn-primary" onclick="check()">Check</button> `);
                chatMessages.appendChild(botMessage);
                btnsmsgsAll.push(btnsmsgs)
                console.log(btnsmsgsAll)
                btnsmsgs = []
            }
            else{
                const botMessage = createBotMessage(`Completed page ${parseInt(pageRemainder + 1)}`);
                chatMessages.appendChild(botMessage);
            }
            startVar = startVar + 1
            scrollToBottom();
            console.log(textmsgs)
            console.log(btnsmsgs)
            return
        }
        startVar = startVar + 1
        chatMessages.appendChild(botMessage);
        scrollToBottom();
        console.log(startVar)
    }
    }
}
});

function check(){
    const payload = {
        textmsgs: textmsgsAll,
        btnsmsgs: btnsmsgsAll
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