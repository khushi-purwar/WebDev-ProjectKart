const clockElement = document.querySelector('.clock');
const extraInfoElement = document.querySelector('.extra-info');
const clockBorderElement = document.querySelector('.clock-border');

// helper functions
const format = (str) => str.toString().padStart(2, '0');

const dateFn = () => {
    const dt = new Date();
    const hr = dt.getHours();
    const min = dt.getMinutes();

    clockElement.textContent = `${format(hr)}:${format(min)}`;
    extraInfoElement.textContent = luxon.DateTime.local().toFormat(
        'cccc, MMM dd',
    );
};

dateFn();
setInterval(dateFn, 1000);

let deg = 0;
// animation spin
setInterval(() => {
    clockBorderElement.style.background = `linear-gradient(${deg}deg,  #ffb703, #fb8500)`;
    deg = (deg + 1) % 360;
}, 1);
