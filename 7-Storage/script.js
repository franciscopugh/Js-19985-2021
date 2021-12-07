/*localStorage.setItem('Hola', ["Chau", "Raul", 1, 6, true])
localStorage.setItem('Chau', "Adios")

sessionStorage.setItem('Lunes', "Es hoy")

let valoresLocalStorage = localStorage.getItem('Hola')
console.log(valoresLocalStorage)

//localStorage.removeItem('Chau')

localStorage.clear()

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}*/


class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    devolverDatos() {
        return `${this.nombre} - ${this.apellido}`
    }
}

const persona1 = new Persona("Francisco", "Pugh")
const persona2 = new Persona("Lucila", "Fortunato")

let personasArray = [persona1, persona2]

localStorage.setItem('alumnos', JSON.stringify(personasArray))


let personasConsultadas = JSON.parse(localStorage.getItem('alumnos'))
console.log(personasConsultadas)
