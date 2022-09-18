//Zona de declaracion de contenedores, contiene cada seccion de productos
//Contenedores
const contenedorStock = document.getElementById('stock')
//contenedore del carrito
const contenedorCarrito = document.getElementById("carrito")
//Contador del carrito
const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

//----CONTENEDOR GLOBAL DE PRODUCTOS----------
const contenedorProductos = document.getElementById('stock')
//creo el carrito
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

stockProductos.forEach((producto) =>{
    const contenedorCategoria = document.getElementById(`${producto.tipo}`) 
    const div = document.createElement('div')
    console.log('cree el elemento div con la clase card')
    div.classList.add('card')
    div.innerHTML = `
    <img src=${producto.img} class="card-img-top" alt=${producto.desc}>
    <div class="card-body">
        <strong class="card-title">${producto.nombre}</strong>
        <p class="card-text"><span>$<span>${producto.precio}</p>
        <button id="agregar${producto.id}">
            <i class="bi bi-cart3"></i>
            <span class="boton-comprar-xs">Comprar</span> 
        </button>
    </div>
    `

    contenedorCategoria.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click',() => {
        agregarAlCarrito(producto.id)
    })
})

//Funcion para que funciones el carrito
const agregarAlCarrito = (prodId) => {
    //Algoritmo para no repetir elementos en al array
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
        //Stock
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)

}
    actualizarCarrito()
    
}
//El eliminar del carrito funciona en forma de cola, no borra
//El produco exactamente seleccionado
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}

var HayProducto = null
//Funcion para crear las cositas en el carrito
const actualizarCarrito = ()=> {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ("producto-en-carrito")
        div.innerHTML = `
        <img src="${prod.img}" alt="${prod.desc}">
        <p class="nombre">${prod.nombre}</p>
        <p class="caracter">${prod.personaje}</p>
        <button onclick="eliminarDelCarrito(${prod.id})">
            <i class="bi bi-trash3"></i>
        </button>
        <label for="Cant" id="cantidad">${prod.cantidad}</label>
        <input name="Cant" type="number" value="" >
        <p class="price">${prod.precio * prod.cantidad}</p>
        <hr>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad,0)
    if (carrito.length != 0){
        HayProducto = true
    }else{
        HayProducto = false
    }
    seleccionarDestino()
} 

const seleccionarDestino = () =>{
    if (HayProducto){
        const title = document.getElementById('destinoProvincia')
        const select = document.getElementById('seleccionDestino')
        title.innerHTML =
        `<span>Provincia</span>`
        destino.forEach((dest) => {
            const option = document.createElement('option')
            option.innerText = `${dest}`
            select.appendChild(option)
        })
    } 
}

