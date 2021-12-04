/*let myArray = [true, 5, "Dato"]

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
*/
class Auto {
    constructor(modelo, marca, año, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.precio = precio;
    }
}

const auto1 = new Auto(prompt("Ingrese el modelo"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el año")), parseFloat(prompt("Ingrese un precio")))
const auto2 = new Auto(prompt("Ingrese el modelo"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el año")), parseFloat(prompt("Ingrese un precio")))
const auto3 = new Auto(prompt("Ingrese el modelo"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el año")), parseFloat(prompt("Ingrese un precio")))
const auto4 = new Auto(prompt("Ingrese el modelo"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el año")), parseFloat(prompt("Ingrese un precio")))

let arrayAutos = [auto1, auto2, auto3, auto4]

for(let autoEnArray of arrayAutos) {
    console.log(autoEnArray)
}


console.log(arrayAutos.find(autoEnArray => autoEnArray.modelo == "C3")) // Si no lo encuentra, retorna indefinido
console.log(arrayAutos.filter(autoEnArray => autoEnArray.precio >= 1000)) //Si no los encuentra, retorna []
console.log(arrayAutos.map(arrayAutos => arrayAutos = arrayAutos.precio))

console.log(arrayAutos.sort((autoA, autoB) => autoA.precio - autoB.precio))