class Cliente {
    constructor(nombre, apellido, dni, email, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.sueldo = sueldo;
    }

    incrementarSueldo(dineroAIncrementar) {
        this.sueldo += dineroAIncrementar;
    }

    decrementarSueldo(dineroADecrementar) {
        this.sueldo -= dineroADecrementar;
    }
}

let clientes;
let formCliente = document.getElementById('formCliente')
let divClientes = document.getElementById('divClientes')
let parrafoError = document.getElementById('parrafoError')


if(localStorage.getItem('clientes')) {
    clientes = JSON.parse(localStorage.getItem('clientes'))
} else {
    clientes = []
}

//Obtengo informacion del formulario 
formCliente.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreCliente = document.getElementById("nombre").value
    let apellidoCliente = document.getElementById("apellido").value
    let dniCliente = document.getElementById("dni").value
    let emailCliente = document.getElementById("email").value
    let sueldoCliente = document.getElementById("sueldo").value

    let objetoCliente = new Cliente(nombreCliente, apellidoCliente, dniCliente, emailCliente, sueldoCliente)
    
    clientes.push(objetoCliente)

    localStorage.setItem('clientes', JSON.stringify(clientes))

    formCliente.reset()
})

//Muestro informacion del storage a traves de un boton
document.getElementById('botonClientes').addEventListener('click', () => {
    let clientesStorage = JSON.parse(localStorage.getItem('clientes'))

    if(divClientes.children.length == 0) {
        clientesStorage.forEach((clienteArray, indice) => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${indice}" style="width: 18rem;margin: 6px">
                    <div class="card-body">
                        <h5 class="card-title">${clienteArray.nombre} ${clienteArray.apellido}</h5>
                        <p class="card-text">${clienteArray.dni}</p>
                        <p class="card-text">${clienteArray.email}</p>
                        <p class="card-text">$${clienteArray.sueldo}</p>
                        <button id="boton${indice}" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            
            `
        }) 

        //Añado el evento eliminar a las cards
        clientesStorage.forEach((clienteArray, indice) => {
            document.getElementById(`boton${indice}`).addEventListener('click', () => {
                document.getElementById(`cliente${indice}`).remove()
                clientes.splice(indice, 1)
                localStorage.setItem('clientes', JSON.stringify(clientes))
                console.log(`El cliente ${clienteArray.nombre} ha sido eliminado`)
            })
        })

    } else {
        parrafoError.innerText = "Por favor deje de dar click a el boton Cargar Clientes"
    }

})