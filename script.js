// Array de imágenes
const images = [
    "C:\\Users\\PC\\Desktop\\S&S SANDOVAL\\img\\Publicidad1.png",
    "C:\\Users\\PC\\Desktop\\S&S SANDOVAL\\img\\Publicidad2.png", // Agrega las rutas de tus otras imágenes aquí
    "C:\\Users\\PC\\Desktop\\S&S SANDOVAL\\img\\Publicidad3.jpg",
    "C:\\Users\\PC\\Desktop\\S&S SANDOVAL\\img\\Publicidad4.png"
];

let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
    const bannerImage = document.getElementById('banner-image');
    bannerImage.src = images[index];
}

// Función para ir a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Aumenta el índice y resetea si es necesario
    showImage(currentIndex);
}

// Función para ir a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Disminuye el índice y ajusta si es negativo
}

// Agregar eventos a los botones
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', prevImage);

// Mostrar la primera imagen al cargar
showImage(currentIndex);

// Movimiento del ícono de WhatsApp
const whatsappIcon = document.querySelector('.whatsapp-container');

let position = 0;
let direction = 1; // 1 para mover a la derecha, -1 para mover a la izquierda

function moveWhatsappIcon() {
    // Cambia la posición en cada intervalo de tiempo
    position += direction * 5; // Cambia 5 por la velocidad que desees
    whatsappIcon.style.transform = `translateX(${position}px)`;

    // Cambia de dirección al llegar a un límite
    if (position > 1) direction = -0.3; // Cambia la dirección al llegar a 50px
    if (position < -1 ) direction = 0.3; // Cambia la dirección al llegar a -50px
}

// Llama a la función cada 100ms (ajusta el intervalo según lo necesites)
setInterval(moveWhatsappIcon, 100);
