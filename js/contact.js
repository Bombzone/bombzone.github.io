const form = document.getElementById('myForm');
const formBtn = document.getElementById("formBtn");
formBtn.addEventListener('click', function(event) {

  if (form.checkValidity()) {
    form.classList.add('was-validated');
    // Form is valid, execute reCAPTCHA
    grecaptcha.execute("6Le-8ckrAAAAALzGSEXhIYFFUwtO4NT8K5o6XCks", onSubmit);
  } else {
      event.preventDefault();
  event.stopPropagation();
  }
});
function onSubmit(token) {
  // Append the token to the form
  const tokenInput = document.createElement('input');
  tokenInput.type = 'hidden';
  tokenInput.name = 'g-recaptcha-response';
  tokenInput.value = token;
  form.appendChild(tokenInput);

  // Optionally, you can now submit the form programmatically (POST or AJAX)
  form.submit();
}