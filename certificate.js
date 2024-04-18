// JavaScript to show the certificate when the button is clicked and reveal the download link
const generateButton = document.getElementById('generateButton');
const certificate = document.getElementById('certificate');
const downloadButton = document.getElementById('downloadButton');

generateButton.addEventListener('click', function () {
    certificate.style.display = 'block';
    downloadButton.style.display = 'block';
});