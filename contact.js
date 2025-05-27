document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !phone || !message) {
        document.getElementById('statusMessage').textContent = 'Пожалуйста, заполните все поля.';
        document.getElementById('statusMessage').style.color = 'red';
        document.getElementById('formStatus').classList.remove('success');
        document.getElementById('formStatus').classList.add('error');
        document.getElementById('formStatus').style.display = 'block';
        return;
    }

    const telegramMessage = `Новая заявка:\n\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`;

    const botToken = '7607920468:AAGOCAfD6GxnrWI1Z8fJZOrlaySeDz9ZcTc';
    const chatId = '833121742';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                document.getElementById('statusMessage').textContent = 'Сообщение успешно отправлено!';
                document.getElementById('statusMessage').style.color = 'green';
                document.getElementById('formStatus').classList.remove('error');
                document.getElementById('formStatus').classList.add('success');
                this.reset();
            } else {
                document.getElementById('statusMessage').textContent = 'Ошибка при отправке сообщения. Попробуйте позже.';
                document.getElementById('statusMessage').style.color = 'red';
                document.getElementById('formStatus').classList.remove('success');
                document.getElementById('formStatus').classList.add('error');
            }
            document.getElementById('formStatus').style.display = 'block';
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            document.getElementById('statusMessage').textContent = 'Ошибка при отправке сообщения. Попробуйте позже.';
            document.getElementById('statusMessage').style.color = 'red';
            document.getElementById('formStatus').classList.remove('success');
            document.getElementById('formStatus').classList.add('error');
            document.getElementById('formStatus').style.display = 'block';
        });
});