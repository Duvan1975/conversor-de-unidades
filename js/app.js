let index = 0;

function siguienteElemento(direccion) {
    const carrusel = document.querySelector('.carrusel');
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;

    /*---Actualizamos el índice---*/
    const nuevoIndex = index + direccion;

    /*Control para evitar más allá del último ítem o retroceder antes del primero*/
    if (nuevoIndex >= 0 && nuevoIndex < totalItems) {
        index = nuevoIndex;
        const offset = -index * 300; // 300 es el ancho del ítem
        carrusel.style.transform = `translateX(${offset}px)`;
    }
}