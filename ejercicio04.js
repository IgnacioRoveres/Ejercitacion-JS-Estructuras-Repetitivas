// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000

let numero = 1

do {
    console.log(`Listado hasta el 999: ${numero}`);
    numero++;
} while (numero <= 999);

let numeroPar = 2
do {
    console.log (`Listado de numeros pares: ${numeroPar}`);
    numeroPar +=2;    
} while (numeroPar <= 1000);