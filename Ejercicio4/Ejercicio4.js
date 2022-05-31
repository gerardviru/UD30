// Apartado 1
var valores = [true, 5, false, "hola", "adios", 2];
let textomayor = '';

valores.forEach(x => {
    if (typeof x === 'string') {
        if (x.length >= textomayor.length) {
            textomayor = x;
        }
    }
});
console.log(textomayor);

//-----------------------------------------------------------

//Apartado 2
let True;
let False;

valores.forEach(e => {
    if (typeof e === 'boolean') {
        (e) ? (True = e) : (False = e);
    }
});
console.log(' El valor és: ' + True);
console.log(' El valor és: ' + False);

//------------------------------------------------------------

// Apartado 3
let num1 = null;
let num2 = null;

valores.forEach(e => {
    if (typeof e === 'number') {

        if (num1 == null) {
            num1 = e;
        } else if (num2 == null) {
            num2 = e;
        }
    }
});

console.log('Numero1 ' + num1 + ' +' + ' Numero2 ' + num2 + ' = ' + (num1 + num2));
console.log('Numero1 ' + num1 + ' -' + ' Numero2 ' + num2 + ' = ' + (num1 - num2));
console.log('Numero1 ' + num1 + ' *' + ' Numero2 ' + num2 + ' = ' + (num1 * num2));
console.log('Numero1 ' + num1 + ' /' + ' Numero2 ' + num2 + ' = ' + (num1 / num2)); 