
document.addEventListener("DOMContentLoaded", function() {

// Div para crear los carruseles. Divididos en Selección, Interior y Exterior
let $carruselSeleccionDiv = document.getElementById('carruselSeleccion');
let $carruselInteriorDiv = document.getElementById('carruselInterior');
let $carruselExteriorDiv = document.getElementById('carruselExterior');
let $botonMas = '';

// Array prodcutos filtrados
let productosInterior = productos.filter(producto => producto.tipo === 'interior'); // Solo productos de interior
let productosExterior = productos.filter(producto => producto.tipo === 'exterior'); // Solo productos de exterior
let productosSeleccion = productos.filter(producto => producto.seleccion === 'si'); // Solo productos seleccionados

// Popup ficha de producto
let $popUp = document.getElementById('overlay');
let $popUpDiv = document.getElementById('popup');

// Popup carrito 
let $popUpCarrito = document.getElementById('overlay-carrito');
let $popUpDivCarrito = document.getElementById('popupCarrito');

// Boton carrito
let $carritoBoton = document.getElementById('carrito');
$carritoBoton.addEventListener('click', () => abrirCarrito());

// Productos en el carrito
let productosEnCarrito = [];

let $conjuntoProductos = document.getElementById('conjuntoProductos');

// Buscador
let $buscador = document.getElementById('searchInput');
let $resultadosBusqueda = document.getElementById('resultadosBusqueda');
let $lupaBoton = document.getElementById('lupa');

// Icono hamburguesa
let $hamburguesa = document.getElementById('ham');

// Icono de cierre del buscador
let $contenidoBoton1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.5 105" style="enable-background:new 0 0 104.5 105" xml:space="preserve" id="lupaSVG"><path d="M92.19 102.22c-2.44-.45-4.21-1.95-5.9-3.65-8.5-8.5-17.05-16.95-25.55-25.44-.61-.61-1.03-.7-1.79-.27-6.95 3.86-14.42 5.39-22.29 4.43-11.01-1.35-19.87-6.55-26.32-15.63-5.58-7.83-7.74-16.63-6.57-26.12 1.16-9.43 5.39-17.34 12.57-23.62 5.38-4.7 11.6-7.72 18.66-8.7 14.51-2 26.5 2.77 35.61 14.22 5.43 6.82 7.86 14.82 7.69 23.53-.14 7.32-2.34 14.06-6.43 20.16-.12.19-.23.38-.58.84.33.21.72.36.99.63C81 71.24 89.72 79.88 98.43 88.54c2.87 2.85 3.42 6.57 1.43 9.92-1.01 1.71-2.51 2.85-4.43 3.41-.37.11-.73.24-1.1.36-.71-.01-1.43-.01-2.14-.01zM40.88 16.06c-13.28-.04-24.06 10.68-24.15 24.03-.09 13.27 10.76 24.17 24.09 24.21 13.26.04 24.07-10.73 24.15-24.06.09-13.28-10.72-24.14-24.09-24.18z" /></svg>'
let $contenidoBoton2 = '<svg class="aspaBuscador" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.5 105" style="enable-background:new 0 0 104.5 105" xml:space="preserve"><path d="M101.84 92.39a6.995 6.995 0 0 1 0 9.89 6.984 6.984 0 0 1-4.95 2.06c-1.79 0-3.59-.69-4.95-2.06l-39.6-39.6-39.6 39.6a6.99 6.99 0 0 1-9.9 0 6.995 6.995 0 0 1 0-9.89l39.6-39.6-39.6-39.6a7.007 7.007 0 0 1 0-9.9 6.973 6.973 0 0 1 4.95-2.05c1.79 0 3.59.68 4.95 2.05l39.6 39.6 39.6-39.6c2.73-2.73 7.16-2.73 9.9 0 1.36 1.37 2.05 3.16 2.05 4.95s-.69 3.58-2.05 4.95l-39.6 39.6 39.6 39.6z" /></svg>';

// Icono del carrito
let $iconoCarrito1 = '<svg xmlns="http://www.w3.org/2000/svg" id="carrito-svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /> </svg>';

// modificar barra menú cuando se hace scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY; // Obtiene la posición actual del scroll
    const letras = document.querySelectorAll('#letterL, #letterA, #letterN, #letterT, #letterL, #letterY, #letterL2');
    const logo = document.getElementById('icon');
    // Realizar una acción cuando el scroll supere los 100 píxeles
    if (scrollPos > 100) {
        // Aquí realizas la acción deseada, por ejemplo, cambiar la opacidad de un elemento
        document.getElementById('carrito').style.opacity = '0';
        document.getElementById('ham').style.opacity = '0';
        icon.style.transform = 'translateX(190px)';
        logo.style.fill = 'var(--negro)';
        letras.forEach(letra => {
            letra.style.display = 'none';
        });

    } else {
        // Vuelve a la opacidad original cuando se hace scroll hacia arriba por debajo de 500 píxeles
        document.getElementById('carrito').style.opacity = '1';
        document.getElementById('ham').style.opacity = '1';
        icon.style.transform = 'translateX(0px)';
        logo.style.fill = 'white';
        letras.forEach(letra => {
            letra.style.display = 'block';
        });
    }
});

function abrirProducto(producto){
    $popUp.style.display = 'block';

    fichaProducto(producto);
}

function cerrarProducto(){
    $popUp.style.display = 'none';
    // Limpiar el contenido del popup para evitar duplicados
    $popUpDiv.innerHTML = '';
}

function abrirCarrito(){
    let $botonCarrito = document.getElementById('carrito')
    if($popUpCarrito.style.display === 'none' || $popUpCarrito.style.display === ''){
        $popUpCarrito.style.display = 'flex';
        $botonCarrito.innerHTML = $contenidoBoton2;
    }else{
        $popUpCarrito.style.display = 'none';
        $botonCarrito.innerHTML = $iconoCarrito1;
    }

}

let $popUpCierre = document.getElementById('popupCierre');
$popUpCierre.addEventListener('click', cerrarProducto);


function fichaProducto(producto){
    // Crear la imagen a la ficha de producto
    let $figureFicha = document.createElement('figure');
    let $imagenFicha = document.createElement('img');
    $imagenFicha.src = producto.imagen;
    $imagenFicha.alt = producto.nombre;
    $imagenFicha.classList.add('imgDetalle')
    $figureFicha.appendChild($imagenFicha);

    // Crear el nombre a la ficha de prodcuto
    let $nombreProductoFicha = document.createElement('h3');
    $nombreProductoFicha.textContent = producto.nombre;
    $nombreProductoFicha.classList.add('detalleNombre');

    // Crear el precio en la ficha de producto
    let $precioProductoFicha = document.createElement('p');
    $precioProductoFicha.textContent = `${producto.precio}€`;
    $precioProductoFicha.classList.add('detallePrecio');

    // Crear la descripción del producto
    let $descripcionFicha = document.createElement('p');
    $descripcionFicha.textContent = producto.descripcion;
    $descripcionFicha.classList.add('detalleDescripcion')

    // Crear el botón para añadir al carrito
    let $botonCarrito = document.createElement('button');
    $botonCarrito.textContent = 'Añadir al carrito';
    $botonCarrito.classList.add('detalleBoton');
    $botonCarrito.id = producto.id;
    $botonCarrito.addEventListener('click', function() {
        meterAlCarrito(producto);
        $botonCarrito.classList.toggle('botonActivo');
    });

    // Crear el botón para cerrar ficha de producto
    $popUpCierre.classList.add('popupCierre')

    // Añadir los elementos al DIV padre:
    $popUpDiv.appendChild($popUpCierre); 
    $popUpDiv.appendChild($figureFicha);
    $popUpDiv.appendChild($nombreProductoFicha);
    $popUpDiv.appendChild($precioProductoFicha);
    $popUpDiv.appendChild($descripcionFicha);
    $popUpDiv.appendChild($botonCarrito);    
}

// Crear los carruseles de producto
function crearCarrusel(productos, carruselDiv, prefijoId) {
    for (let i = 0; i < productos.length; i++) {
        let $carruselProducto = document.createElement('div');
        $carruselProducto.classList.add('scroll-item');
        $carruselProducto.id = `${prefijoId}-${i + 1}`; // Usar prefijo para el ID
        $carruselProducto.style.backgroundImage = `url('${productos[i].imagen}')`;
        
        let $botonMas = document.createElement('button');
        $botonMas.textContent = '+';
        $botonMas.classList.add('mas');
        $botonMas.id = `boton-${prefijoId}-${i + 1}`;
        $carruselProducto.appendChild($botonMas);
        // Añadir el listener al botón
        $botonMas.addEventListener('click', () => abrirProducto(productos[i]));


        carruselDiv.appendChild($carruselProducto); // Añadir directamente al DOM
    }
}

// Meter lo productos al carrito
function meterAlCarrito(producto) {
    // Comprobar si hay stock
    if (producto.stock <= 0) {
        alert('Lo sentimos, en estos momentos no hay disponibilidad');
        return; 
    }
    // Buscar si el producto ya está en el carrito
    let productoExistente = productosEnCarrito.find(item => item.id === producto.id);

    if (productoExistente) {
        // Verificar si hay suficiente stock para añadir más
        if (productoExistente.cantidad < producto.stock) {
            // Si ya está, incrementar la cantidad
            productoExistente.cantidad++;
        } else {
            alert('Lo sentimos, no hay suficiente cantidad para seguir añadiendo');
            return; // Salir si no hay suficiente stock
        }
    } else {
        // Si no está, añadir con cantidad inicial de 1
        producto.cantidad = 1;
        productosEnCarrito.push(producto);
    }
    //Actualizamos los valores del carrito 
    crearCarrito(); 
    totalCarrito(); 
    totalProductos() 
}


function crearCarrito() {
    // Limpiar el contenido actual para evitar duplicados
    $conjuntoProductos.innerHTML = '';
    // ¿carrito vacío?
    if(productosEnCarrito.length === 0){
        let $carritoVacio = document.createElement('p');
        $carritoVacio.textContent = 'Todavía no tienes ningún producto en tu carrito';
        $carritoVacio.classList.add('carrito-vacio')
        $conjuntoProductos.appendChild($carritoVacio);
        return
    }
    // Iterar sobre los productos en el carrito
    for (let i = 0; i < productosEnCarrito.length; i++) {
        let producto = productosEnCarrito[i];

        // Crear contenedor para cada producto en el carrito
        let $productoEnCarrito = document.createElement('div');
        $productoEnCarrito.classList.add('productoCarrito');

        // El primero de los contenedores interiores
        let $productoCarrito1 = document.createElement('div');
        $productoCarrito1.classList.add('productoCarrito-1');

        // El segundo de los contenedores interiores
        let $productoCarrito2 = document.createElement('div');
        $productoCarrito2.classList.add('productoCarrito-2');

        // Nombre del producto
        let $nombreProducto = document.createElement('p');
        $nombreProducto.textContent = producto.nombre;
        $nombreProducto.classList.add('carrito-nombre');

        // Cantidad de producto
        let $cantidadProducto = document.createElement('div');
        $cantidadProducto.classList.add('carrito-cantidad');
        $cantidadProducto.textContent = `x${producto.cantidad}`;

        // Boton eliminar producto
        let $quitarProducto = document.createElement('button');
        $quitarProducto.classList.add('carrito-quitar');
        $quitarProducto.textContent = 'X Eliminar';
        $quitarProducto.addEventListener('click', () => eliminarDelCarrito(producto.id));

        // Boton añadir producto 
        let $sumarProducto = document.createElement('button');
        $sumarProducto.classList.add('carrito-quitar');
        $sumarProducto.id = 'sumar-producto';
        $sumarProducto.textContent = '+ Añadir';
        $sumarProducto.addEventListener('click', () => sumarAlCarrito(producto.id));


        // Precio del producto
        let $precioProducto = document.createElement('p');
        $precioProducto.textContent = `${producto.precio}€`;
        $precioProducto.classList.add('carritoprecio');

        // Imagen del producto
        let $figureCarrito = document.createElement('figure');
        let $imagenProducto = document.createElement('img');
        $figureCarrito.appendChild($imagenProducto);
        $imagenProducto.src = producto.imagen;
        $imagenProducto.alt = producto.nombre;
        $imagenProducto.classList.add('imagenProductoCarrito');

        // Añadir elementos al contenedor del producto
        $productoEnCarrito.appendChild($productoCarrito1);
        $productoEnCarrito.appendChild($productoCarrito2);
        $productoCarrito1.appendChild($figureCarrito);
        $productoCarrito2.appendChild($nombreProducto);
        $productoCarrito2.appendChild($cantidadProducto);
        $productoCarrito2.appendChild($precioProducto);
        $productoCarrito2.appendChild($quitarProducto);
        $productoCarrito2.appendChild($sumarProducto);

        // Añadir el producto al conjunto de productos en el carrito
        $conjuntoProductos.appendChild($productoEnCarrito);
    }
}
// Boton de Añadir que está dentro del carrito
function sumarAlCarrito(productoId) {
    let producto = productosEnCarrito.find(item => item.id === productoId);
    if (producto) {
        // Comprueba si hay suficiente stock para añadir más
        if (producto.cantidad < productos.find(item => item.id === productoId).stock) {
            producto.cantidad++;
        } else {
            alert('No puedes añadir más de este producto, el stock es limitado.');
            return; // Si no hay suficioente stock, sale de la función
        }
    }
    crearCarrito();
    totalCarrito();
    totalProductos();
}

// Botón Eliminar que está dentro del carrito
function eliminarDelCarrito(productoId) {
    // Buscar el producto en el carrito
    let producto = productosEnCarrito.find(item => item.id === productoId);

    if (producto) {
        if (producto.cantidad > 1) {
            // Si la cantidad es mayor a 1, reducir una unidad la cantidad
            producto.cantidad--;
        } else {
            // Si solo hay una unidad en la cantidad del producto, elimina el producto directamente
            productosEnCarrito = productosEnCarrito.filter(item => item.id !== productoId);
        }
    }

    // Actualizar el carrito después de modificarlo
    crearCarrito();
    totalCarrito();
    totalProductos()
}

// Calcular el precio total de los productos en el carrito
function totalCarrito(){
    let $precioTotal = document.getElementById('carritoTotal');
    let total = 0;

    for (let i = 0; i < productosEnCarrito.length; i++){
        total += productosEnCarrito[i].precio * productosEnCarrito[i].cantidad;
    }
    $precioTotal.innerHTML = `${total.toFixed(2)}€`
}

function totalProductos(){
    let $cantidadTotal = document.getElementById('cantidad-plantas');
    let total = 0;

    for (let i = 0; i < productosEnCarrito.length; i++) {
        total += productosEnCarrito[i].cantidad;
    }
    $cantidadTotal.innerHTML = `Cantidad: ${total}`; 
}

// Modificar el menú hamburguesa cuando se hace click sobre él
$hamburguesa.addEventListener('click', function() {
    let $primerHam = document.getElementById('hamSpan1');
    let $centroHam = document.getElementById('hamSpan2');
    let $ultimoHam = document.getElementById('hamSpan3');
    let $popupHam = document.getElementById('overlay-ham');

    if ($centroHam.style.opacity === '1') {  
        $centroHam.style.opacity = '0';
        $primerHam.style.transform = 'rotate(45deg)';
        $ultimoHam.style.transform = 'rotate(-45deg)';
        $ultimoHam.style.marginTop = '-18px';

        // Añadimos transiciones para cada elemento
        $primerHam.style.transition = '350ms';
        $centroHam.style.transition = '150ms';
        $ultimoHam.style.transition = '350ms';
        $popupHam.style.transition = '350ms';

        $popupHam.style.display = 'flex';

    } else {
        $centroHam.style.opacity = '1';
        $primerHam.style.transform = 'rotate(0deg)';
        $ultimoHam.style.transform = 'rotate(0deg)';
        $ultimoHam.style.marginTop = '0px';

        $popupHam.style.display = 'none';
    }
});

// Botón buscador (lupa) oculta o muestra la barra de búsqueda
$lupaBoton.addEventListener('click', function(){
    if ($buscador.style.display === 'none' || $buscador.style.display === ''){
        $buscador.style.display = 'block';
        $resultadosBusqueda.innerHTML = '';
        $buscador.value = '';
        $lupaBoton.innerHTML = $contenidoBoton2;

        
    } else{
        $buscador.style.display = 'none';
        $resultadosBusqueda.innerHTML = '';
        $lupaBoton.innerHTML = $contenidoBoton1;
    }
})

// Agregar un evento al input para realizar la búsqueda cada vez que se escribe
$buscador.addEventListener('input', () => {
    const textoBusqueda = $buscador.value.toLowerCase();
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda)
    ).slice(0, 3);

    mostrarResultados(productosFiltrados);
});

// Función para mostrar los resultados de búsqueda
function mostrarResultados(productosFiltrados) {
    $resultadosBusqueda.innerHTML = ''; // Limpiar resultados anteriores

    if (productosFiltrados.length === 0) {
        $resultadosBusqueda.textContent = 'No se encontraron productos.';
        return;
    }

    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('productoResultado');

        const productoDiv2 = document.createElement('div');
        productoDiv2.classList.add('productoResultado2');

        const productoDiv3 = document.createElement('div');
        productoDiv3.classList.add('productoResultado3');

        const nombreProducto = document.createElement('h3');
        nombreProducto.textContent = producto.nombre;

        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        imagenProducto.classList.add('imagenResultado');

        const precioProducto = document.createElement('p');
        precioProducto.textContent = `${producto.precio}€`;

        const botonVerProducto = document.createElement('button');
        botonVerProducto.textContent = 'Ver planta';
        botonVerProducto.classList.add('verProducto');
        botonVerProducto.addEventListener('click', () => abrirProducto(producto));

        // Agregar los elementos al contenedor de resultados
        productoDiv.appendChild(productoDiv2);
        productoDiv.appendChild(productoDiv3);
        productoDiv2.appendChild(imagenProducto);
        productoDiv3.appendChild(nombreProducto);
        productoDiv3.appendChild(precioProducto);
        productoDiv3.appendChild(botonVerProducto);

        $resultadosBusqueda.appendChild(productoDiv);
    });
}

// Crear los carruseles
crearCarrusel(productosSeleccion, $carruselSeleccionDiv, 'item_nuestraSeleccion');
crearCarrusel(productosInterior, $carruselInteriorDiv, 'item_interior');
crearCarrusel(productosExterior, $carruselExteriorDiv, 'item_exterior');

crearCarrito();

});