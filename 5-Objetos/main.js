/*
const persona1 = {
    nombre: "Francisco",
    apellido: "Pugh",
    edad: 45,
    altura: 2.10,
    peso: 75
}

let persona2 = {
    nombre: "Emiliano",
    apellido: "Del Arco",
    edad: 25,
    altura: 1.95,
    peso: 74,
    sueldo: 60000
}

console.log(persona1.nombre)
console.log(`${persona1["nombre"]} ${persona1.apellido}`)

persona1.edad = true;
persona1.altura = "Si"
console.log(persona1.altura)

//persona1 = "Hola"
console.log(persona1)

for(let propiedad in persona1) {
    console.log(propiedad)
    
    console.log(persona1[propiedad])
}

function Persona(nombre, apellido, edad, peso, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.saludar = () => console.log(`Hola gente, mi nombre es ${this.nombre} ${this.apellido} estoy saludando!`)
}

const persona1 = new Persona("Francisco", "Pugh", 24, 78, 1.67)
const persona2 = new Persona("Emanuel", "Emil", 44, 80, 1.70)
//const persona2 = new Persona(persona1, true, "xd", false, "es alto")
//const persona3 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un apellido"), parseInt(prompt("Ingrese una edad")), parseFloat(prompt("Ingrese un peso")), parseFloat(prompt("Ingrese una altura")))

persona1.saludar() // persona1.nombre
persona2.saludar()

console.log(persona1)
//console.log(persona3)
*/

class Producto {
    constructor(nombre, precio, color, marca, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.marca = marca;
        this.stock = stock;
    }

    aumentarStock(cantProductos) {
        this.stock += cantProductos;
    }

    disminuirStock(cantProductos) {
        this.stock -= cantProductos;
    }

}

const producto1 = new Producto("Chocolate", 120, "Roja", "CoderChoco", 100)

console.log(producto1.stock)
producto1.aumentarStock(50)
console.log(producto1.stock)
producto1.disminuirStock(30)
console.log(producto1)