
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Select the form

    form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form input values
    const name = form.querySelector("input[placeholder='Yopur Name']").value;
    const email = form.querySelector("input[placeholder='Your Email']").value;
    const website = form.querySelector("input[placeholder='Website (Optional)']").value;
    const message = form.querySelector("textarea").value;

    // Construct mailto link
    const mailtoLink = `mailto:abdukodirovfarkhod@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AWebsite: ${encodeURIComponent(website)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open default email client
    window.location.href = mailtoLink;
});
});