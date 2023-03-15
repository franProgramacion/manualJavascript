//Operadores
//Operadores aritmeticos
//Suma
let a = 3;
let b = 2;
let z = a + b;
console.log ("Resultado de la suma: " + z);

//Resta
z = a - b;
console.log ("Resultado de la resta: " + z);

//Multiplicacion
z = a* b;
console.log("Resultado de la multiplicacion: " + z);

//Division
z= a / b;
console.log ("Resultado de la division: " + z);

//Modulo
z = a % b;
console.log("Resultado del modulo: " + z);

// Exponente
z = a ** b;
console.log ("Resultado del exponente: " + z);

//Incremento
//Preincremento
z = ++a;
console.log (a);
console.log(z);

//Posincremento
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z= --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(z);
console.log(b);

//Precedencia de operadores
let num1 = 3, num2= 2, num3 = 1, num4 = 4;

z = num3 + num1 * num2 / num4;
console.log (z);

z = num1* num2 + num3 / num4;
console.log (z);

z = (num3 + num1) * num2 / num3;
console.log(z);
//¿Cual seria el resultado?

//Operador de asignacion
// igual
let dato = "sfdsf";
// Operador de asignacion compuesto: *=, +=, -=, /=, %=, **=
num1 += 3; 
console.log (num1);
num3 -= 1;
console.log(num3);
num2 *=8;
console.log(num2)

//Operadores de comparacion y relacionales
// Operador de igualdad
let x = a == b;
console.log(x)
//Operador de igualdad estricta
x = a === num3;
console.log(x);
// Operador distinto
x = a != num1;
console.log(x)
x = a !== num2;
console.log (x);
//Operador menor, menor e igual, mayor y mayor o igual
x = a <= num1;
console.log (x);
x = num2 >= num1;
console.log (x);

// Operadores logicos
//AND

// OR

// Precedencia de operadores
let n1 = 5; 
let n2 = 10;
let res = ++n1 + n2--;
console.log(n1);
console.log(n2);
console.log(res);

let result = 4 + 5 * 6 / 3;
console.log (result);

result = (4+5) * 6 / 3;
console.log (result);