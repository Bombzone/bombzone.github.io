const btn = document.getElementById('button');
const form = document.getElementById("myForm");
document.getElementById('myForm')
    .addEventListener('submit', function (event) {
        event.preventDefault()
        if (!form.checkValidity()) {
            event.stopPropagation()
        }

        form.classList.add('was-validated')

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_vhaqu4t';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });