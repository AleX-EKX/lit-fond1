export function header() {
  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header-burger");
    const headerContainer = document.querySelector(".header-section__container");
    const toggleBtn = document.getElementById('menuToggle');
    const megaMenu = document.getElementById('megaMenu');
    const sections = document.querySelectorAll('.mega-menu__section');

    // БУРГЕР
    if (burger && headerContainer) {
      burger.addEventListener("click", function () {
          burger.classList.toggle("active");
          headerContainer.classList.toggle("active");
          document.body.classList.toggle("no-scroll"); 
      });
    }
    // Открытие меню
    if (toggleBtn && megaMenu) {
      toggleBtn.addEventListener('click', e => {
          e.preventDefault();
          megaMenu.classList.toggle('open');
      });
    }

      sections.forEach(section => {
        const item = section.querySelector('.mega-menu__item');
        const panel = section.querySelector('.mega-menu__panel');

        if (!item || !panel) return;

        // Desktop hover
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 768) return;

            sections.forEach(s => {
                s.querySelector('.mega-menu__item')?.classList.remove('active');
                s.querySelector('.mega-menu__panel')?.classList.remove('active');
            });

            item.classList.add('active');
            panel.classList.add('active');
        });

        // Mobile accordion
        item.addEventListener('click', () => {
            if (window.innerWidth > 768) return;
            section.classList.toggle('active');
        });
      });
    
      const mobileButtons = document.querySelectorAll('.mobile-menu__btn .button');
      const navLinks = document.querySelector('.navigation__links');
      const servicesMenu = document.querySelector('.navigation__menu-dropdown');
      
      mobileButtons.forEach(btn => {
        btn.addEventListener('click', function () {
    
            mobileButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
    
            const target = this.dataset.target;
    
            if (target === 'menu') {
                navLinks?.classList.add('active');
                servicesMenu?.classList.remove('active');
            }
    
            if (target === 'services') {
                navLinks?.classList.remove('active');
                servicesMenu?.classList.add('active');
            }
        });
    });

  });

  // Поведение при скролле 
  let prevScrollPos = window.scrollY;
  window.addEventListener("scroll", function () {
    const currentScrollPos = window.scrollY;
    const headerEl = document.querySelector("header");
    if (!headerEl) {
      prevScrollPos = currentScrollPos;
      return;
    }

    if (prevScrollPos > currentScrollPos) {
      headerEl.classList.remove("sticky");
    } else {
      headerEl.classList.add("sticky");
    }
    prevScrollPos = currentScrollPos;
  });

  document.addEventListener('DOMContentLoaded', function() {
    const searchMobile = document.querySelector('.search-mobile');
    const searchForm = document.querySelector('.form.form_search-form-mobile');
    
    if (searchMobile) {
      searchMobile.addEventListener('click', function() {
        // Добавляем класс active к форме
        // searchForm.classList.add('active');
        searchForm.classList.toggle('active');
    });
    }
    
});
}
