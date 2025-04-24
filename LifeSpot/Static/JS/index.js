let session = new Map();

function handleSession() {
    session.set("startDate", new Date().toLocaleString());
    session.set("userAgent", window.navigator.userAgent);
}

function checkAge() {
    const age = prompt("Пожалуйста, введите ваш возраст?");
    session.set("age", age);

    if (age >= 18) {
        alert("Приветствуем на LifeSpot!\nТекущее время: " + new Date().toLocaleString());
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
}

function filterContent() {
    const searchInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    const videoContainers = document.getElementsByClassName('video-container');

    Array.from(videoContainers).forEach(container => {
        const title = container.querySelector('.video-title').innerText.toLowerCase();
        container.style.display = title.includes(searchInput) ? 'inline-block' : 'none';
    });
}

function sessionLog() {
    for (let result of session) {
        console.log(result);
    }
}