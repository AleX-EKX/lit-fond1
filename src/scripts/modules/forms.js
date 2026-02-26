export function forms() {

    document.addEventListener('DOMContentLoaded', function () {
        const fileInput = document.getElementById('resumeFile');
        const fileNameSpan = document.getElementById('fileName');
        if (fileInput) {
            fileInput.addEventListener('change', function () {
                if (this.files && this.files[0]) {
                    const file = this.files[0];
                    fileNameSpan.textContent = file.name;
                
                    // Проверка размера файла (максимум 5MB)
                    const maxSize = 5 * 1024 * 1024; // 5MB
                    if (file.size > maxSize) {
                        alert('Файл слишком большой. Максимальный размер: 5MB');
                        this.value = '';
                        fileNameSpan.textContent = '';
                    }
                } else {
                    fileNameSpan.textContent = '';
                }
            });
    }
        
    });
}