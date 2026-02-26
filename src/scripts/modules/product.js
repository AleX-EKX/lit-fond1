export function product() { 
    document.addEventListener("DOMContentLoaded", () => {
        const items = document.querySelectorAll(".diameter-table__grid-item");
        const infoBlock = document.querySelector(".model-table__info");
    
        items.forEach(item => {
            item.addEventListener("mouseenter", () => {
                updateInfo(item);
            });

            item.addEventListener("click", () => {
                items.forEach(el => el.classList.remove("active")); 
                item.classList.add("active");
                updateInfo(item);
            });
        });
    
        function updateInfo(item) {
            const models = item.dataset.models.split(",");
            infoBlock.innerHTML = ""; 
            models.forEach(model => {
                const span = document.createElement("span");
                span.className = "model-table__info-item";
                span.textContent = model.trim();
                infoBlock.appendChild(span);
            });
        }
    });
}