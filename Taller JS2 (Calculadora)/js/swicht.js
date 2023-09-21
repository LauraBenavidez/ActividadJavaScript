opc=parseInt(prompt("Ingresa una opción: 1 Area Cuadrado, 2 Area Rectángulo, 3 Area Triángulo, Ingresa opción: 4 suma, 5 resta, 6 multiplicación, 7 divisón, 8 cual es el numero mayor"));
    switch(opc){
        case 1:
            base= parseInt(prompt("Ingresa La base"));
            var resultado = base*base;
            alert ("El area es " +resultado);
                if(base != 0){
                    document.write("El resultado del area del cuadrado es :" + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
            break;
        case 2:
            base= parseInt(prompt("Ingresa La base"));
            altura = parseInt(prompt("Ingresa La Altura"));
            var resultado = base*altura;
            alert ("El area es " +resultado);
                if(base != 0 && altura != 0){
                    document.write("El resultado del area del rectangulo es :" +resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
            
            break;
        case 3:
            base= parseInt(prompt("Ingresa La base"));
            altura = parseInt(prompt("Ingresa La Altura"));
            var resultado = base*altura/2;
            alert ("El area es " +resultado);
                if(base != 0 && altura != 0){
                    document.write("El resultado del area del triangulo es :" + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
           
            break;
        case 4:
        suma= parseFloat(prompt("ingrese el primer numero"))
        suma2= parseFloat(prompt("ingrese el segundo numero"))
        var resultado = suma+suma2;
        alert ("el resultado de la suma es:" +resultado)
        if(suma != 0){
            document.write("el resultado de la suma es: " +resultado )
            } else {
                alert('error');
            }
            break;
        case 5:
        resta= parseFloat(prompt("ingrese el primer numero"))
        resta2= parseFloat(prompt("ingrese el segundo numero"))
        var resultado = resta-resta2;
        alert ("el resultado de la resta es:" +resultado)
        if(resta != 0){
            document.write("el resultado de la resta es: " +resultado )
            } else {
                alert('error');
            }
            break;
        case 6:
        multiplicacion= parseFloat(prompt("ingrese el primer numero"))
        multiplicacion2= parseFloat(prompt("ingrese el segundo numero"))
        var resultado = multiplicacion*multiplicacion2;
        alert ("el resultado de la multiplicacion es:" +resultado)
        if(resta != 0){
            document.write("el resultado de la multiplicacion es: " +resultado )
            } else {
            alert('error');
            }
            break;
        case 7:
        division= parseFloat(prompt("ingrese el primer numero"))
        division2= parseFloat(prompt("ingrese el segundo numero"))
        var resultado = division/division2;
        alert ("el resultado de la division es:" +resultado)
        if(resta != 0){
            document.write("el resultado de la division es: " +resultado )
            } else {
            alert('error');
            }
            break;
        case 8:
            num1 = parseFloat(prompt("Ingrese el primer :"));
            num2 = parseFloat(prompt("Ingrese el segundo numero :"))

            if (num1 > num2) {
                document.write("El número " + num1 + " es mayor que " + num2);
            } else if (num2 > num1) {
                document.write("El número " + num2 + " es mayor que " + num1);

           
            break;
            }
        
        mostrar();;
            
    }
