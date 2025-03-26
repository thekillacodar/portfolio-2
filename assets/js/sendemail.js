(function(){
    emailjs.init("fxL72nufdJ__F_ZE4"); // Initialize EmailJS with your user ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    const templateParams = {
        to_name: document.querySelector('input[name="Name"]').value,
        from_name: document.querySelector('input[name="Email"]').value,
        subject: document.querySelector('input[name="Subject"]').value,
        message: document.querySelector('textarea[name="Message"]').value
    };

    emailjs.send('service_0h5ct6s', 'template_e6ftmxf', templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send email. Please try again later.');
            console.log('FAILED...', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.vg-contact-form');
    form.addEventListener('submit', sendEmail); // Add event listener for form submission
});

document.addEventListener('contextmenu', (e) => e.preventDefault());

document.onkeydown = (e) => {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0)))) {
        return false;
    }
};


