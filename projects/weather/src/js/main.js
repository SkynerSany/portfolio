import ajax from './ajax';

const bg = document.querySelector('.wrapper');
const location = ajax.getLocation();
const weather = ajax.getWeather(location.city, location.country, 'en', 'metric');

function resetBackground(loc = location) {
  bg.style.backgroundImage = `url('${ajax.getBackground(loc.city).urls.regular}')`;
}

resetBackground(location);

function switchSize(size) {
  Array.from(document.styleSheets[0].cssRules).forEach((el, i) => {
      if (el.media) { 
          el.media.mediaText = `(max-width: ${size}px)`;
      }
  });
}

btnMobile.addEventListener('click', () => {
  let type = btnMobile.firstChild.textContent;
  if (type === 'Mobile') {
      switchSize(window.innerWidth);
      btnMobile.firstChild.textContent = 'Desktop';
  } else {
      switchSize(windowSize[type]);
      btnMobile.firstChild.textContent = 'Mobile';
  }
});

back.addEventListener('click', () => {
  document.location = '../../index.html';
});
export {
  location,
  resetBackground,
  weather,
};