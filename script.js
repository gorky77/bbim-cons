document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        document.getElementById('form-message').innerText = 'Please fill in all fields.';
    } else {
        document.getElementById('form-message').innerText = 'Thank you, ' + name + '! Your message has been sent.';
        document.getElementById('contact-form').reset();
    }
});
