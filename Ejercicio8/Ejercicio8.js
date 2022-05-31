var numero = prompt("Introduce un número entero");
 
var resultado = tipoNum(numero);
alert("El número "+ numero +" es "+ resultado);
 
function tipoNum(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}