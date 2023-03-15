// Estructura if
let haceFrio = true
if (haceFrio){
    console.log("Me pongo el buzo");
}

// If usando operadores de comparacion
haceFrio = "Si";
if (haceFrio == "Si"){
    console.log ("Me pongo el buzo");
}

// If usando operadores relacionales
let nota = 6;
if (nota < 6){
    console.log("Desaprobado");
}
// Estructura if else, usando operadores relacionales

if (nota >= 6){
    console.log ("Aprobado");
} else {
    console.log ("Desaprobado");
}

let nombreUsuario = prompt("Ingrese tu nombre");
let contraseña = prompt ("Ingrese la contraseña");

/*if (nombreUsuario == ""){
    console.log ("No ingresaste tu nombre de usuario");
}else {
    console.log(`"Bienvenido/a" ${nombreUsuario}`)
} */

// Estructura if else usando operadores logicos

let color = "rojo";
if (color !== "azul"){
    console.log ("Texto de prueba");
} else {
    console.log ("Color rojo")
}

/*if (nombreUsuario !== ""){
    console.log (`"Bienvenido" ${nombreUsuario}`);
} else{
    console.log ("No ingresaste el nombre de usuario")
} */

//Operador And &&
if (nombreUsuario !== "" && contraseña !== ""){
    console.log (`Bienvenido ${nombreUsuario} `);
}
else{
    console.log ("No ingresaste tu nombre de usuario o contraseña");
}

// Operador Or ||
let validacion = nombreUsuario == "Pablo" || nombreUsuario == "PABLO" || nombreUsuario == "pablo"
if (validacion){
    console.log ("Bienvenido Pablo");
} else {
    console.log ("Tu no eres Pablo")
}

// Estructura if ... else if... else

nota = 9;
if (nota >= 7){
    console.log ("Promocionado");
} else if (nota == 6) {
    console.log ("Aprobado");
} else {
    console.log ("Desaprobado");
}

let mes = 4;


if (mes == 1 || mes == 2 || mes == 12){
    console.log("La estacion es verano");
} else if (mes >= 3 && mes <= 5){
    console.log ("La estacion es otoño");
} else if (mes >= 6 && mes <= 8){
    console.log ("La estacion es invierno");
} else if (mes >= 9 && mes <= 11){
    console.log ("La estacion es primavera");
} else {
    console.log ("Estacion incorrecta")
}

let hora = parseInt(prompt("Ingrese la hora del dia"));
if (hora >= 6 && hora <= 11){
    console.log ("Buenos dias");
} else if (hora >= 12 && hora <= 18){
    console.log ("Buenas tardes");
}else if (hora >= 19 && hora <=24){
    console.log ("Buenas noches");
}else if (hora > 0 && hora < 6){
    console.log ("  Durmiendo");
} else {
    console.log ("Hora incorrecta");
}

let edad = 18;
if (edad === 18){
    console.log("Puedes votar. Sera tu primera votacion");
} else if (edad > 18){
    console.log ("Puedes votar de nuevo");
} else{
    console.log ("Aun no puedes votar");
}

// CIclo For
for(i = 0; i < 10; i++){
    console.log ("Esto es un ciclo for");
}

let ingreso = parseInt(prompt("Ingresa un numero"));

/*for (i = 0; i < 5; i++){
    console.log("El resultado de: " + ingreso + " X "+ i + " es igual a: " + ingreso * i);
} */

let limite = parseInt(prompt("¿Cuantas veces deseas sumar?"));
for (i = 0; i <= limite; i++){
    console.log ("El resultado de: " + ingreso + "+" + i + " es igual a: " + parseInt(ingreso + i));
}

//Bucle while
let entrada = prompt("Ingrese un dato");

while (entrada != "salir"){
    console.log("El usuario ingreso " + entrada);
    entrada = prompt("Ingrese un dato");
}

//Bucle Do While
let contador = 0;
do {
    console.log(contador);
    contador++;
}while(contador <= 5) 

// Estructura Switch
let num = prompt("Ingrese un numero");
switch (num){
    case "1": alert("Ingresaste el: " + num);
        break;
    case "2": alert("Ingresaste el: " + num);
        break;
    case "3": alert("Ingresaste el: " + num);
        break;
    case "4": alert("Ingresaste el: " + num);
        break;
    default: alert("Valor no valido")
}
let mesEstacion = parseInt(prompt("Ingrese un numero"));
switch (mesEstacion){
    case 1: case 2: case 12: alert ("Verano");
    break;
    case 3: case 4: case 5: alert ("Otoño");
    break;
    case 6: case 7: case 8: alert ("Invierno");
    break;
    case 9: case 10: case 11: alert ("Primavera");
    break;
    default : alert ("Numero invalido");
    
}

//Break 
for (i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log (i);
        break;
    }
}
//Termina la ejecucion del ciclo for cuando encuentra el primer numero par
// Continue
for (i = 0; i <= 10; i++){
    if (i % 2 !== 0){
        continue;
    } else{
        console.log (i);
    }
}
// Con continue se ejecute la siguiente iteraccion del ciclo for. En este caso ignora los impares e imprime los pares

