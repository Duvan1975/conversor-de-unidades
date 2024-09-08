const mensaje = document.querySelector(".text-area-uno");


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

// Selecciona todos los ítems
const items = document.querySelectorAll('.item');

// Agrega un event listener a cada ítem
items.forEach(item => {
    item.addEventListener('click', function () {
        // Remueve la clase 'selected' de todos los ítems
        items.forEach(i => i.classList.remove('selected'));
        // Agrega la clase 'selected' al ítem clickeado
        this.classList.add('selected');

        const valorSeleccionado = this.dataset.value;
        if (valorSeleccionado === "superficie") {
            mensaje.textContent = "elejiste superficie";
            // Puedes hacer algo más con el ítem seleccionado aquí
            console.log('Seleccionado:', this.dataset.value);
            
        }

    });

});


