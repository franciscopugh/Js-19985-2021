/*
let arrayPrueba = []
        //          0     1     2     3    4
let arrayPrueba2 = [true, 50, "Hola", 5, false]

let arrayPrueba3 = ["Saludos", 9]

console.log(arrayPrueba2)
console.log(arrayPrueba2[0])
console.log(arrayPrueba2[2])

arrayPrueba2.push("Chau")

for(let i = 0; i < arrayPrueba2.length; i++) {
    console.log(arrayPrueba2[i])
}

arrayPrueba2.pop()

//console.log(arrayPrueba2.toString())
console.log(arrayPrueba2.join(" "))
let array4 = arrayPrueba2.concat(arrayPrueba3)
console.log(array4.join("#"))*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 40)
const persona2 = new Persona("Emiliano", "Del Arco", 24)
const persona3 = new Persona("Federico", "Aletti", 25)

let personas = [persona1, persona2, persona3]

console.log(personas)

for(let personaIterador of personas) {
    //console.log(personaIterador)
    for(let atributo in personaIterador) {
        console.log(personaIterador[atributo])
    }
}

console.log(personas.find(personaABuscar => personaABuscar.edad <= 24))
let listaDePersonas = personas.filter(personaABuscar => personaABuscar.edad < 20)
console.log(listaDePersonas)

console.log(personas.map(personaAModificar => personaAModificar.edad > 25))
