
//Funcion para que quede guardado el carrito

//creo el carrito
let carrito = []

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
        if(prodId>3000){
            const itemPe = stockPresentacion.find((prod) => prod.id === prodId)
            carrito.push(itemPe)
        }else if(prodId > 2000){
            const itemF = stockFilamento.find((prod) => prod.id === prodId)
            carrito.push(itemF)
            }else if(prodId > 1000 && prodId < 2000){
                const itemPe = stockPersonalizables.find((prod) => prod.id === prodId)
                carrito.push(itemPe) 
                }else{
                    const itemP = stockProductos.find((prod) => prod.id === prodId)
                    carrito.push(itemP)
                }
        
    
    compraTotal = carrito

}
    actualizarCarrito()
    
};
//El eliminar del carrito funciona en forma de cola, no borra
//El produco exactamente seleccionado
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
};
const aumentarCant = (prodId) =>{
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito[indice].cantidad ++
    actualizarCarrito()
}
const disminuirCant = (prodId) =>{
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    if(carrito[indice].cantidad > 1){
        carrito[indice].cantidad --
        actualizarCarrito()
    }
}

const actualizarFormularioCompra = () => {
    contenedorCardsComrpa.innerHTML = ""
    var productos = ''
    const dataEnviar = document.getElementById('dataEnviar')
    carrito.forEach((prod)=>{
        const divBuy = document.createElement('div')
        divBuy.className = ("carta-compra")
        divBuy.innerHTML = `
        <img src="${prod.img}" alt="${prod.desc}">
        <div>    
            <strong class="nomProducto">${prod.nombre}</strong>
            <p class="cant">x ${prod.cantidad}</p>
            <p class="monto">$${prod.precio * prod.cantidad}</p>
        </div>
        <hr>
        `
        contenedorCardsComrpa.appendChild(divBuy)
        productos += `Producto: ${prod.nombre}, Cantidad: ${prod.cantidad} || `
    })
    dataEnviar.innerHTML=`
    <input readonly onmousedownn="return false;" name="productos" type="hidden" value="${productos}">
    `
}

//Funcion para crear las cositas en el carrito
const actualizarCarrito = ()=> {
    console.log(carrito)
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ("producto-en-carrito")
        div.innerHTML = `
        <img src="${prod.img}" alt="${prod.desc}">
        <p class="nombre">${prod.nombre}</p>
        <button onclick="eliminarDelCarrito(${prod.id})">
            <i class="bi bi-trash3"></i>
        </button>
        <label for="Cant" id="cantidad">Cantidad</label>
        <div class="CantidadDeProd">
            <input readonly onmousedownn="return false;" name="Cant" type="number" value="${prod.cantidad}" >
            <button class="aum" onclick="aumentarCant(${prod.id})">
                <i class="bi bi-chevron-up"></i>
            <button>
            <button class="dis" onclick="disminuirCant(${prod.id})">
                <i class="bi bi-chevron-down"></i>
            <button>
        </div>
        <p class="price">${prod.precio * prod.cantidad}</p>
        <hr>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    actualizarFormularioCompra()
    contadorCarrito.innerText = carrito.length
    var montoCarrito = carrito.reduce((acc,prod) => acc + (prod.precio * prod.cantidad),0)
    precioTotal.innerText = montoCarrito + montoDestino
    precioTotalForm.innerText =montoCarrito + montoDestino
    if (carrito.length != 0){
        HayProducto = true
        if (existeDestino){
            seleccionarDestino()
            existeDestino = false
        }
    }else{
        HayProducto = false
        seleccionarDestino()
        existeDestino = true
        contadorCarrito.innerText = ''
    }
}; 

//Tengo que sumar lo del destino al monto total
const seleccionarDestino = () =>{
    const formularioProv = document.getElementById('montoPorProvincia')
    if (HayProducto){
        const title = document.createElement('label')
        const select = document.createElement('select')
        const montoDest = document.createElement('p')
        title.innerText = 'Provincia'
        title.setAttribute('id','destinoProvincia')
        title.setAttribute('style',"margin-rigth:12px")
        select.setAttribute('id','seleccionDestino')
        select.setAttribute('name','provincia-destino')
        select.setAttribute('style',"margin-left:12px;")
        montoDest.setAttribute('id','montoDestino$')
        formularioProv.appendChild(title)
        formularioProv.appendChild(select)
        formularioProv.appendChild(montoDest)
        destino.forEach((dest) => {
            const option = document.createElement('option')
            option.setAttribute('value',`${dest.monto}`)
            option.setAttribute('id',`${dest.provincia}`)
            option.innerText = `${dest.provincia}`
            select.appendChild(option)
        })
        const selectElement = document.getElementById('seleccionDestino')
        selectElement.addEventListener('change', (event) => {
            const resultado = document.getElementById('montoDestino$')
            resultado.setAttribute('style',"margin:12px")
            resultado.innerText = `Monto de entrega: $${event.target.value}`
            montoDelDestino.innerText = event.target.value
            //----------------------
            montoDestino = parseInt(event.target.value,10)
            resultadoSelect.setAttribute('value',selectElement.options[selectElement.selectedIndex].text)
            actualizarCarrito()

        })
    }else{
        document.getElementById('destinoProvincia').remove()
        document.getElementById('seleccionDestino').remove()
        document.getElementById('montoDestino$').remove()
        montoDestino = 0
    }
};


const ejecutarCompra = () =>{
    console.log("El carrito tiene", carrito.length, "elementos")
    carrito = []
    console.log("elimine el carrito madafucer")
    actualizarCarrito()
}
