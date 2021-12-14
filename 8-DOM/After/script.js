/*let parrafoId = document.getElementById("parrafo1")
let claseTexto = document.getElementsByClassName("texto")
let etiquetasP = document.getElementsByTagName("p")

console.log(parrafoId)
console.log(claseTexto)
console.log(etiquetasP)

parrafoId.innerText = "Feliz Jueves!."
claseTexto[0].innerHTML += "<p> Feliz tarde! </p>"*/


class Producto {
    constructor(id, nombre, talle, marca, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.talle = talle;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto(1, "Remera", "XL", "Caballeros XL", 1500, 30 )
const producto2 = new Producto(2, "Pantalon", 42, "Te queda bien!", 2300, 40)
const producto3 = new Producto(3, "Zapatillas", 34, "Adadis", 3100, 25)
const producto4 = new Producto(4, "Campera", "M", "Tutto Camperas", 4000, 18)

let productosTienda = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById("divProductos")

productosTienda.forEach(productoEnArray => {
    divProductos.innerHTML += `
        <div class="card" id="producto${productoEnArray.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${productoEnArray.nombre}</h5>
                <p class="card-text">${productoEnArray.marca}</p>
                <p class="card-text">Talle: ${productoEnArray.talle}</p>
                <p class="card-text">$${productoEnArray.precio}</p>
                <p class="card-text">Stock: ${productoEnArray.stock}</p>
                <div class="row">
                    
                <button id="botonEliminar${productoEnArray.id}" class="btn btn-danger">Eliminar</button>
                <button id="botonAgregar${productoEnArray.id}" class="btn btn-dark">Agregar al carrito</button>
                </div>
        
                </div>
        </div>
    `
})