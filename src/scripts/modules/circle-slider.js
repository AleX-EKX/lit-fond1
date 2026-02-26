export function circleSlider() {
document.addEventListener('DOMContentLoaded', () => {
    const dataSource = document.getElementById('circle-slider__data');
    if (!dataSource) return;

    const slidesData = Array.from(dataSource.querySelectorAll('li'));
    const totalSlides = slidesData.length;
    if (totalSlides === 0) return;

    const wheel = document.querySelector('.circle-slider__wheel');
    const contentWrapper = document.querySelector('.circle-slider__content-wrapper');
    const visualsContainer = document.querySelector('.circle-slider__visuals');

    let currentIndex = 0;
    const slideInterval = 5000;
    let autoPlayInterval;

    const isMobile = window.matchMedia('(max-width: 768px)');

    function init() {
        // Очистка перед перерисовкой
        wheel.innerHTML = '';
        contentWrapper.innerHTML = '';

        let radiusPx;
        const anglePerItem = 360 / totalSlides;

        if (isMobile.matches) {
            const wheelSize = Math.min(visualsContainer.offsetWidth, 400);
            wheel.style.width = `${wheelSize / 2.5}px`;
            wheel.style.height = `${wheelSize / 2.5}px`;
            radiusPx = wheelSize / 2.5;
        } else {
            // На десктопе - фиксированное значение в rem
            const radiusRem = 24;
            radiusPx = radiusRem * parseFloat(getComputedStyle(document.documentElement).fontSize);
            // Возвращаем дефолтные размеры
            wheel.style.width = '50rem';
            wheel.style.height = '50rem';
        }

        slidesData.forEach((dataNode, index) => {
            const { year, image, description } = dataNode.dataset;
            
            // --- Математика для расположения элементов по кругу ---
            const angle = anglePerItem * index;
            const rad = angle * (Math.PI / 180);
            const x = radiusPx * Math.sin(rad);
            const y = -radiusPx * Math.cos(rad); // -cos(rad) делает 0 градусов вверху

            // --- Создание визуального элемента ---
            const item = document.createElement('div');
            item.classList.add('circle-slider__item');
            // Применяем рассчитанные координаты
            item.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

            item.innerHTML = `
                <div class="image-container">
                    <img src="${image}" alt="Событие ${year} года">
                    <svg class="progress-ring" viewBox="0 0 250 250">
                        <circle class="progress-ring__circle" stroke="#333" stroke-width="5" fill="transparent" r="115" cx="125" cy="125"/>
                    </svg>
                </div>
                <span>${year}</span>
            `;
            wheel.appendChild(item);

            // --- Создание текстового блока ---
            const content = document.createElement('div');
            content.classList.add('content-item');
            content.innerHTML = `
                <h2 class="year-title">${year}</h2>
                <p class="description">${description}</p>
            `;
            contentWrapper.appendChild(content);
        });

        updateSlider();
    }

    function updateSlider() {
        const anglePerItem = 360 / totalSlides;
        
        // На десктопе смещаем на 270 градусов (чтобы активный был слева)
        // На мобильных смещение 0 (чтобы активный был сверху)
        const angleOffset = isMobile.matches ? 0 : 270;
        
        const targetAngle = -currentIndex * anglePerItem + angleOffset;

        // Вращаем колесо
        wheel.style.transform = `rotate(${targetAngle}deg)`;
        
        // Контр-вращение элементов, чтобы они оставались вертикальными
        document.querySelectorAll('.circle-slider__item .image-container, .circle-slider__item span').forEach(el => {
            el.style.transform = `rotate(${-targetAngle}deg)`;
        });

        // Обновление классов active для картинок и текста
        document.querySelectorAll('.circle-slider__item').forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        document.querySelectorAll('.content-item').forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, slideInterval);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // --- Инициализация и обработка изменения размера окна ---
    init();
    startAutoPlay();

    let resizeTimer;
    let wasMobile = isMobile.matches; 

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Перерисовываем слайдер ПОЛНОСТЬЮ, если мы пересекли границу 768px
            if (isMobile.matches !== wasMobile) {
                 wasMobile = isMobile.matches;
                 init(); // init() теперь содержит всю логику для разных размеров
            }
        }, 250);
    });
});
}