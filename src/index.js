import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('.btn-start');
const btnStopEl = document.querySelector('.btn-stop');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalColorId;

const randomBgColorBody = () => {
  intervalColorId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    bodyEl.style.backgroundColor = `${randomColor}`;
  }, 1000);

  btnDisabledBoolean(true);
};

const clearIntervalColor = () => {
  clearInterval(intervalColorId);

  btnDisabledBoolean(false);
};

const btnDisabledBoolean = Boolean => (btnStartEl.disabled = Boolean);

btnStartEl.addEventListener('click', randomBgColorBody);
btnStopEl.addEventListener('click', clearIntervalColor);
//d
