let divProductos = document.getElementById('divProductos')
localStorage.setItem('carrito', JSON.stringify([]))

productos.filter(producto => producto.id > 3).forEach(producto => {
    divProductos.innerHTML += producto.devolverDatos()
})

productos.filter(producto => producto.id > 3).forEach(producto => {
    document.getElementById(`boton${producto.id}`).addEventListener('click', () => {
        arrayCarrito.push(producto)
        localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
    })
})

