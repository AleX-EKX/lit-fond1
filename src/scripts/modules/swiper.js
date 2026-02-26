export function swiper() {

    // main-slider
    const mainSwiper = new Swiper('.main-banner__slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.main-banner__pagination',
        clickable: true, 
        dynamicBullets: false, 
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: false, // Не отключать после взаимодействия пользователя
        pauseOnMouseEnter: true, // Пауза при наведении мыши
      },
      navigation: {
        nextEl: '.main-banner-next',
        prevEl: '.main-banner-prev',
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  // спец
  const specialistsSwiper = new Swiper('.specialists-slider', {
    slidesPerView: 3.3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.specialists-next',
      prevEl: '.specialists-prev',
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // отзывы
  const reviewSwiper = new Swiper('.reviews-slider', {
    slidesPerView: 3.3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // лицензии
  const licSwiper = new Swiper('.lic-slider', {
    slidesPerView: 3.3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.lic-next',
      prevEl: '.lic-prev',
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      400: {
        slidesPerView: 1.5,
        spaceBetween: 12,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 21,
      },
    },
  });

  // страница услуг
    // Популярные услуги
    const servicesSwiper = new Swiper('.services-section .services-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.services-next',
        prevEl: '.services-prev',
      },
      breakpoints: {
        1: {
          slidesPerView: 1.4,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  
      // Копмлексные предложения
      const offersSwiper = new Swiper('.offers-section .offers-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.offers-next',
          prevEl: '.offers-prev',
        },
        breakpoints: {
          1: {
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });

  
      // этапы
      const slidersConfig = [
        {
            selector: '.stages-section__grid',
            options: {
                slidesPerView: 1,
                spaceBetween: 16,
                navigation: {
                    nextEl: '.stages-next',
                    prevEl: '.stages-prev',
                },
                pagination: {
                    el: '.stages-section .swiper-pagination',
                    type: 'fraction'
                }
            }
        },
        {
            selector: '.recommend-section__info',
            options: {
                slidesPerView: 1.04,
                spaceBetween: 8,
                navigation: {
                  nextEl: '.recommend-next',
                  prevEl: '.recommend-prev',
              },
            }
        }
    ];

    const instances = {};

    function handleSliders() {
        slidersConfig.forEach(slider => {
            const element = document.querySelector(slider.selector);
        
            if (!element) return;
        
            if (window.innerWidth <= 768) {
                if (!instances[slider.selector]) {
                    instances[slider.selector] = new Swiper(slider.selector, slider.options);
                }
            } else {
                if (instances[slider.selector]) {
                    instances[slider.selector].destroy(true, true);
                    delete instances[slider.selector];
                }
            }
        });
    }

    handleSliders();
    window.addEventListener('resize', handleSliders);
}
