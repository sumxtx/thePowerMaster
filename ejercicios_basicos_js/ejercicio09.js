/*Ejercicio 9

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.
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

/*
function sumNumbers1(numberList)
{
  // Elegansia la de Francia
  return (eval(numberList.join("+")));
}

function sumNumbers2(numbersList){
  for (var i = 0, sum = 0; i < numbersList.length; sum += numbersList[i], i++);
  return sum;
}

function sumNumbers3(nList)
{
  return (nList.reduce((a,b) => a + b, 0));
}
console.log(sumNumbers1(numbers));
console.log(sumNumbers1(numbers));

console.log(sumNumbers2(numbers2));
console.log(sumNumbers2(numbers2));

console.log(sumNumbers3(numbers2));
console.log(sumNumbers3(numbers2));
*/


