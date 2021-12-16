class Producto {
    constructor(id, nombre, marca, modelo, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.precio  = precio;
        this.stock = stock
    }

    devolverDatos() {
        return `
        <div class="card" id="producto${this.id} "style="width: 18rem; margin:6px">
            <img src="./img/imagen${this.id}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.nombre}</h5>
                <p class="card-text">${this.marca}</p>
                <p class="card-text">${this.modelo}</p>
                <p class="card-text">$${this.precio}</p>
                <p class="card-text">Stock${this.stock}</p>
                <button class="btn btn-dark" id="boton${this.id}">Agregar al carrito</button>
            </div>
        </div>
    
        `
    }
}

const producto1 = new Producto(1,"Notebook", "Pcbox", "Aa15", 60000, 40)
const producto2 = new Producto(2,"Silla Gamer", "Gaaaamer", "Azabache", 35000, 20)
const producto3 = new Producto(3,"Tv Led", "Nova", "RRTT", 25000, 15)
const producto4 = new Producto(4,"Tablet", "Philco", "XX13", 14000, 50)
const producto5 = new Producto(5,"PC Escritorio", "iQual", "Pa' jugar", 80000, 10)
const producto6 = new Producto(6,"Celular", "TCL", "20A", 20000, 35)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6]
let arrayCarrito = []