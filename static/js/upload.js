const fileUploadBox = document.getElementById("file-upload-box");
fileUploadBox.addEventListener("dragover", function(event) {
	event.preventDefault();
	fileUploadBox.classList.add("dragover");
});

fileUploadBox.addEventListener("dragleave", function(event) {
	event.preventDefault();
	fileUploadBox.classList.remove("dragover");
});


// Function to handle file upload and redirection
async function handleFileUpload() {
	const input = document.getElementById('file-input');
	const files = input.files;
	console.log(files);

	if (files.length > 0) {
		// Create a FormData object to send the files to the next page
		const formData = new FormData();
		console.log(formData);
		for (let i = 0; i < files.length; i++) {
			formData.append('pdfFiles[]', files[i]);
		}

		// Store the uploaded PDF data in the sessionStorage for the next page to access
		sessionStorage.setItem('uploadedPDF', JSON.stringify(formData));

		// Redirect to the next page with the uploaded PDF data
		// window.location.href = 'pdf.html';
		const uploadedPDF = sessionStorage.getItem('uploadedPDF');
		console.log(uploadedPDF);
	}
}

// Attach the handleFileUpload function to the file input's change event
async function redire(){
	await handleFileUpload();
	const form = document.getElementById("fileUploadForm");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const fileInput = document.getElementById("file-input");
            const file = fileInput.files[0];

            if (file) {
                const formData = new FormData();
                formData.append("file", file);

                try {
                    const response = await fetch("/upload", {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        const result = await response.text();
                        alert(result); // Display the server's response

                        // Redirect to display.html and pass the uploaded file's name as a query parameter
                        window.location.href = `display.html?file=${file.name}`;
                    } else {
                        throw new Error("File upload failed.");
                    }
                } catch (error) {
                    console.error(error);
                    alert("An error occurred while uploading the file.");
                }
            } else {
                alert("Please select a file to upload.");
            }
        });
}

const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', redire);