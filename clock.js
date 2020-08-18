const clock = document.querySelector(".clock");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:` + `${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 10000);
}

init();
