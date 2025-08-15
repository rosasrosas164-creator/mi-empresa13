// Carrusel de productos
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
}

// Inicializar carrusel
showItem(currentIndex);
setInterval(nextItem, 3000); // Cambiar cada 3 segundos
