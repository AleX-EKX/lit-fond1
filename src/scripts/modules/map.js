export function map() { 

  ymaps.ready(init);

  function init() {
      const coords = [43.1656, 40.3415]; // пример координат Пицунды (замени на свои)

      const map = new ymaps.Map("map", {
          center: coords,
          zoom: 16,
          controls: []
      });

      const placemark = new ymaps.Placemark(coords, {}, {
          iconLayout: 'default#image',
          iconImageHref: '../src/assets/img/map-logo.png', // маркер
          iconImageSize: [60, 60],
          iconImageOffset: [-30, -60]
      });

      map.geoObjects.add(placemark);

      // Кнопка "Как добраться"
      document.getElementById('routeBtn').addEventListener('click', function(e) {
          e.preventDefault();
          window.open(`https://yandex.ru/maps/?rtext=~${coords[0]},${coords[1]}`);
      });
  }



}