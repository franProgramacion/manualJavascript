// Calculadora

/*let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let operador = prompt("Ingrese '+' para la suma, '-' para la resta, '*' para la multiplicacion, '/' para la division o '**' para la potencia");

switch (operador){
    case "+" : let resultadoSuma = num1 + num2
    alert(`${num1} + ${num2} es igual a: ${resultadoSuma}`  );
    break;
    case "-" : let resultadoResta = num1 - num2
    alert(`${num1} - ${num2} es igual a: ${resultadoResta}`  );
    break;
    case "*" : let resultadoMult = num1 * num2
    alert(`${num1} * ${num2} es igual a: ${resultadoMult}`  );
    break;
    case "/" : let resultadoDiv = num1 / num2
    alert(`${num1} / ${num2} es igual a: ${resultadoDiv}`  );
    break;
    case "**" : let resultadoPot = num1 ** num2
    alert(`${num1} ** ${num2} es igual a: ${resultadoPot}`  );
    break;
    default : alert("Operacion invalida");
} */

// Numero par o impar
/*let numero = parseInt(prompt("Ingrese un numero"));
let resultado = numero % 2;

if (resultado === 0){
    alert ("Numero par");
} else {
    alert ("Numero impar");
} */

//Intereses banco 
/*let dinero = parseInt(prompt("Ingrese el dinero a depositar"));
let dias = parseInt(prompt("Ingrese la cantidad de dias depositados"));
let intereses;
let montoConInteres;
let tasaDeInteres
if (dias >= 150){
    tasaDeInteres = 0.45;
    intereses = dinero * tasaDeInteres;
    montoConInteres = dinero + intereses; 
}else{
    tasaDeInteres = 0.30;
    intereses = dinero * tasaDeInteres;
    montoConInteres = dinero + intereses;
}
console.log (`Monto depositado: ${dinero}`);
console.log (`Monto de interes: ${intereses}`);
console.log (`Cantidad de dias: ${dias}`);
console.log (`Monto total con intereses: ${montoConInteres}`);
console.log (`Tasa de interes: ${tasaDeInteres}`); */

//Angulo
/*let angulo = parseInt(prompt("Ingrese un angulo en grados"));
if (angulo < 90){
    alert ("Angulo agudo");
} else if (angulo === 90){
    alert ("Angulo recto");
} else {
    alert ("Angulo obtuso");
}*/

// Notas alumno
/*let nota1 = parseInt(prompt("Ingrese la nota de la evaluacion 1"));
let nota2 = parseInt(prompt("Ingrese la nota de la evaluacion 2"));
let nota3 = parseInt(prompt("Ingrese la nota de la evaluacion 3"));
let integral = parseInt (prompt("Ingrese la nota del integral en caso de haber desaprobado una materia"));
let aprobado1 = nota1 < 6 && nota2 >=6 && nota3 >=6 && integral >= 7
console.log (aprobado1);
let aprobado2 = nota2 < 6 && nota1 >=6 && nota3 >=6 && integral >= 7
console.log (aprobado2);
let aprobado3 = nota3 < 6 && nota2 >=6 && nota1 >=6 && integral >= 7
console.log (aprobado3);

if (nota1 >= 6 && nota2 >= 6 && nota3 >= 6){
    alert ("El alumno aprobo");
} 
 else if (aprobado1 || aprobado2 || aprobado3){
    alert ("El alumno regularizo");
} else{
    alert ("El alumno quedo libre"); 
} */

// Cuadrante angulo
/*let cuadrante = prompt("Ingrese el cuadrante  I, II, III o IV para saber a que angulos pertenecen");


switch (cuadrante.toUpperCase()){
    case "I": alert("Angulo entre 0 y 90 grados");
    break;
    case "II": alert("Angulo entre 90 y 180 grados");
    break;
    case "III": alert("Angulo entre 180 y 270 grados");
    break;
    case "IV": alert ("Angulo entre 270 y 360 grados");
    break;
    default: alert ("caracter no valido. Por favor ingrese el caracter nuevamente");
    break;

} */

// Ejercicio como calcular el promedio de un curso
/*let estudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes del curso"));
let suma = 0;
let promedio;
for (i = 1; i <= estudiantes; i++){
    suma += parseInt(prompt("Ingrese la nota del estudiante"));

}

alert (promedio = suma / estudiantes); */

// Codigo pendrive
/*let codigo = parseInt(prompt("Ingrese el codigo para mostrar el almacenamiento de un pendrive"));


switch (codigo){
    case 1: alert("Capacidad de 2 GB");
    break;
    case 2: alert("Capacidad de 4 GB");
    break;
    case 3: alert("Capacidad de 16 GB");
    break;
    case 4: alert ("Capacidad de 32 GB");
    break;
    default: alert ("Numero no valido");
    break;

} 
*/
//Numeros pares hasta 50
/*for (i = 0; i <=50; i++){
    if (i % 2 == 1){
        continue;
    }else{
        console.log (i);
    }
}
// Otra forma mas sencilla de resolverlo
for (i = 0; i <= 50; i+=2){
    console.log(i);
}
*/
// Tabla multiplicar
/*let multiplos = parseInt(prompt("Ingrese un numero entero positivo"))

for (i = 0; i <= 10; i++){
    console.log(multiplos * i);
}
*/
//serie numerica
/*for (i = 12; i <= 32; i++){
    console.log ( (i - 1) * 3 + 3);
}*/

// Invertir los digitos de un numero entero positivo. Por ejemplo, si el numero ingresado es 8735, se debe mostrar el numero 5378

//Producto de dos numeros mediante sumas sucesivas
/*let number1 = parseInt(prompt("Ingrese un numero"));
let number2 = parseInt(prompt("Ingrese otro numero"));
let result = 0;
for (i = 1; i <= number2; i++ ){
    result = result + number1;
    
}
console.log (result); */
// interes cuenta bancaria. Primera forma de hacer donde los interes se apliccan en cada año siempre a la cifra de 10000
/*let dineroDispo = 10000;
let interesAnual = 0.16;
let cantConInteres = 0;


for (i = 1; i<=5; i++){
    cantConInteres = cantConInteres + (dineroDispo * interesAnual) ;
    console.log(cantConInteres);
    
}
dineroDispo += cantConInteres;
console.log (dineroDispo);

// Forma de hacer 2
dineroDispo = 10000;
interesAnual = 0.16;

for (i = 1; i<=5; i++){

    dineroDispo = dineroDispo + (dineroDispo * interesAnual) ;
}
console.log (dineroDispo); //21003 */
/*
let dineroInicial = parseInt(prompt("Ingrese la cantidad de dinero depositada"));
let tasaInteres = parseInt(prompt("Ingrese la tasa de interes anual"));
let anio = parseInt(prompt("Ingrese la cantidad de años en que esta depositado el dinero"));
let dineroFinal = 0;

for ( i = 1; i <= anio; i++){
    dineroInicial = dineroInicial + dineroInicial * (tasaInteres / 100);
    console.log  (tasaInteres);
    
}
    console.log(dineroInicial);
*/

// Trabajo hombres y mujeres
// Posible solucion, guardar los datos en un arreglo y luego recorrerlo para extraer los datos. Realizados todos los ejercicios menos 20.c al cual lo modifique. Hay que solucionarlo mediante arreglos
/*let totalEmpleados = parseInt(prompt("Ingrese el numero total de empleados"));

let dni;
let tipoSexo;
let sumaSueldo = 0;
let cantMujeres = 0;
let cantVarones = 0;
let promedio = 0;
let sueldoTotal;
let mayorSueldoHombre = -999999;
let mayorSueldoMujer = -999999;
let sueldoMujeres = 0;
let sumaSueldoMujeres =0;
let i = 1;
while (i <= totalEmpleados){
    tipoSexo = prompt("Ingrese el sexo");
    if (tipoSexo == "m" || tipoSexo == "M"){
        dni = parseInt(prompt("Ingrese el DNI del empleado"));
        let diasTrabajados = (prompt("Ingrese la cantidad de dias trabajados"));
        sueldoTotal = diasTrabajados * 300;
        sumaSueldo += sueldoTotal
        cantVarones += 1;
        promedio = sumaSueldo / cantVarones;
        console.log(sueldoTotal);
        if (sueldoTotal > mayorSueldoHombre){
            mayorSueldoHombre = sueldoTotal
            console.log (mayorSueldoHombre)
        }
    }
    else if ( tipoSexo =="f" || tipoSexo == "M" ){
        diasTrabajados = parseInt(prompt("Ingrese la cantidad de dias trabajados"));
        if (diasTrabajados < 20){
            
            dni = parseInt(prompt("Ingrese el DNI del empleado"));
            cantMujeres += 1;
            sueldoMujeres = diasTrabajados * 300;
            sumaSueldoMujeres += sueldoMujeres;
            console.log (sueldoTotal);
            if (sueldoMujeres > mayorSueldoMujer){
                mayorSueldoMujer = sueldoMujeres;
                console.log(mayorSueldoMujer);
            }
        }
        else {
            i+=1;
        }
        
        
    }else{
        console.log ("Caracter no valido")
    }
    i += 1;
    
    
} 

console.log (`La cantidad de mujeres es de: ${cantMujeres}`)
console.log (promedio);
console.log (`El mayor sueldo de los hombres es de: ${mayorSueldoHombre} y el mayor sueldo de las mujeres es de ${mayorSueldoMujer}`);
console.log (`El gasto total del sueldo de los hombres es de: ${sumaSueldo}`);
console.log (`El gasto total del sueldo de las mujeres es de: ${sumaSueldoMujeres}`);
*/

// Impuestos
let sumaImpuestos = 0;
let impuestoAPagar = 0;
let j = 1;
let cola = parseInt(prompt("¿Cuantas personas hay en la cola?"));
for (i = 1; i <= cola; i++){
    let impuestos = parseInt(prompt("¿Cuantas boletas de impuesto tiene?"));
        while (j <= impuestos){
            impuestoAPagar = parseInt(prompt("¿Cuanto es el monto del impuesto"));
            sumaImpuestos += impuestoAPagar;
            j += 1;
        }
        console.log(`El total a pagar es de: ${sumaImpuestos}`);
        impuestoAPagar = 0;
        sumaImpuestos = 0;
        j = 1;
            
        }
        

//Banco
