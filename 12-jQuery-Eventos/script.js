/*
window.addEventListener('load', ()=>{
    console.log("Hola desde Load!")
})

$(()=>{
    console.log("Hola desde Ready!")
})

$(() => {
    $('#boton1').on('click', () => {
        console.log("Click desde jQuery")
    })

    $('#boton1').click(() => {
        console.log("Click desde click!")
    })
})

document.getElementById("boton1").addEventListener('click', () => {
    console.log("Hola desde Vainilla Js")
    document.body.style.backgroundColor = "black"
})*/

class Auto {
    constructor(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }
}

let autos = []

$(() => {
    $('#formAuto').submit((e) => {
        e.preventDefault()

        /*console.log($('#marca').val()) // document.getElementById("marca").value
        let auto = new FormData(e.target)
        console.log(auto.get('marca'))
        console.log(auto.get('modelo'))
        console.log(auto.get('año'))
        console.log(auto.get('precio'))*/

        let auto = new Auto($('#marca').val(), $('#modelo').val(), $('#año').val(), $('#precio').val() )
        autos.push(auto)

        localStorage.setItem('autosKey', JSON.stringify(autos))
        $('#formAuto').trigger("reset") // document.getElementById("formAuto").reset()
    })

    //jQuery('') == $('')
    $('#boton1').on('click', () => {
        $('#divAutos').html(`
        
        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Año</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody id="table-body">
            
        </tbody>
      </table>
        `)


        let autosStorage = JSON.parse(localStorage.getItem('autosKey'))

        autosStorage.forEach((autoEnArray, indice) => {
            $('#table-body').append(`
                <tr class="table-dark" id="auto${indice}">
                    <th scope="row">${indice + 1}</th>
                    <td>${autoEnArray.marca}</td>
                    <td>${autoEnArray.modelo}</td>
                    <td>${autoEnArray.año}</td>
                    <td>${autoEnArray.precio}</td>
                </tr>

            `)
        });
        
    })


    $('#inputId').change(() => {
        console.log("Hola desde Input")
    })

    $('#botonBoton').click(() => {
        $('#inputId').trigger("change")
    }) 
})

/*<table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Año</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
            <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
        </tbody>
      </table>*/