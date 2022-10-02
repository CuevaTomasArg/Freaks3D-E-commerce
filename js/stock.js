document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})



// //Todo esto es para leer el json que tengo de stock
// document.addEventListener('DOMContentLoaded',()=>{
//     fetchData()
// } )

// //let stockProductos = []
// let stockPresentacion = []
// //let stockPersonalizables = []
// //let stockFilamento = []

// const fetchData = async() =>{
//     try{
//         //const pro = await fetch("../json/stock.json")
//         const pre = await fetch("../json/stockIndex.json")
//         //const per = await fetch("../json/stockP.json")
//         //const fil = await fetch("../json/stockF.json")
        
//         //stockProductos = await pro.json()
//         stockPresentacion = await pre.json()
//         //stockPersonalizables = await per.json()
//         //stockFilamento = await fil.json()
//         //console.log(stockProductos)
//         console.log(stockPresentacion)
//         //console.log(stockPersonalizables)
//         //console.log(stockFilamento)
//     } catch(error){
//         console.log(error)
//     }
// }



//Funcion para ordenar los arrays para poder agregarlos desordenadamente sin problema
function ordenar_por_insercion(Arr,dimL){
    var actual = null
    for (var i = 1;i<dimL ; i++){
        actual = Arr[i]
        for(var j = i-1; j>0 & Arr[j].numTipo > actual.numTipo;){
            Arr[j+1] = Arr[j]
            j --
        }
        Arr[j+1] = actual
    }
}


let stockProductos = [
    {id:3,nombre:"Mate Copa Del Mundo",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de la copa del mundo",precio:2400,personaje:"Copa del mundo",img:"../multimedia/fotos/masVendidos/MateCopaDelMundo.jpg"},
    {id:4,nombre:"Dragob Ball Z",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate con el simbolo de la escuela de goku",precio:1200,personaje:"Mate dragon ball Z",img:"../multimedia/fotos/productos/MateDragonBall.jpg"},
    {id:5,nombre:"Elsa",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de Elsa Frozen",precio:1600,personaje:"Elsa",img:"../multimedia/fotos/productos/mateEslsa.jpg"},
    {id:6,nombre:"Mate Spiderman",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate cabeza de spiderman",precio:1600,personaje:"Spiderman",img:"../multimedia/fotos/productos/spiderman.jpg"},
    {id:7,nombre:"Stich Cabeza",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de la cabeza de stich",precio:1200,personaje:"stich",img:"../multimedia/fotos/productos/MateSticht.jpg"},
    {id:8,nombre:"Baby Yoda",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate cabeza de Baby Yoda",precio:1500,personaje:"Baby Yoda",img:"../multimedia/fotos/productos/mateBabyYoda.jpg"},
    {id:10,nombre:"Llaveros Buda",tipo:"Figura",numTipo:3,cantidad:1,desc:"Llaveros de buda impresos en 3D",precio:1100,personaje:"Buda",img:"../multimedia/fotos/productos/BudasChiquitos.jpg"},
    {id:11,nombre:"Llaveros Buda Adulto",tipo:"Figura",numTipo:3,cantidad:1,desc:"Llavero de buda impreso en 3D",precio:2400,personaje:"Bda",img:"../multimedia/fotos/productos/Budas.jpg"},
    {id:12,nombre:"Steve",tipo:"Figura",numTipo:2,cantidad:1,desc:"Minecraft Steve figura impresa en 3D",precio:1700,personaje:"Steve",img:"../multimedia/fotos/productos/FiguraMinecraft.jpg"},
    {id:13,nombre:"Soporte Joystick mano",tipo:"Figura",numTipo:2,cantidad:1,desc:"Soporte para celular o joystick en forma de mano impresa en 3D",precio:1200,personaje:"Mano ",img:"../multimedia/fotos/productos/soporte-joystick-mano.jpg"},
    {id:9,nombre:"Camiones",tipo:"Figura",numTipo:2,cantidad:1,desc:"Camiones dibujito",precio:1000,personaje:"Impresion en 3D de personaje infantil",img:"../multimedia/fotos/productos/Camiones.jpg"},
    {id:2,nombre:"Mate Pug",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de cabeza de un perro",precio:1100,personaje:"Perro de raza Pug",img:"../multimedia/fotos/productos/MatePugPerro.jpg"},
    {id:14,nombre:"Bob Esponja",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Bob esponja impresa en 3D",precio:1200,personaje:"Bob Esponja",img:"../multimedia/fotos/productos/set_Matero_bob_esponja.jpg"},
    {id:15,nombre:"Boca Junior",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Boca Junior impresa en 3D",precio:1200,personaje:"Club Boca Junior",img:"../multimedia/fotos/productos/SetMateroBocaJunior.jpg"},
    {id:16,nombre:"Fernet",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Fernet impresa en 3D",precio:2950,personaje:"Fernet",img:"../multimedia/fotos/productos/SetMateroFernet.jpg"},
    {id:17,nombre:"Groot",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Groot impresa en 3D",precio:2600,personaje:"Groot",img:"../multimedia/fotos/productos/SetMateroGroot.jpg"},
    {id:18,nombre:"Harry Potter",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Harry Potter impresa en 3D",precio:1200,personaje:"Harry Potter",img:"../multimedia/fotos/productos/SetMateroHarryPotter.jpg"},
    {id:19,nombre:"Independiente",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Independiente impresa en 3D",precio:1200,personaje:"Independiente",img:"../multimedia/fotos/productos/SetMateroIndependiente.jpg"},
    {id:20,nombre:"Independiente",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Independiente impresa en 3D",precio:1200,personaje:"Independiente",img:"../multimedia/fotos/productos/SetMateroIndependiente.jpg"},
    {id:21,nombre:"La bella y la bestia",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero La bella y la bestia impresa en 3D",precio:3300,personaje:"La bella y la bestia",img:"../multimedia/fotos/productos/SetMateroLaBellaYLaBestia.jpg"},
    {id:22,nombre:"River Plate",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero River Plate impresa en 3D",precio:1200,personaje:"River Plate",img:"../multimedia/fotos/productos/SeTMateroRiver.jpg"},
    {id:23,nombre:"Homero Simpson",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Porta esponjas Homero Simpson impresa en 3D",precio:600,personaje:"Homero Simpson",img:"../multimedia/fotos/productos/PortaEsponjasHomeroSimpson.jpg"},
    {id:24,nombre:"Bob Esponja",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Set esponjas Bob Esponja impresa en 3D",precio:2300,personaje:"Bob Esponja",img:"../multimedia/fotos/productos/set_esponjas_Bob_Esponja.jpg"},
    {id:25,nombre:"Mickey Mouse",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Set esponjas Mickey Mouse impresa en 3D",precio:2300,personaje:"Mickey Mouse",img:"../multimedia/fotos/productos/SetEsponjasMickieMouse.jpg"},
    {id:26,nombre:"Stich rosa",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Set esponjas Stich rosa impresa en 3D",precio:2300,personaje:"Stich rosa",img:"../multimedia/fotos/productos/SetEsponjasStichRosa.jpg"},
    {id:27,nombre:"Robert Plant",tipo:"Macetas",numTipo:5,cantidad:1,desc:"Maceta Roberto Plant rosa impresa en 3D",precio:600,personaje:"Roberto Plant",img:"../multimedia/fotos/productos/RobertPlant.jpg"},
    {id:28,nombre:"Macetas griegas",tipo:"Macetas",numTipo:5,cantidad:1,desc:"Maceta Macetas griegas rosa impresa en 3D",precio:1200,personaje:"Macetas griegas",img:"../multimedia/fotos/productos/MasetaHercules.jpg"},
    {id:29,nombre:"Taza de Elsa",tipo:"Tazas",numTipo:6,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1600,personaje:"Taza de Elsa",img:"../multimedia/fotos/productos/TazaElsa.jpg"},
    //Espacio para poner un producto con id:30
    {id:31,nombre:"Lampara Merodeador Harry Potter",tipo:"Lampara",numTipo:7,cantidad:1,desc:"Lampara de harry potter impresa en 3D",precio:3200,personaje:"Harry Potter",img:"../multimedia/fotos/productos/LunaPersonalizadaConUnGorroPrendida.jpg"},
    {id:32,nombre:"Mate Buda",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de Buda impreso en 3D",precio:1600,personaje:"Buda",img:"../multimedia/fotos/productos/Buda.png"},
    {id:3003,nombre:"Set esponjas Stich",tipo:"Esponjas",numTipo:1000,cantidad:1,desc:"Set espojas de stich",precio:6000,personaje:"Stich",img:"../multimedia/fotos/productos/SetEsponjasStich.jpg"},    
    {id:33,nombre:"Mate Frida Khalo",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de Buda impreso en 3D",precio:1600,personaje:"Buda",img:"../multimedia/fotos/productos/MateFridaKhalo.jpg"},
]
let stockPersonalizables = [
    {id:1001,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Lampara de luna impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/luna-hombres.jpg"},
    {id:1001,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/PLunaConFoto.jpg"},
    {id:1001,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/PLunaRojaConFoto.jpg"},
    {id:1001,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/PSilvaniLuna.jpg"},
    {id:1002,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLavero.jpg"},
    {id:1002,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLavero2.jpg"},
    {id:1002,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLavero3.jpg"},
    {id:1002,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLaveroBahamasRopa.jpg"},
    {id:1003,nombre:"Mate",tipo:"MatesPersonalizables",numTipo:9,cantidad:1,desc:"Mate impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PMate.jpg"},
    {id:1004,nombre:"Mate",tipo:"MatesPersonalizables",numTipo:9,cantidad:1,desc:"Mate impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/productos/MatesPerrosDogoArgentino.jpg"},
    {id:1003,nombre:"Mate",tipo:"MatesPersonalizables",numTipo:9,cantidad:1,desc:"Mate impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/productos/MatePugPerro.jpg"},

]


let stockFilamento = [
    {id:2001,nombre:"Amarillo",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Amarillo",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2002,nombre:"Gris",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Gris",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-Filamentogris.jpg"},
    {id:2003,nombre:"Naranja",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Naranja",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-naranja.jpg"},
    {id:2004,nombre:"Azul",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Azul",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-petg-azul.jpg"},
    {id:2005,nombre:"Rosa",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Rosa",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-rosa.jpg"},
    {id:2006,nombre:"Acqua",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Acqua",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Acqua.jpg"},
    {id:2007,nombre:"Amarillo",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Amarillo",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Amarillo.jpg"},
    {id:2008,nombre:"Azul",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Azul",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Azul.jpg"},
    {id:2009,nombre:"Blanco",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Blanco",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Blanco.jpg"},
    {id:2010,nombre:"Bronce",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Bronce",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Bronce.jpg"},
    {id:2011,nombre:"Caribe",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Caribe",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Caribe.jpg"},
    {id:2012,nombre:"Chocolate",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Chocolate",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Chocolate.jpg"},
    {id:2013,nombre:"Cobre",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Cobre",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Cobre.jpg"},
    {id:2014,nombre:"Dulce De Leche",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"DulceDeLeche",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/DulceDeLeche.jpg"},
    {id:2015,nombre:"Fucsia",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Fucsia",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Fucsia.jpg"},
    {id:2016,nombre:"Lavanda",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Lavanda",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Lavanda.jpg"},
    {id:2017,nombre:"Naranja Fluo",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Naranja",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/NaranjaFluo.jpg"},
    {id:2018,nombre:"Negro",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Negro",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Negro.jpg"},
    {id:2019,nombre:"Rojo",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Rojo",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Rojo.jpg"},
    {id:2020,nombre:"Rosa",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Rosa",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Rosa.jpg"},
    {id:2021,nombre:"Salmon",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Salmon",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Salmon.jpg"},
    {id:2022,nombre:"Turquesa",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Turquesa",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Turquesa.jpg"},
    {id:2023,nombre:"VerdeManzana",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"VerdeManzana",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/VerdeManzana.jpg"},
    {id:2024,nombre:"Violeta",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"Violeta",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Violeta.jpg"}
]

let stockPresentacion = [
    {id:3001,nombre:"Galletero Stich",tipo:"masVendido",numtipo:"100",desc:"Galletero impreso en 3D Stich",precio:1600,cantidad:1,img:"../multimedia/fotos/masVendidos/CarameleraStich.jpg"},
    {id:3,nombre:"Mate Copa del mundo",tipo:"masVendido",numtipo:"100",desc:"Filamento para impresora 3D",precio:1600,cantidad:1,img:"../multimedia/fotos/masVendidos/MateCopaDelMundo.jpg"},
    {id:3003,nombre:"Set esponjas Stich",tipo:"presentacion",numTipo:1000,cantidad:1,desc:"Set espojas de stich",precio:6000,personaje:"Stich",img:"../multimedia/fotos/productos/SetEsponjasStich.jpg"},
    {id:6,nombre:"Mate Spiderman",tipo:"presentacion",numTipo:1,cantidad:1,desc:"Mate cabeza de spiderman",precio:1600,personaje:"Spiderman",img:"../multimedia/fotos/productos/spiderman.jpg"},
    {id:3005,nombre:"Soporte Joystick mano",tipo:"presentacion",numTipo:2,cantidad:1,desc:"Soporte para celular o joystick en forma de mano impresa en 3D",precio:1200,personaje:"Mano ",img:"../multimedia/fotos/productos/soporte-joystick-mano.jpg"},
    {id:3006,nombre:"Roberto Plant",tipo:"presentacion",numTipo:5,cantidad:1,desc:"Maceta Roberto Plant rosa impresa en 3D",precio:1200,personaje:"Roberto Plant",img:"../multimedia/fotos/productos/RobertPlant.jpg"},
    {id:3007,nombre:"Homero Simpson",tipo:"presentacion",numTipo:4,cantidad:1,desc:"Porta esponjas Homero Simpson impresa en 3D",precio:1200,personaje:"Homero Simpson",img:"../multimedia/fotos/productos/PortaEsponjasHomeroSimpson.jpg"},
    {id:3008,nombre:"Lampara Harry Potter",tipo:"presentacion",numTipo:7,cantidad:1,desc:"Lampara luna impresa en 3D",precio:1200,personaje:"Harrry Potter",img:"../multimedia/fotos/productos/LunaConGorrito.jpg"},
    {id:2009,nombre:"Blanco",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Blanco",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Blanco.jpg"},
    {id:2010,nombre:"Bronce",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Bronce",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Bronce.jpg"},
    {id:2011,nombre:"Caribe",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Caribe",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Caribe.jpg"},
    {id:2012,nombre:"Chocolate",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Chocolate",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/Chocolate.jpg"},
    {id:2002,nombre:"Gris",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Gris",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-Filamentogris.jpg"},
    {id:2003,nombre:"Naranja",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Naranja",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-naranja.jpg"},
    {id:2004,nombre:"Azul",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Azul",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-petg-azul.jpg"},
    {id:2005,nombre:"Rosa",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"Rosa",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3-rosa.jpg"}
]
let numCategoria = [{Mate:1},{Figura:2},{SetMatero:3},{Esponjas:4},{Macetas:5},{Tazas:6},{Lampara:7},{Llavero:8},{MatePers:9}]

let destino = [
    {provincia:"Seleccionar Provincia",  monto:0},{provincia:"BuenosAires",  monto:500},{provincia:"CABA",  monto:700},{provincia:"Catamarca",  monto:700},{provincia:"Chaco",  monto:700},{provincia:"Chubut",  monto:700},
    {provincia:"Córdoba",  monto:700},{provincia:"Corrientes",  monto:700},{provincia: "Entre Ríos",monto:700  },{provincia:"Formoza",  monto:700},{provincia:"Jujuy",  monto:700},{provincia:"LaPampa",  monto:700},{provincia:"LaRioja",  monto:700},
    {provincia:"Mendoza",  monto:700},{provincia:"Misiones",  monto:700},{provincia:"Neuquen",  monto:700},{provincia:"RíoNegro",  monto:700},{provincia:"Salta",  monto:700},{provincia:"SanJuan",  monto:700},{provincia:"SanLuis",  monto:700},{provincia:"SantaCruz",  monto:700},
    {provincia:"SantaFe",  monto:700},{provincia:"SantiagodelEstero",  monto:700},{provincia:"TierradelFuego",  monto:700},{provincia:"Tucumán",  monto:700}
]

//Ordenos los arrays
ordenar_por_insercion(stockProductos,stockProductos.length)
ordenar_por_insercion(stockFilamento,stockFilamento.length)
ordenar_por_insercion(stockPersonalizables,stockPersonalizables.length)


//Zona de declaracion de contenedores, contiene cada seccion de productos
//Contenedores
const contenedorStock = document.getElementById('stock')
//contenedore del carrito
const contenedorCarrito = document.getElementById("carrito")
const contenedorCardsComrpa = document.getElementById("cartaPreFormularioFinal")
//Contador del carrito
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const precioTotalForm = document.getElementById('precioTotalForm')
const montoDelDestino = document.getElementById('montoDelDestino')
const resultadoSelect = document.getElementById('resultadoSelect')


//Se inicializa variable para saber si hay productos en el carrito
var HayProducto = null
var existeDestino = true
var montoDestino = 0
var compraTotal = []


//inicializada en null, ya que en false, va a eliminar lo que se creo luego de ser true dentro de una funcion
//----CONTENEDOR GLOBAL DE PRODUCTOS----------
const contenedorProductos = document.getElementById('stock')
