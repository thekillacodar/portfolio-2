(function(){
    emailjs.init("bigdaddymac4u23@gmail.com"); // Initialize EmailJS with your user email
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission
    emailjs.sendForm('service_0h5ct6s', 'template_e6ftmxf', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.vg-contact-form');
    form.addEventListener('submit', sendEmail); // Add event listener for form submission
});