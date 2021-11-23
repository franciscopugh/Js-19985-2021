/*
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for(let i = 1; i<=10; i++) { // i = i + 1
    console.log(i)
}

let acumulador = 0;
let cantNotas = 0;

for(let i = 1; i<=10; i++) { // i = i + 1
    let nota = parseInt(prompt("Ingrese una nota"))
    if(nota >= 1 && nota <=10) {
        acumulador += nota //acumulador = acumulador + nota  
        cantNotas++; // cantNotas = cantNotas + 1
    } else {
        alert("Nota no valida")
    }

    if(i == 5) {
       continue 
    }
       
}

alert(`El promedio es ${acumulador / cantNotas}`)



let repetir = false;
let acumulador = 0;
let cantNotas = 0;

while(repetir) {
    let nota = parseInt(prompt("Ingrese una nota"))
    if(nota >= 1 && nota <=10) {
        acumulador += nota  
        cantNotas++; 
    } else {
        alert("Nota no valida")
    }

    let continua = prompt("¿Desea ingresar otra nota?").toLowerCase() //No, NO, no, nO

    if(continua == "no") {
        repetir = false; // Igual a hacer break
    } 
}

alert(`El promedio es ${acumulador / cantNotas}`)



let acumulador = 0;
let cantNotas = 0;

do {
    let nota = parseInt(prompt("Ingrese una nota"))
    if(nota >= 1 && nota <=10) {
        acumulador += nota  
        cantNotas++; 
    } else {
        alert("Nota no valida")
    }

    var continua = prompt("¿Desea ingresar otra nota?").toLowerCase() //No, NO, no, nO

} while(continua != "no")

alert(`El promedio es ${acumulador / cantNotas}`)
*/

let numero1, numero2, operacion;

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+, - , /, *)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese unos numeros validos")
    }
} while(isNaN(numero1) || isNaN(numero2)) 

switch (operacion) {
    case "+":
        alert(`El resultado de la suma es: ${numero1 + numero2}`)
        break
    case "-":
        alert(`El resultado de la resta es: ${numero1 - numero2}`)
        break
    case "/":
        alert(`El resultado de la division es: ${numero1 / numero2}`)
        break
    case "*":
        alert(`El resultado de la multiplicacion es: ${numero1 * numero2}`)
        break
    default:
        alert("No ingreso una operacion valida")
        break
}