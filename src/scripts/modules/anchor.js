export function anchor() {
  // const anchorEl = document.querySelectorAll('.anchor__elem');
  // anchorEl.forEach((el) => {
  //     const scrollAttr = el.getAttribute('data-scroll')
  //     const hiddenElement = document.getElementById(scrollAttr);
  //     el.addEventListener('click',() => {
  //         if (hiddenElement) {
  //             const marginTop = parseInt(window.getComputedStyle(hiddenElement).marginTop);
  //             const targetPosition = hiddenElement.getBoundingClientRect().top + window.scrollY - marginTop;

  //             window.scrollTo({ top: targetPosition, behavior: "smooth" });
  //         }
  //     })
  // })

  const links = document.querySelectorAll(".anchor-link");
  if (links) {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (link.getAttribute("href") === "#") e.preventDefault();

        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }
}

// Для корректной работы необходимо подключить и активировать эту функцию в app.js

// Пример подключения: import { anchor } from "./путь/к/файлу/anchor.js";

// Активация: anchor();
