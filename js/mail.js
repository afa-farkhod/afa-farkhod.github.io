document.addEventListener("DOMContentLoaded", function () {
const emailLink = document.getElementById("email-link");

emailLink.addEventListener("click", function (event) {
event.preventDefault(); // Prevent default navigation

const email = "abdukodirovfarkhod@gmail.com";

// Open default email client
window.location.href = "mailto:" + email;

// Copy to clipboard
navigator.clipboard.writeText(email).then(() => {
alert("Email copied to clipboard: " + email);
    }).catch(err => {
console.error("Failed to copy email: ", err);
});
});
});