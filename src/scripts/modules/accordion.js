export function accordion() {
  
  $(document).ready(function () {
    $('.faq__item-head').on('click', function () {
      const $item = $(this).parent();
      const $head = $(this);
      const $body = $(this).next('.faq__item-body');

      $item.toggleClass('is-active');
      $body.slideToggle();

      const isActive = $item.hasClass('is-active');
      $head.attr('aria-expanded', isActive); 
      $body.attr('aria-hidden', !isActive); 
    });
  });
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { accordion } from "./путь/к/файлу/accordion.js";

// Активация: accordion();
