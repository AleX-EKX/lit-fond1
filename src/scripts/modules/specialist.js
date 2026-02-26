export function specialist() { 
    document.addEventListener('DOMContentLoaded', function () {

        const doctors = document.querySelectorAll('.specialists__item');
        const searchInput = document.getElementById('doctorSearch');
        const tabs = document.querySelectorAll('.filter__tab');
        const selectBtn = document.querySelector('.filter__select-btn');
        const dropdown = document.querySelector('.filter__select-dropdown');
        const dropdownItems = dropdown.querySelectorAll('div');
    
        let activeCategory = 'adult';
        let activeSpecialty = '';
        let searchQuery = '';
    
        // 🔹 Основная функция фильтрации
        function filterDoctors() {
            doctors.forEach(doc => {
    
                const name = doc.querySelector('.specialists-name').textContent.toLowerCase();
                const specialties = doc.dataset.specialties;
                const category = doc.dataset.category;
    
                const matchCategory = category === activeCategory;
                const matchSpecialty = activeSpecialty === '' || specialties.includes(activeSpecialty);
                const matchSearch = name.includes(searchQuery);
    
                if (matchCategory && matchSpecialty && matchSearch) {
                    doc.style.display = 'block';
                } else {
                    doc.style.display = 'none';
                }
    
            });
        }
    
        // 🔹 Поиск
        searchInput.addEventListener('input', function () {
            searchQuery = this.value.toLowerCase();
            filterDoctors();
        });
    
        // 🔹 Таб переключение
        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
    
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
    
                activeCategory = this.dataset.category;
                filterDoctors();
            });
        });
    
        // 🔹 Dropdown открыть/закрыть
        selectBtn.addEventListener('click', function () {
            dropdown.classList.toggle('active');
            selectBtn.classList.toggle('active');
        });
    
        // 🔹 Выбор специальности
        dropdownItems.forEach(item => {
            item.addEventListener('click', function () {
    
                activeSpecialty = this.dataset.value;
                selectBtn.textContent = this.textContent;
                dropdown.classList.remove('active');
                selectBtn.classList.remove('active');
                filterDoctors();
            });
        });
    
    });
}