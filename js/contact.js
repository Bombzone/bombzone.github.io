// scripts.js
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    const contactForm = document.getElementById("contact-form")
    const status = document.getElementById("status")

    var onSubmit = function (token) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });

        form.classList.add('was-validated')

    };

    var onloadCallback = function () {
        grecaptcha.render('submit', {
            'sitekey': '6Le-8ckrAAAAALzGSEXhIYFFUwtO4NT8K5o6XCks',
            'callback': onSubmit
        });
    };

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    // Loop over them and prevent submission
})()