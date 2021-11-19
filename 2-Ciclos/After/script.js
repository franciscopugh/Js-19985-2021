/*let numero = 4;

if(numero == 5) {
    console.log("Numero es 5")
} else {
    console.log("Numero no es 5")
}

if("ABC" > "a") {
    console.log("V")
} else { 
    console.log("F")
}

let palabra = "HoLA CoDers!"
palabra = palabra.toUpperCase()
console.log(palabra)
palabra = palabra.toLowerCase()

if(palabra == "hola coders!") {
    console.log(palabra)
    console.log("Chau coders!")
}*/

let mes = prompt("Ingrese un mes").toLowerCase()
let dia = parseInt(prompt("Ingrese un dia"))

let esVerano = (mes == "diciembre" || mes == "enero" || mes == "febrero")
let esOtoño = (mes == "marzo" || mes == "abril" || mes == "mayo")
let esInvierno = (mes == "junio" || mes == "julio" || mes == "agosto")
let esPrimavera = (mes == "septiembre" || mes == "octubre" || mes == "noviembre")

let solsticioVerano = (mes == "diciembre" && dia === 21)
let equinoccioOtoño = (mes == "marzo" && dia === 21)
let solsticioInvierno = (mes == "junio" && dia === 21)
let equinoccioPrimavera = (mes == "septiembre" && dia === 21)

alert (`¡Bienvenido ${mes} ${dia}!`)

if(esVerano) {
    console.log("Feliz Verano")
    if(solsticioVerano) 
        console.log("Feliz solsticio tambien!")
} else if(esOtoño) {
    console.log("Feliz Otoño")
    if(equinoccioOtoño) 
        console.log("Feliz equinoccio tambien!")
} else if(esInvierno) {
    console.log("Feliz Invierno")
    if(solsticioInvierno) 
        console.log("Feliz solsticio tambien!")
} else if(esPrimavera) {
    console.log("Feliz Primavera")
    if(equinoccioPrimavera)
        console.log("Feliz equinoccio tambien!")
} else {
    console.log("Ingresaste un mes no valido")
}

// || es Verdadero si alguno de los condicionales es verdadero
// && es verdadero si los dos condicionales son verdaderos
