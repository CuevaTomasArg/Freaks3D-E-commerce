//Zona de declaracion de contenedores, contiene cada seccion de productos

const contenedorMates = document.getElementById("Mates")
//contenedore del carrito
const contenedorCarrito = document.getElementById("carrito")
//creo el carrito
let carrito = []

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
    const item = stockProductosMates.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

//Funcion para crear las cositas en el carrito
const actualizarCarrito = ()=> {
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
        <p class="price">${prod.precio}</p>
        `
        contenedorCarrito.appendChild(div)
    })
} 