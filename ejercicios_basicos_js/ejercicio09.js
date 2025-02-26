/*Ejercicio 9

Calcular una suma puede ser tan simple como
iterar sobre un array y sumar cada uno de los elementos.
Completa la función denominada sumNumbers 
que toma un array de números como argumento 
y devuelve la suma de todos los números del array.
Puedes usar este array para probar tu función: */

const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [3,3,3,3];

function sumNumbers(numberList) {
  // Completar código
  let ret = 0;
  for(n of numberList) { ret += n; }
  return(ret);
}

console.log(sumNumbers(numbers));
console.log(sumNumbers(numbers2));
