document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Gracias, ${name}! Hemos recibido tu mensaje y te contactaremos pronto.`);

    document.getElementById('contact-form').reset();
});

