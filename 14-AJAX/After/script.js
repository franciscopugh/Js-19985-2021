let divDolar = document.getElementById('divDolar')
let divClientes = document.getElementById('divClientes')

document.getElementById('botonDolar').addEventListener('click', () => {
    fetch('https://criptoya.com/api/dolar')
    .then(respuesta => respuesta.json())
    .then(cotizacionDolar => {
    let dolares = Object.entries(cotizacionDolar).filter(dolar => dolar[0] != "time")
        dolares.forEach(dolar => {
                divDolar.innerHTML += `
                    <p> Dolar ${dolar[0]} : $${dolar[1]} </p>
                `
        })
    
    })
})

document.getElementById('botonClientes').addEventListener('click', () => {
    fetch('clientes.json')
    .then(response => response.json())
    .then(datosClientes => {
        datosClientes.forEach(cliente => {
            divClientes.innerHTML += `
                <div class="card" id="cliente${cliente.index}"style="width: 18rem; margin: 10px;">
                    <div class="card-body">
                        <h5 class="card-title">${cliente.name}</h5>
                        <p class="card-text">Edad: ${cliente.age}</p>
                        <p class="card-text">Genero: ${cliente.gender}</p>
                        <p class="card-text">Sueldo: ${cliente.balance}</p>
                        <p class="card-text">E-mail: ${cliente.email}</p>
                        <p class="card-text">Telefono: ${cliente.phone}</p>
                        <button id="botonCliente${cliente.index}" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            `
        })
    })
})