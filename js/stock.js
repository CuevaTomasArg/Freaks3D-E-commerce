
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
    {id:4,nombre:"Dragob Ball Z",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate con el simbolo de la escuela de goku",precio:0000,personaje:"Mate dragon ball Z",img:"../multimedia/fotos/productos/MateDragonBall.jpg"},
    {id:5,nombre:"Elsa",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de Elsa Frozen",precio:0000,personaje:"Elsa",img:"../multimedia/fotos/productos/mateEslsa.jpg"},
    {id:6,nombre:"Spiderman",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate cabeza de spiderman",precio:0000,personaje:"Spiderman",img:"../multimedia/fotos/productos/spiderman.jpg"},
    {id:7,nombre:"Stich Cabeza",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de la cabeza de stich",precio:0000,personaje:"stich",img:"../multimedia/fotos/productos/MateSticht.jpg"},
    {id:8,nombre:"Baby Yoda",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate cabeza de Baby Yoda",precio:0000,personaje:"Baby Yoda",img:"../multimedia/fotos/productos/mateBabyYoda.jpg"},
    {id:10,nombre:"Llaveros Buda",tipo:"Figura",numTipo:3,cantidad:1,desc:"Llaveros de buda impresos en 3D",precio:1100,personaje:"Buda",img:"../multimedia/fotos/productos/BudasChiquitos.jpg"},
    {id:11,nombre:"Llaveros Buda Adulto",tipo:"Figura",numTipo:3,cantidad:1,desc:"Llavero de buda impreso en 3D",precio:2400,personaje:"Bda",img:"../multimedia/fotos/productos/Budas.jpg"},
    {id:12,nombre:"Steve",tipo:"Figura",numTipo:2,cantidad:1,desc:"Minecraft Steve figura impresa en 3D",precio:2400,personaje:"Steve",img:"../multimedia/fotos/productos/FiguraMinecraft.jpg"},
    {id:13,nombre:"Soporte Joystick mano",tipo:"Figura",numTipo:2,cantidad:1,desc:"Soporte para celular o joystick en forma de mano impresa en 3D",precio:1200,personaje:"Mano ",img:"../multimedia/fotos/productos/soporte-joystick-mano.jpg"},
    {id:9,nombre:"Camiones",tipo:"Figura",numTipo:2,cantidad:1,desc:"Camiones dibujito",precio:1000,personaje:"Impresion en 3D de personaje infantil",img:"../multimedia/fotos/productos/Camiones.jpg"},
    {id:1,nombre:"Mate Buda",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de buda",precio:1000,personaje:"Mate cabeza de Buda",img:"../multimedia/fotos/productos/Buda.png"},
    {id:2,nombre:"Mate Pug",tipo:"Mate",numTipo:1,cantidad:1,desc:"Mate de cabeza de un perro",precio:1100,personaje:"Perro de raza Pug",img:"../multimedia/fotos/productos/MatePugPerro.jpg"},
    {id:14,nombre:"Bob Esponja",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Bob esponja impresa en 3D",precio:1200,personaje:"Bob Esponja",img:"../multimedia/fotos/productos/set_Matero_bob_esponja.jpg"},
    {id:15,nombre:"Boca Junior",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Boca Junior impresa en 3D",precio:1200,personaje:"Club Boca Junior",img:"../multimedia/fotos/productos/SetMateroBocaJunior.jpg"},
    {id:16,nombre:"Fernet",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Fernet impresa en 3D",precio:1200,personaje:"Fernet",img:"../multimedia/fotos/productos/SetMateroFernet.jpg"},
    {id:17,nombre:"Groot",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Groot impresa en 3D",precio:1200,personaje:"Groot",img:"../multimedia/fotos/productos/SetMateroGroot.jpg"},
    {id:18,nombre:"Harry Potter",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Harry Potter impresa en 3D",precio:1200,personaje:"Harry Potter",img:"../multimedia/fotos/productos/SetMateroHarryPotter.jpg"},
    {id:19,nombre:"Independiente",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Independiente impresa en 3D",precio:1200,personaje:"Independiente",img:"../multimedia/fotos/productos/SetMateroIndependiente.jpg"},
    {id:20,nombre:"Independiente",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero Independiente impresa en 3D",precio:1200,personaje:"Independiente",img:"../multimedia/fotos/productos/SetMateroIndependiente.jpg"},
    {id:21,nombre:"La bella y la bestia",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero La bella y la bestia impresa en 3D",precio:1200,personaje:"La bella y la bestia",img:"../multimedia/fotos/productos/SetMateroLaBellaYLaBestia.jpg"},
    {id:22,nombre:"River Plate",tipo:"SetMatero",numTipo:3,cantidad:1,desc:"Set Matero River Plate impresa en 3D",precio:1200,personaje:"River Plate",img:"../multimedia/fotos/productos/SeTMateroRiver.jpg"},
    {id:23,nombre:"Homero Simpson",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Porta esponjas Homero Simpson impresa en 3D",precio:1200,personaje:"Homero Simpson",img:"../multimedia/fotos/productos/PortaEsponjasHomeroSimpson.jpg"},
    {id:24,nombre:"Bob Esponja",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Set esponjas Bob Esponja impresa en 3D",precio:1200,personaje:"Bob Esponja",img:"../multimedia/fotos/productos/set_esponjas_Bob_Esponja.jpg"},
    {id:25,nombre:"Mickey Mouse",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Set esponjas Mickey Mouse impresa en 3D",precio:1200,personaje:"Mickey Mouse",img:"../multimedia/fotos/productos/SetEsponjasMickieMouse.jpg"},
    {id:26,nombre:"Stich rosa",tipo:"Esponjas",numTipo:4,cantidad:1,desc:"Set esponjas Stich rosa impresa en 3D",precio:1200,personaje:"Stich rosa",img:"../multimedia/fotos/productos/SetEsponjasStichRosa.jpg"},
    {id:27,nombre:"Roberto Plant",tipo:"Macetas",numTipo:5,cantidad:1,desc:"Maceta Roberto Plant rosa impresa en 3D",precio:1200,personaje:"Roberto Plant",img:"../multimedia/fotos/productos/RobertPlant.jpg"},
    {id:28,nombre:"Macetas griegas",tipo:"Macetas",numTipo:5,cantidad:1,desc:"Maceta Macetas griegas rosa impresa en 3D",precio:1200,personaje:"Macetas griegas",img:"../multimedia/fotos/productos/MasetaHercules.jpg"},
    {id:29,nombre:"Taza de Elsa",tipo:"Tazas",numTipo:6,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/productos/TazaElsa.jpg"}
]

let stockPersonalizables = [
    {id:1001,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Lampara de luna impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/luna-hombres.jpg",    },
    {id:1002,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/PLunaConFoto.jpg",    },
    {id:1003,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/PLunaRojaConFoto.jpg",    },
    {id:1004,nombre:"Lampara Luna",tipo:"LunasPersonalizables",numTipo:7,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"-----",img:"../multimedia/fotos/personalizables/PSilvaniLuna.jpg",    },
    {id:1005,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLavero.jpg",    },
    {id:1006,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLavero2.jpg",    },
    {id:1007,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLavero3.jpg",    },
    {id:1008,nombre:"Llavero",tipo:"LlaverosPersonalizables",numTipo:8,cantidad:1,desc:"Llavero impreso en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PlLaveroBahamasRopa.jpg",    },
    {id:1009,nombre:"Mate",tipo:"MatesPersonalizables",numTipo:9,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PMate.jpg",    },
    {id:1009,nombre:"Mate",tipo:"MatesPersonalizables",numTipo:9,cantidad:1,desc:"Taza de Elsa rosa impresa en 3D",precio:1200,personaje:"Taza de Elsa",img:"../multimedia/fotos/personalizables/PMate.jpg",    }
]

let stockFilamento = [
    {id:2001,nombre:"filamento marca",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"blanco",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2002,nombre:"filamento marca",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"negro",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2003,nombre:"filamento marca",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"verde",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2004,nombre:"filamento marca",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"amarillo",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2005,nombre:"filamento marca",tipo:"F3n3",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2006,nombre:"filamento marca",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2007,nombre:"filamento marca",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:2008,nombre:"filamento marca",tipo:"FGrilon3",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"}
]

let stockPresentacion = [
    {id:3001,nombre:"Galletero Stich",tipo:"masVendido",numtipo:"100",desc:"Galletero impreso en 3D Stich",precio:1600,cantidad:1,img:"../multimedia/fotos/masVendidos/CarameleraStich.jpg"},
    {id:3002,nombre:"filamento marca",tipo:"masVendido",numtipo:"100",desc:"Filamento para impresora 3D",precio:1600,cantidad:1,img:"../multimedia/fotos/masVendidos/MateCopaDelMundo.jpg"},
    {id:3003,nombre:"Set esponjas Stich",tipo:"presentacion",numTipo:1000,cantidad:1,desc:"Set espojas de stich",precio:6000,personaje:"Stich",img:"../multimedia/fotos/productos/SetEsponjasStich.jpg"},
    {id:3004,nombre:"Mate Spiderman",tipo:"presentacion",numTipo:1000,cantidad:1,desc:"Mate cabeza de spiderman",precio:0000,personaje:"Spiderman",img:"../multimedia/fotos/productos/spiderman.jpg"},
    {id:3005,nombre:"Soporte Joystick mano",tipo:"presentacion",numTipo:2,cantidad:1,desc:"Soporte para celular o joystick en forma de mano impresa en 3D",precio:1200,personaje:"Mano ",img:"../multimedia/fotos/productos/soporte-joystick-mano.jpg"},
    {id:3006,nombre:"Roberto Plant",tipo:"presentacion",numTipo:5,cantidad:1,desc:"Maceta Roberto Plant rosa impresa en 3D",precio:1200,personaje:"Roberto Plant",img:"../multimedia/fotos/productos/RobertPlant.jpg"},
    {id:3007,nombre:"Homero Simpson",tipo:"presentacion",numTipo:4,cantidad:1,desc:"Porta esponjas Homero Simpson impresa en 3D",precio:1200,personaje:"Homero Simpson",img:"../multimedia/fotos/productos/PortaEsponjasHomeroSimpson.jpg"},
    {id:3008,nombre:"Lampara Harry Potter",tipo:"presentacion",numTipo:7,cantidad:1,desc:"Lampara luna impresa en 3D",precio:1200,personaje:"Harrry Potter",img:"../multimedia/fotos/productos/LunaConGorrito.jpg"},
    {id:3009,nombre:"filamento marca",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"amarillo",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:3010,nombre:"filamento marca",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:3011,nombre:"filamento marca",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:3012,nombre:"filamento marca",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"},
    {id:3013,nombre:"filamento marca",tipo:"presentacionFilamento",numtipo:"100",desc:"Filamento para impresora 3D", color:"lila",precio:1600,cantidad:1,img:"../multimedia/fotos/filamentos/3n3Amarillo.png"}
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



//Se inicializa variable para saber si hay productos en el carrito
var HayProducto = null
var existeDestino = true
var montoDestino = 0
var compraTotal = []


//inicializada en null, ya que en false, va a eliminar lo que se creo luego de ser true dentro de una funcion
//----CONTENEDOR GLOBAL DE PRODUCTOS----------
const contenedorProductos = document.getElementById('stock')


//creo el carrito
let carrito = []
