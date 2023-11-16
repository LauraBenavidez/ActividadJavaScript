// Solicitar al usuario que ingrese una opción
var opc = parseInt(prompt("Ingresa una opción: 1 Área Cuadrado, 2 Área Rectángulo, 3 Área Triángulo, Ingresa opción: 4 suma, 5 resta, 6 multiplicación, 7 división, 8 cuál es el numero mayor"));

// Utilizar un switch para manejar diferentes casos según la opción ingresada
switch (opc) {
    // Caso 1: Calcular el área de un cuadrado
    case 1:
        var base = parseInt(prompt("Ingresa La base"));
        var resultado = base * base;
        alert("El área es " + resultado);
        // Verificar si la base es diferente de cero antes de mostrar el resultado
        if (base != 0) {
            document.write("El resultado del área del cuadrado es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;

    // Caso 2: Calcular el área de un rectángulo
    case 2:
        var base = parseInt(prompt("Ingresa La base"));
        var altura = parseInt(prompt("Ingresa La Altura"));
        var resultado = base * altura;
        alert("El área es " + resultado);
        // Verificar si tanto la base como la altura son diferentes de cero antes de mostrar el resultado
        if (base != 0 && altura != 0) {
            document.write("El resultado del área del rectángulo es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;

    // Caso 3: Calcular el área de un triángulo
    case 3:
        var base = parseInt(prompt("Ingresa La base"));
        var altura = parseInt(prompt("Ingresa La Altura"));
        var resultado = (base * altura) / 2;
        alert("El área es " + resultado);
        // Verificar si tanto la base como la altura son diferentes de cero antes de mostrar el resultado
        if (base != 0 && altura != 0) {
            document.write("El resultado del área del triángulo es: " + resultado);
        } else {
            alert("Error, ingrese valores diferentes de cero");
        }
        break;

    // Caso 4: Realizar una suma
    case 4:
        var suma1 = parseFloat(prompt("Ingrese el primer número"));
        var suma2 = parseFloat(prompt("Ingrese el segundo número"));
        var resultado = suma1 + suma2;
        alert("El resultado de la suma es: " + resultado);
        // Verificar si la suma1 es diferente de cero antes de mostrar el resultado
        if (suma1 != 0) {
            document.write("El resultado de la suma es: " + resultado);
        } else {
            alert('Error, ingrese valores diferentes de cero');
        }
        break;

    // Caso 5: Realizar una resta
    case 5:
        var resta1 = parseFloat(prompt("Ingrese el primer número"));
        var resta2 = parseFloat(prompt("Ingrese el segundo número"));
        var resultado = resta1 - resta2;
        alert("El resultado de la resta es: " + resultado);
        // Verificar si la resta1 es diferente de cero antes de mostrar el resultado
        if (resta1 != 0) {
            document.write("El resultado de la resta es: " + resultado);
        } else {
            alert('Error, ingrese valores diferentes de cero');
        }
        break;

    // Caso 6: Realizar una multiplicación
    case 6:
        var multiplicacion1 = parseFloat(prompt("Ingrese el primer número"));
        var multiplicacion2 = parseFloat(prompt("Ingrese el segundo número"));
        var resultado = multiplicacion1 * multiplicacion2;
        alert("El resultado de la multiplicación es: " + resultado);
        // Verificar si la multiplicacion1 es diferente de cero antes de mostrar el resultado
        if (multiplicacion1 != 0) {
            document.write("El resultado de la multiplicación es: " + resultado);
        } else {
            alert('Error, ingrese valores diferentes de cero');
        }
        break;

    // Caso 7: Realizar una división
    case 7:
        var division1 = parseFloat(prompt("Ingrese el primer número"));
        var division2 = parseFloat(prompt("Ingrese el segundo número"));
        var resultado = division1 / division2;
        alert("El resultado de la división es: " + resultado);
        // Verificar si la division1 es diferente de cero antes de mostrar el resultado
        if (division1 != 0) {
            document.write("El resultado de la división es: " + resultado);
        } else {
            alert('Error, ingrese valores diferentes de cero');
        }
        break;

    // Caso 8: Comparar cuál de dos números es mayor
    case 8:
        var num1 = parseFloat(prompt("Ingrese el primer número"));
        var num2 = parseFloat(prompt("Ingrese el segundo número"));

        if (num1 > num2) {
            document.write("El número " + num1 + " es mayor que " + num2);
        } else if (num2 > num1) {
            document.write("El número " + num2 + " es mayor que " + num1);
        } else {
            document.write("Los números son iguales");
        }
        break;

    // Si la opción ingresada no coincide con ningún caso
    default:
        alert("Opción no válida");
}