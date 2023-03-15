// Objetos literales

const persona = {
    nombre : "Pablo Dominguez",
    edad: 31,
    direccion: "solano de paz 467",
    dni: 36122074,

}

console.log(persona);

// Acceder a los objetos
// Mediante notacion de punto

console.log (persona.nombre);
console.log (persona.edad);
console.log (persona.direccion);
console.log (persona.dni);

//Mediante notacion de corchetes

console.log (persona["nombre"]);
console.log (persona["edad"]);
console.log (persona["direccion"]);
console.log (persona["dni"]);


// Definir y asignar una propiedad que no existe en el objeto original y reasignar valores al objeto original

persona.estadoCivil = true;
console.log (persona);

//Reasignar valores
persona.nombre = "carlos";
console.log (persona);

//Eliminar una propiedad del objeto 
const persona8 = {
    nombre : "Pablo Dominguez",
    edad: 31,
    direccion: "solano de paz 467",
    dni: 36122074

}
delete persona8.edad;
console.log (persona8);

// Imprimir objeto en navegador
//For in
//For (nombrePropiedad in persona) {
   // console.log (persona[nombrePropiedad]);}

// Object.values
let personaArray = Object.values (persona);
console.log (personaArray)

// JSON. stringify
let personaString = JSON.stringify (persona8) 
console.log (persona8);

// Metodo get y set
const persona9 = {
    nombre : "Pablo Dominguez",
    edad: 31,
    direccion: "solano de paz 467",
    dni: 36122074,
    idioma : "es",
    get lang (){
        this.idioma.toUpperCase(); },
    set lang (lang) {
	  this.idioma = lang.toUpperCase () },
    get nombreCompleto (){
	return this.nombre + " " + this.edad}
}


console.log (persona9.nombreCompleto) // Ya no es necesario usar los paréntesis
console.log (persona9.lang); 
persona9.lang = "en"
console.log (persona9.idioma)


// Objetos constructores
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

console.log (persona1);
console.log(persona2);

// Prototype
function People(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
}
People.prototype.tel = "665557";
const people1 = new People("Homero", 39, "Av. Siempreviva 742");
console.log(people1.tel);
const people2 = new People("Marge", 36, "Av. Siempreviva 742");
console.log(people2.tel);

// Metodos y operaciones con objetos
// Metodos personalizados

function People(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const people3 = new People("Homero", 39, "Av. Siempreviva 742");
const people4 = new People("Marge", 36, "Av. Siempreviva 742");
people3.hablar();
people4.hablar();


function Productos (nombre, precio, descripcion){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.mostrar = () => console.log (`El producto ${this.nombre} tiene el precio ${this.precio}. {this.descripcion}`)
}

const producto1 = new Productos ("Perfume", 1234, "adsfdaf dfdsagf dfsdfsdg yhtghg");
const producto2 = new Productos ("Reloj", 4321, "adsfdaf dfdsagf dfsdfsdg yhtghg");

console.log (producto1);
console.log (producto2);

// El console es un objeto ya definido internamentey tiene su propio metodo, el log, para mostrar un mensaje en pantalla

// Clase constructora
class Persona2{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona3 = new Persona2("Homero", 39, "Av. Siempreviva 742");
persona3.hablar();

console.log (persona3);

// Carrito de compra. Usar descuento como metodo

 class Carrito {
    constructor (nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = true;
    }
    descuento(){
        this.precio = this.precio - (this.precio * 0.1);
    }
    stok (){
        this.stock = false;
    }
}
const compra = new Carrito ("Perfume", 100, "dfdsfdsf dsfsadf dfssadf", "false");
const compra1 = new Carrito ("Reloj", "200", "adsafsdgsgsgf sfadf", "true")
console.log(compra);
console.log ("Precio original: " + compra.precio)
compra.descuento();
compra.stok();
console.log ("Precio con descuento: "+  compra.precio)
console.log (compra);
//console.log (compra1); 

// Otro ejemplo

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const prod1 = new Producto("arroz", "125");
const prod2 = new Producto("fideo", "50");
console.log (prod1);
prod1.sumaIva();
prod2.sumaIva();
prod1.vender();
console.log (prod1); 

// Los metodos pueden ser funciones
// Funcion constructora que tiene una funcion como metodo
// Definimos una funcion constructora
function Productos (nombre, precio, stock, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponible = disponible;
    // Metodo Vender como funcion. Le pasamos por parametro cantidad
    this.vender = (cantidad) => {
        // Le restamos la cantidad vendida al stock
        this.stock = this.stock - cantidad;
        // Si como resultado de la resta el stock es menor o igual a 0 es que no hay stock. Caso contrario multiplicamos precio por cantidad
        if (this.stock <= 0){
            console.log("No hay stock suficiente");
            // Esta linea es para que el stock no aparezca con numero negativo
            (this.stock = 0);
        } 
        else {
            console.log ("El total de la venta es de: " + this.precio * cantidad);
        }
        
    };
    // calcular stock. Imprime el stock. Si es menor que 0 se cambia el valor de disponible a false
    this.calcularStock = function() {
        if (this.stock <= 0) {
            return (this.disponible = false)
            
        }
        else {
            return this.stock;
        }
    };
    

}
const prod4 = new Productos("papas", 32, 12, true)

    prod4.calcularStock();
    // Stock original
    console.log (prod4.stock);
    // Llamamos a la funcion vender y le pasamos coo argumento 10. Esta seria la cantidad que luego comparamos para ver si hay stock
    prod4.vender(10);
    //Imprimimos el stock una vez vendidos los productos
    console.log (prod4.stock);


// Metodo como funcion en clase constructora
class Producto2 {
    constructor (nombre, precio, stock, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
    }
    vender = (cantidad) => {
        this.stock = this.stock - cantidad;
        if (this.stock <= 0){
            return "No hay stock suficiente",
            (this.stock = 0);
        } 
        else {
            return console.log ("El monto total de la venta es de: " + this.precio * cantidad);
        }
        
    };
    // calcular stock
    calcularStock() {
        if (this.stock <= 0) {
            return (this.disponible = false)
        }
        else {
            return this.stock;
        }
    };
    
}
const prod5 = new Producto2 ("desodorante", 36, 10, true);
console.log (prod5);
console.log (prod5.stock);
prod5.vender(8);
console.log (prod5.stock);

// Estos ejercicios sirven para buscar productos en una base de datos y ver si hay stock o no. Tambien para calcular las ganancias por venta

//Ejercicio. Desarrollamos un objeto llamado jugador que tenga una propiedad fuerza que inicialmente tenga el valor de 1, un metodo incrementarFuerza que nos permita incrementar la fuerza en 1 y un metodo consultarFuerza que nos muestre un mensaje con la fuerza del jugador

const juego = {
    fuerza: 1,
    incrementarFuerza: function () {
        return this.fuerza += 1;
    },
    consultarFuerza : function (){
        console.log (`La fuerza es de : ${this.fuerza}`)
    }
}
console.log (juego);
console.log (juego.fuerza);
juego.incrementarFuerza ();
console.log (juego.fuerza);
juego.consultarFuerza();

// Objeto Date
var date = new Date()
console.log(date);

var anio = date.getFullYear(); 
var mes = date.getMonth ();
var dia = date.getDate ();
mes = mes + 1;
console.log (`Hola hoy es: ${dia} del mes ${mes} del año ${anio}`)

// Objeto math
//Valor de PI
const PI = Math.Pi
console.log (PI);
//Valor maximo y minimo de una lista de numeros
console.log (Math.min(0, 132, 3, -4, 6, 666));
console.log (Math.max(0, 132, 3, -4, 6, 666));
//Redondeo
console.log (Math.round(4.534));
// Redondeo hacia arriba
console.log (Math.floor(4.8));
//Reondeo hacia abajo
console.log (Math.ceil(4.8));
//Numero aleatorio
console.log(Math.random());

// Ejercicio: crear una funcion que cuando la ejecutemos nos devuelva un numero entre 0 y un numero que le damos.
const loteria = () => {
    let sorteo = Math.random()
    console.log (sorteo);
    return resultado = Math.floor(sorteo * 100);
}
console.log(loteria ());

// Otra forma de realizar mas dinamica
let loteria2 = (numero) => {
    return Math.round(Math.random() * numero);
}
console.log(loteria2 (100));

// Ejericio: mediante un ciclo for instaciar objetos a una clase constructora
function libros (nombre, autor, descripcion, precio )  {
    this.nombre = nombre,
    this.autor = autor,
    this.descripcion = descripcion,
    this.precio = precio
}
let catalogo = [];
for (i = 0; i <= 2; i++){
    catalogo = new libros (prompt("Ingrese nombre"),prompt("Ingrese autor"),prompt("Describa el libro"), prompt("Indique el precio"));
    catalogo +=1;
}
// Ver recorrido de arreglos
console.log (catalogo);

// Objetos que contengan otros objetos
const materias = {
    fundamentosDeProgramacion : {
        tema1 : "Hardware y software",
        tema2 : "Condicionales y ciclos",
        tema3 : "Arreglos y objetos"
    },
    logica : {
        tema1: "asdasd",
        tema2: "ghjgkhj",
        tema3: "ghmglknmpf"
    },
    algebra : {
        tema1: "conjuntos numericos",
        tema2: "Logica de predicados",
        tema3: "yanose"
    }
}
console.log (materias);
console.log (materias.fundamentosDeProgramacion.tema1);
console.log (materias.logica);
console.log (materias.algebra.tema3)
delete materias.algebra.tema2;
console.log (materias.algebra);

// Metodo call. No funciona. Revisar

let Persona10 = {
	nombre: "Juan",
	apellido: "Perez",
	nombreCompleto: function ( ) {
		return this.nombre + "" + this.apellido; 
    }
}
let Persona11 = {
	nombre: "Daniel",
	apellido: "Grillo"
	}
console.log (Persona10.nombreCompleto ( ) );
console.log (Persona10.nombreCompleto.call(Persona11)) ;

// Metodo apply

let Persona13 = {
	nombre: "Juan",
	apellido: "Perez",
	nombreCompleto: function ( ) {
		return this.nombre + "" + this.apellido; 
    }
}
let Persona14 = {
	nombre: "Daniel",
	apellido: "Grillo"
	}
console.log (Persona13.nombreCompleto ( "Lic", "4356342") );
let array = ["Ing", "645467"]
console.log (Persona13.nombreCompleto.apply(Persona14, array)) ;