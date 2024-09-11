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
    };
}

// Selecciona todos los ítems
const items = document.querySelectorAll('.item');

// Selecciona todas las clases de opciones (superficie y longitud)
const opcionesSuperficie = document.querySelectorAll(".option-superficie");
const opcionesLongitud = document.querySelectorAll(".option-longitud");
// Selecciona todos los elementos <select>
const selects = document.querySelectorAll('select');
// Agrega un event listener a cada ítem
items.forEach(item => {
    item.addEventListener('click', function () {
        // Remueve la clase 'selected' de todos los ítems
        items.forEach(i => i.classList.remove('selected'));
        // Agrega la clase 'selected' al ítem clickeado
        this.classList.add('selected');

        const valorSeleccionado = this.dataset.value;

        // Oculta todas las opciones primero
        opcionesSuperficie.forEach(option => option.style.display = 'none');
        opcionesLongitud.forEach(option => option.style.display = 'none');

        // Muestra las opciones correspondientes según el valor seleccionado
        if (valorSeleccionado === "superficie") {
            opcionesSuperficie.forEach(option => option.style.display = 'block');
            mensaje.textContent = "Elegiste superficie";
            selects.forEach(select => {
                select.value = "Seleccionar"; // Resetea el valor del select
            });
        } else if (valorSeleccionado === "longitud") {
            opcionesLongitud.forEach(option => option.style.display = 'block');
            mensaje.textContent = "Elegiste longitud";
            // Limpia todos los select y los pone en la opción "Seleccionar"
            selects.forEach(select => {
                select.value = "Seleccionar"; // Resetea el valor del select
            });
        }

    });
});
