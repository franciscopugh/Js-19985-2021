/*
let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))



function sumar(numero1, numero2) {
    
    return numero1 + numero2
    
    //alert(numero1 + numero2) //Number + Undefined = NaN
}


let resultado = sumar(numero1,numero2)

console.log(sumar(numero1, numero2))
console.log(resultado)



const IVA = 1.21
let producto1 = 500;

function multiplicarPorIVA(producto, IVA) {
    return producto * IVA
}

function calcularIva(producto) {
    const IVA = 1.30 // Esto no se hace!!!
    producto1 = 600;
    let productoConIVA = multiplicarPorIVA(producto, IVA)
    return productoConIVA
}

console.log(IVA)
console.log(calcularIva(100))
console.log(producto1)


const suma = function(numero1, numero2) {return numero1 + numero2}
const resta = function(numero1, numero2) {return numero1 - numero2}
const division = function(numero1, numero2) {return numero1 / numero2}
const multiplicar = function(numero1, numero2) {return numero1 * numero2}
*/


const suma = (numero1, numero2) => numero1 + numero2
const resta = (numero1, numero2) => numero1 - numero2
const division = (numero1, numero2) => numero1 / numero2
const multiplicar = (numero1, numero2) => numero1 * numero2

do {
    var numero1 = parseFloat(prompt("Ingrese un numero"))
    var numero2 = parseFloat(prompt("Ingrese otro numero"))
    var operacion = prompt("Ingrese una operacion (+, - , /, *")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }

    if(numero2 === 0 && operacion == "/") {
        alert("No se puede dividir entre cero")
    }


} while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion == "/"))

if(operacion == "+") {
    alert(suma(numero1, numero2))
} else if(operacion == "-") {
    alert(resta(numero1, numero2)) 
} else if(operacion == "/") {
    alert(division(numero1, numero2))
} else if(operacion == "*") {
    alert(multiplicar(numero1, numero2))
} else {
    alert("Operacion no valida")
}

