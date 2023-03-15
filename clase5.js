//Funciones
/*
// Declaracion de la funcion
function saludar (){
    console.log ("Hola mundo");
}

//Llamado de la funcion
saludar();

//Ejemplos funciones
function solicitarNombre(){
    let nombreIngresado = prompt("Ingrese el nombre");
    alert (`Hola ${nombreIngresado} `);
}
/*solicitarNombre();
solicitarNombre();
solicitarNombre(); 

// Usando ciclo para evitar llamados reiterados
for (i = 0; i < 3; i++){
    solicitarNombre();
}

//Parametros literales
function conParametros (parametro1, parametro2){
    alert (`${parametro1} ${parametro2}`);
}

conParametros("Pablo", "Dominguez");

function solicitarNom (mensaje, nombre){
    alert (`${mensaje} ${nombre}`);
}
solicitarNom("Buenos dias", "Pablo");

//Parametros con variables declaradas previamente
let nombre = "Pablo";
let apellido = "Dominguez";

function nombreCompleto (parametro1 , parametro2){
    console.log (parametro1, parametro2);
}
nombreCompleto (nombre, apellido);

function sumar (num1, num2){
    alert ("El resultado de la suma es: " +  (num1 + num2) )
}
sumar (8, 5);

let resultado = 0;
function suma2 (num1, num2){
    resultado = num1 + num2;
}

function mostrar (mensaje){
    console.log (mensaje);
}
suma2 (8,7);
mostrar (resultado);

//Return
function sumar3 (num1, num2){
    return (num1 + num2);
}
let res = sumar3 (8,9);
// Se guarda el valor del resultado en una variable para poder reutilizar ese valor en otra parte del programa

// Calculadora con funcion
function calculadora (num1, num2, operador){
    switch (operador){
        case "+" : 
        return num1 + num2;
        case "-" : 
        return num1 - num2;
        case "*" : 
        return num1 * num2;
        case "/":
            if (num2 === 0){
                console.log("No es posible esta operacion");
            } else{
        return num1 / num2 };   
        case "**" :
        return num1 ** num2;
        default : 
        return ("Operador invalido");
}

} 
console. log(calculadora (8, 2, "+"));

// Scope o ambito de la variable
// Variable global: Resultado2 es una variable global y esta presente a lo largo de todo nuestro programa
let resultado2 = 0;
function restar (num1, num2){
    resultado2 = num1 + num2;
}
restar (8, 7)

// Variable local. Existe solo dentro del cuerpo de una estructura, ya sea condicionales ciclos oen funciones. La variable res, no existe fuera de la funcion
function dividir (primerNumero, segundoNumero) {
    let res = 0;
    res = primerNumero + segundoNumero;
}
dividir (8,4);

// Funciones anonimas
const suma5  = function (a, b) { return a + b }
const resta2 = function (a, b) { return a - b }
console.log(suma5(15,20))
console.log(resta2(15,5))

//Funciones flecha
const suma6  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta3 = (a, b) =>  a - b 
console.log(suma6(15,20))
console.log(resta3(20,5)) 
*/
//Ejemplo mas complejo
const suma7  = (a,b) => a + b;
const resta4 = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21;
let precioProducto  = 500; 
let descuento = 50;  
//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta4(suma7(precioProducto, iva(precioProducto)), descuento ); 
console.log(nuevoPrecio);

// Ejercicio: Sumar todos los argumentos
// Hoisting: primero llamamos a la funcion y despues la definimos
// Usando arguments
let resultado3 = sumarTodo( 5, 4, 13, 10, 9);
function sumarTodo (){
    let suma8 = 0;
    for (i = 0; i < arguments.length; i++){
        suma8 += arguments[i];
    }
    return suma8;
}
console.log(resultado3);

// Funcion login

function validacion (mensaje){
    let datos = prompt (mensaje);
    return datos;
}
let usuario = validacion("Ingrese el nombre de usuario");
let password = validacion("Ingrese la contraseña");

console.log (usuario);
console.log (password);

function validar (usuario, password){
    if (usuario === "" || password === ""){
        console.log ("Ingresar usuario o contraseña")
    }else {
        console.log ("Bienvenido " + usuario);
    }
}
validar (usuario, password);