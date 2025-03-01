/* Ejercicio 10

Calcular un promedio es una tarea extremadamente común,
así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
const numbers2 = [1,1,1,1,1,1,1,1];
function average(numberList) {
  // Completar
  for(var i = 0, sum = 0; i < numberList.length; sum += numberList[i++]);
  return(sum / i);
}
console.log(average(numbers));
console.log(average(numbers2));
