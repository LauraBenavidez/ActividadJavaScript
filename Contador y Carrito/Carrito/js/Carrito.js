// Función para calcular el total
function calcularTotal() {
    // Obtener los elementos HTML
    var cantidadLibro1 = parseInt(document.getElementById("cantidadLibro1").value, 10);
    var precioLibro1 = parseInt(document.getElementById("precioLibro1").innerText.replace(/\./g, ''), 10);

    var cantidadLibro2 = parseInt(document.getElementById("cantidadLibro2").value, 10);
    var precioLibro2 = parseInt(document.getElementById("precioLibro2").innerText.replace(/\./g, ''), 10);

    // Calcular el subtotal de cada libro y sumarlos para obtener el total
    var subtotalLibro1 = cantidadLibro1 * precioLibro1;
    var subtotalLibro2 = cantidadLibro2 * precioLibro2;

    var total = subtotalLibro1 + subtotalLibro2;

    // Mostrar el total en el elemento HTML correspondiente
    document.getElementById("total").innerText = formatearNumero(total);
}

// Función para formatear el número con separadores de miles
function formatearNumero(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
