export function iframe() {

document.addEventListener('DOMContentLoaded', () => {

    // Находим элементы на странице
    const iframe = document.getElementById('rutubePlayer');
    const playButton = document.getElementById('customPlayBtn');
  
    // Если какого-то элемента нет, выходим, чтобы не было ошибок
    if (!iframe || !playButton) {
      return;
    }
  
    // Функция для отправки команд плееру
    function postToRutube(action, value) {
      const message = JSON.stringify({
        type: action,
        data: value || {}
      });
      iframe.contentWindow.postMessage(message, '*');
    }
  
    // Обработчик клика по нашей кастомной кнопке
    playButton.addEventListener('click', () => {
      // 1. Отправляем команду "play" в iframe
      postToRutube('player:play');
      
      // 2. Скрываем нашу кнопку, чтобы она не мешала
        playButton.classList.add('is-hidden');
        iframe.classList.add('active');
    });
  
    // (Опционально) Слушаем события от плеера
    // Например, если пользователь поставит видео на паузу, мы снова покажем нашу кнопку
    window.addEventListener('message', (event) => {
      if (event.origin !== "https://rutube.ru") {
        return;
      }
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'player:pause') {
          playButton.classList.remove('is-hidden');
        }
      } catch (e) {
        // Игнорируем ошибки
      }
    });
  
});
}