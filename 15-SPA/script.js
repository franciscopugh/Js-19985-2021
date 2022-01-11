const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

let divProductos = document.getElementById('divProductos')
let divClima = document.getElementById('divClima')

fetch('productos.json')
.then(response => response.json())
.then(data => {
    data.forEach(producto => {
        divProductos.innerHTML += `
        <div class="card" id="producto${producto.id}" style="width: 18rem; margin: 5px">
            <img src="../img/${producto.img}" class="card-img-top" alt="producto imagen">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">Color: ${producto.color}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
                <button class="btn btn-dark">Cargar producto</button>
            </div>
        </div>
        `
    });
})

document.getElementById('botonClima').addEventListener('click', () => {
    let ciudad = document.getElementById('inputCiudad').value 
    let pais = document.getElementById('inputPais').value
    console.log(ciudad)
    console.log(pais)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=sp&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
    let datosClima = Object.entries(data).filter(datoClima => datoClima[0] == "main" || datoClima[0] == "weather")
    console.log(datosClima)
    
    if(data.length == 0) {
        divClima.innerHTML = "<p> Por favor ingrese una ciudad valida </p>"
    } else {
        divClima.innerHTML = `
        <p>Temperatura : ${datosClima[1][1].temp} °C</p>
        <p>Sensacion termica: ${datosClima[1][1].feels_like} °C </p>
        <p>Humedad: ${datosClima[1][1].humidity} %</p>
        <p>Presion: ${datosClima[1][1].pressure} hPa</p>
        <p>Clima: ${datosClima[0][1][0].description} </p>
    `
    }
    
})
})
