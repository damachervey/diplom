document.getElementById('request-call').addEventListener('click', function () {
    document.getElementById('call-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('call-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('call-modal')) {
        document.getElementById('call-modal').style.display = 'none';
    }
});

document.getElementById('callForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const phone = this.phone.value.trim();

    if (!name || !phone) {
        document.getElementById('call-status').textContent = 'Пожалуйста, заполните все поля.';
        document.getElementById('call-status').style.color = 'red';
        document.getElementById('call-status').classList.remove('success');
        document.getElementById('call-status').classList.add('error');
        document.getElementById('call-status').style.display = 'block';
        return;
    }

    const telegramMessage = `Новая заявка на звонок:\n\nИмя: ${name}\nТелефон: ${phone}`;

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

                document.getElementById('call-status').textContent = 'Заявка успешно отправлена!';
                document.getElementById('call-status').style.color = 'green';
                document.getElementById('call-status').classList.remove('error');
                document.getElementById('call-status').classList.add('success');
                this.reset();
            } else {
                document.getElementById('call-status').textContent = 'Ошибка при отправке сообщения. Попробуйте позже.';
                document.getElementById('call-status').style.color = 'red';
                document.getElementById('call-status').classList.remove('success');
                document.getElementById('call-status').classList.add('error');
            }
            document.getElementById('call-status').style.display = 'block';
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            document.getElementById('call-status').textContent = 'Ошибка при отправке сообщения. Попробуйте позже.';
            document.getElementById('call-status').style.color = 'red';
            document.getElementById('call-status').classList.remove('success');
            document.getElementById('call-status').classList.add('error');
            document.getElementById('call-status').style.display = 'block';
        });
});

document.getElementById('book-appointment').addEventListener('click', function () {
    document.querySelector('#contactForm').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

