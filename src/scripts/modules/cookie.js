export function cookie() { 
    const cookieBlock = document.querySelector('.cookie-block');
    const cookieBtn = document.querySelector('.cookie-block__info-block__btn');
  
    // Проверяем, давал ли пользователь согласие ранее
    if (localStorage.getItem('cookieAccepted') !== 'true') {
        cookieBlock.style.display = 'flex';
    }
  
    // Обработчик нажатия на кнопку
    cookieBtn.addEventListener('click', function () {
        cookieBlock.style.display = 'none'; // Скрываем блок
        localStorage.setItem('cookieAccepted', 'true'); // Сохраняем согласие
    });
}