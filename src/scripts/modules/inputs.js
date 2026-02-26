export function inputs() {

    var elementPhone = document.querySelectorAll('input[name="phone"]');
    var maskOptions = {
        mask: '+7 (000) 000-00-00',
    };
    elementPhone.forEach((el) => {
        new IMask(el, maskOptions);
    });

}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { inputs } from "./путь/к/файлу/inputs.js";

// Активация: inputs();