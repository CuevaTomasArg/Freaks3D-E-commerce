//Zona de declaracion de contenedores, contiene cada seccion de productos

const contenedorMates = document.getElementById("Mates")
//contenedore del carrito
const contenedorCarrito = document.getElementById("carrito")
//Contador del carrito
const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')
//creo el carrito
let carrito = []
 
//Funcion para no perder los datos al salir de la pagina
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//Funciones para la creacion de las secciones de cada producto
stockProductosMates.forEach((mate) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src=${mate.img} class="card-img-top" alt=${mate.desc}>
    <div class="card-body">
        <strong class="card-title">${mate.nombre}</strong>
        <p class="card-text">${mate.precio}</p>
        <button id="agregar${mate.id}">
            <i class="bi bi-cart3"></i>
            <span class="boton-comprar-xs">Comprar</span> 
        </button>
    `
    contenedorMates.appendChild(div)
    const boton = document.getElementById(`agregar${mate.id}`)
    boton.addEventListener('click',() => {
        agregarAlCarrito(mate.id)
    })
});


//Funcion para agregar productos al carrito
//Por ahora solo funciona con los mates, revisar para que sea global
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
        //Stock solo de mates, agregar mas
    const item = stockProductosMates.find((prod) => prod.id === prodId)
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
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad,0)
} 