const timer = document.querySelector('.timer');
const date = document.querySelector('form');
const dateInput = document.querySelector('.countdown-date');
date.addEventListener('submit', function (event) {
    event.preventDefault();
    const countdownDate = new Date(dateInput.value).getTime();
    const intervalTimer = setInterval(function () {
        const now = new Date().getTime();
        const duration = countdownDate - now;
        const days = Math.floor(duration / (1000 * 60 * 60 * 24));
        const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);
        timer.innerHTML = `${days}д  ${hours}ч ${minutes}м ${seconds}с`;
        if (duration < 0) {
            clearInterval(intervalTimer);
            timer.innerHTML = 'Ура! Этот день - сегодня!';
        }
    }, 1000);
});
