
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
