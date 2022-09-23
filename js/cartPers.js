stockPersonalizables.forEach((producto) =>{
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
    const botonP = document.getElementById(`agregar${producto.id}`)
    botonP.addEventListener('click',() => {
        agregarAlCarrito(producto.id)
    })
});