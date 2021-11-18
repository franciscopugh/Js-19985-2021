/*let numero = 9

if(numero == 5) {
    console.log("Numero igual a 5")
} else {
    console.log("Numero no es igual a 5")
}

if(numero % 2 == 0) {
    console.log("Numero es par")
} else {
    console.log("Numero es impar")
}

if(numero % 2) {
    console.log("Es impar")
} else {
    console.log("Es par")
    
}

if(0) {
    console.log("v")
} else {
    console.log("F")
}


let producto = 600
let esMayorA500 = (producto > 500)
let esMenorA200 = (producto < 200)
// > < <= >= 

if(esMayorA500) {
    console.log("Producto mayor a 500")
} else if(esMenorA200) {
    console.log("Producto menor a 200")
} else {
    console.log("Producto es mayor o igual a 200 o menor o igual a 500")
}

if(1 === "1") {
    console.log("V")
} else {
    console.log("F")
}
// 1 == "1" !=
if(1 !== "1") {
    console.log("V")
} else {
    console.log("F")
}

let hayPlata = "si"
let meInvitaron = "si"

if(hayPlata === "no" && meInvitaron === "no") {
    console.log("Yo salgo")
} else {
    console.log("Yo no salgo")
}

/*
    //Operador AND
    p       &&      q
    V       V       V
    V       F       F
    F       F       V
    F       F       F


let hayPlata = "si"
let meInvitaron = "si"

if(hayPlata === "no" || meInvitaron === "no") {
    console.log("Yo salgo")
} else {
    console.log("Yo no salgo")
}

/*
    Operador OR

    p       ||      q
    V       V      V
    V       V      F
    F       V      V
    F       F      F


let hayPlata = "si"
let meInvitaron = "si"

if(hayPlata === "no" || !(meInvitaron === "no")) {
    console.log("Yo salgo")
} else {
    console.log("Yo no salgo")
}

/*
    ! p 
    F  V
    V  F    
*/

// Desaprobado < 6 Bien == 6 o 7 Muy Bien 8 o 9 Excelente 10

let nota = parseInt(prompt("Ingrese una nota"))

if(nota >= 1 && nota <6) {
    console.log("Estas desaprobado")
} else if(nota === 6 || nota === 7) {
    console.log("Aprobado con nota de Bien")
} else if(nota === 8 || nota === 9) {
    console.log("Aprobado con nota de Muy bien")
} else if(nota === 10) {
    console.log("Aprobado con nota de Excelente")
} else {
    console.log("Ingrese una nota valida")
}