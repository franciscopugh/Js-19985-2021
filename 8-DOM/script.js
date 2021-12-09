/*
let parrafo1 = document.getElementById("parrafo1")
let parrafosClase = document.getElementsByClassName("parrafos")
let tagParrafos = document.getElementsByTagName("p")
console.log(parrafo1)
console.log(parrafosClase[0].children)
console.log(tagParrafos[0])

console.log(parrafosClase[0])

for(let parrafo of parrafosClase[0].children) {
    console.log(parrafo)
}

let parrafo3 = document.getElementById("parrafo3")
let parrafosClase = document.getElementById("parrafos")

let parrafoCreado = document.createElement("p")
parrafoCreado.id = "parrafo4"
parrafoCreado.className = "parrafosRandom"
parrafoCreado.innerText = "Hola Coders!!!"
parrafosClase.appendChild(parrafoCreado)

parrafosClase.removeChild(parrafoCreado)
parrafo3.remove()*/


class Persona {
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona(1, "Francisco", "Pugh", 40)
const persona2 = new Persona(2, "Pedro", "Palencia", 25)
const persona3 = new Persona(3, "Aaron", "Saban", 23)

let personasArray = [persona1, persona2, persona3]

let divPersonas = document.getElementById("divPersonas")

//Reemplazo del for of
personasArray.forEach(personaEnArray => {
    divPersonas.innerHTML += `
        <div id="persona${personaEnArray.id}">
            <p> Nombre: ${personaEnArray.nombre} </p>
            <p> Apellido: ${personaEnArray.apellido}</p>
            <p> Edad: ${personaEnArray.edad} </p>
        </div>
    `
})
