/* Ejercicio 4

1. Crea una función llamada findArrayIndex 
que reciba como parametros un array de textos y un texto y 
devuelve la posición del array cuando el valor del array 
sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

const mainCharacters = [
  "Luke",
  "Luke",
  "Luke",
  "Leia",
  "Han Solo",
  "Luke",
  "Chewbacca",
  "Rey",
  "Luke",
  "Anakin",
  "Obi-Wan",
  "Luke",
  "Luke",
];

function findArrayIndex(array, text) {
  //Tu codigo
  let foundAtIndex = [];
  for(let ele in array)
  {
    if(array[ele] == text)
    {
      foundAtIndex.push(Number(ele));
    }
  }
  console.assert((foundAtIndex.length !== 0), `${text} not found in the array`);
  return foundAtIndex;
}

/*
2. Usando la función anterior benefíciate de poder conocer el indice del array 
para crear una función llamada removeItem que, 
pasándole un array y un texto como parámetros 
(los mismos parámetros que en el anterior ejercicio), 
llame a la función anteriormente creada findArrayIndex y 
obtén el indice para posteriormente usar la función de javascript 
.splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y 
retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

function removeItems(array, iToRemove)
{
  if(iToRemove.length === 0)
  {
    console.log(`No idexes Found to remove`);
    return -1;
  }
  const toRemover = [];
  for(let ele of iToRemove)
  {
    toRemover.push(array[ele]);
  }
  let len = array.length;
  for(let i = 0; i < len; i++ )
  {
    if(toRemover.includes(array[i]))
    {
      array.splice(i, 1);
      toRemover.pop();
      i--;
    }
  }
  return array;
}

console.log(removeItems(mainCharacters, findArrayIndex(mainCharacters, "Luke" ) ))
