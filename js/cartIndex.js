
//Todo esto es para leer el json que tengo de stock
// document.addEventListener('DOMContentLoaded',()=>{
//     fetchData()
// } )

// const fetchData = async() =>{
//     try{
//         const res = await fetch("../json/stock.json")
//         const data = await res.json()
//         console.log(data)
//     } catch(error){
//         console.log(error)
//     }
// }

stockPresentacion.forEach((producto) =>{
    const contenedorPresentacion = document.getElementById(`${producto.tipo}`) 
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

    contenedorPresentacion.appendChild(div)
    const botonF = document.getElementById(`agregar${producto.id}`)
    botonF.addEventListener('click',() => {
        agregarAlCarrito(producto.id)
    })
});