/*
let boton = document.getElementById("boton1")
let botonInput = document.getElementById("botonInput")

boton.addEventListener('click', () => {
    console.log("Hola desde boton!")
})

boton.onclick = () => {
    console.log("Hola desde boton en DOM!.")
}

botonInput.addEventListener('click', () => {
    let inputTexto = document.getElementById("inputText").value
    console.log(inputTexto)
})


let inputText = document.getElementById("inputText")
let parrafoInput1 = document.getElementById("p1")
let parrafoInput2 = document.getElementById("p2")

inputText.addEventListener('input', (e) => {
    parrafoInput1.innerText = e.target.value
})

inputText.addEventListener('change', (e) => {
    parrafoInput2.innerText = e.target.value
})


let inputColor = document.getElementById("inputColor")

inputColor.addEventListener('change', (e) => {
    console.log(e.target.value)
    document.body.style.backgroundColor = e.target.value
})
*/

class Auto {
    constructor(modelo, marca, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
}

const auto1 = new Auto("Camaro", "Chevrolet", 30000)
const auto2 = new Auto("206", "Peugeot", 10000 )
const auto3 = new Auto("600", "Fiat", 1000)
const auto4 = new Auto("f405", "Ferrari", 80000)
const auto5 = new Auto("Kangoo", "Renault", 4000)
const auto6 = new Auto("Clio", "Renault", 3000)

let autos = [auto1, auto2, auto3, auto4, auto5, auto6]

let divAutos = document.getElementById("divAutos")
let botonAuto = document.getElementById("botonAutos")

botonAuto.addEventListener('click', () => {
    autos.forEach((autoEnArray, indice) => {
        divAutos.innerHTML += `
            <div class="card" id="auto${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${autoEnArray.modelo}</h5>
                    <p class="card-text">${autoEnArray.marca}</p>
                    <p class="card-text">$${autoEnArray.precio}</p>
                    <button class="btn btn-danger" id="boton${indice}">Eliminar</button>
                </div>
            </div>
        `
        
    })
    
})