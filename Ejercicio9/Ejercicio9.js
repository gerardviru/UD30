function info(cadena) {

    var resultado = "La cadena \"" + cadena + "\" ";

    // Comprobar mayúsculas y minúsculas
    if (cadena == cadena.toUpperCase()) {
        resultado += " está formada sólo por mayúsculas";
    }
    else if (cadena == cadena.toLowerCase()) {
        resultado += " está formada sólo por minúsculas";
    }
    else {
        resultado += " está formada por mayúsculas y minúsculas";
    }

    return resultado;
}

alert(info("EL PADEL ES UN DEPORTE COLECTIVO QUE SE PRACTICA POR PAREJAS"));
alert(info("estoy realizando el ejercicio 9 de la unidad ud30 de javascript"));