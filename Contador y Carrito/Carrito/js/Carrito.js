// Función para calcular el subtotal de un libro
function calcularSubtotal(cantidadElementId, precioElementId, subtotalElementId) {
    var cantidad = parseInt(document.getElementById(cantidadElementId).value, 10);
    var precio = parseInt(document.getElementById(precioElementId).innerText.replace(/\./g, ''), 10);
    var subtotal = cantidad * precio;
    document.getElementById(subtotalElementId).innerText = "Subtotal: $" + subtotal;
    return subtotal;
}

// Función para calcular el total
function calcularTotal() {
    var subtotalLibro1 = calcularSubtotal("cantidadLibro1", "precioLibro1", "subtotalLibro1");
    var subtotalLibro2 = calcularSubtotal("cantidadLibro2", "precioLibro2", "subtotalLibro2");

    var totalLibros = subtotalLibro1 + subtotalLibro2;
    document.getElementById("totalLibros").innerText = totalLibros;

    var totalGeneral = totalLibros;  // Puedes ajustar aquí si hay más libros en el futuro
    document.getElementById("total").innerText = totalGeneral;
}

// Función para sumar a la cantidad
function sumarCantidad(elementId, precioElementId, subtotalElementId) {
    var cantidadElement = document.getElementById(elementId);
    cantidadElement.value = parseInt(cantidadElement.value, 10) + 1;
    var subtotal = calcularSubtotal(elementId, precioElementId, subtotalElementId);
    calcularTotal();
    return subtotal;
}

// Función para restar a la cantidad
function restarCantidad(elementId, precioElementId, subtotalElementId) {
    var cantidadElement = document.getElementById(elementId);
    var cantidadActual = parseInt(cantidadElement.value, 10);
    if (cantidadActual > 1) {
        cantidadElement.value = cantidadActual - 1;
        var subtotal = calcularSubtotal(elementId, precioElementId, subtotalElementId);
        calcularTotal();
        return subtotal;
    }
}

// Agregar eventos de clic a los botones de suma y resta
document.getElementById("sumarLibro1").addEventListener("click", function() { sumarCantidad("cantidadLibro1", "precioLibro1", "subtotalLibro1"); });
document.getElementById("restarLibro1").addEventListener("click", function() { restarCantidad("cantidadLibro1", "precioLibro1", "subtotalLibro1"); });
document.getElementById("sumarLibro2").addEventListener("click", function() { sumarCantidad("cantidadLibro2", "precioLibro2", "subtotalLibro2"); });
document.getElementById("restarLibro2").addEventListener("click", function() { restarCantidad("cantidadLibro2", "precioLibro2", "subtotalLibro2"); });

// Llamar a la función calcularTotal al cargar la página
window.onload = calcularTotal;
