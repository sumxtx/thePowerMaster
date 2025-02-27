/* Ejercicio 6

Crea una función llamada swap que reciba un array y 
dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los 
indices que hayamos enviado como parametro. 
Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swapArray(array, ind1, ind2)
{
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
  return array;
}


console.log(fantasticFour[1], fantasticFour[2]);
console.log(swapArray(fantasticFour, 1, 2));
