function convertProfileImage() {
    const fileInput = document.getElementById("profile-upload");
    const file = fileInput.files[0];
    if (file) {
        resizeImage(file, 500, 500, "profile.jpg", "profile-preview");
    } else {
        alert("Pilih gambar terlebih dahulu.");
    }
}

function convertProjectImages() {
    const fileInput = document.getElementById("project-upload");
    const files = fileInput.files;
    if (files.length >= 3) {
        for (let i = 0; i < 3; i++) {
            resizeImage(files[i], 600, 400, `img${i + 1}.jpg`, "project-preview");
        }
    } else {
        alert("Pilih minimal 3 gambar.");
    }
}

function convertBlogImages() {
    const fileInput = document.getElementById("blog-upload");
    const files = fileInput.files;
    if (files.length >= 3) {
        for (let i = 0; i < 3; i++) {
            resizeImage(files[i], 800, 500, `post${i + 1}.jpg`, "blog-preview");
        }
    } else {
        alert("Pilih minimal 3 gambar.");
    }
}

function resizeImage(file, width, height, filename, previewId) {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = function (e) {
        img.src = e.target.result;
        
        img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Draw image on canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Create the resized image as data URL
            const resizedDataUrl = canvas.toDataURL("image/jpeg");

            // Create preview element
            const imgElement = document.createElement("img");
            imgElement.src = resizedDataUrl;
            document.getElementById(previewId).appendChild(imgElement);

            // Simulate saving the file with the specified filename
            console.log(`File saved as ${filename}`);
        }
    };

    reader.readAsDataURL(file);
}