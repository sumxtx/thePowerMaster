/* Ejercicio 8

Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
const tester = ['12', '123', '12', '321', '1234', '123', '4321'];
function findLongestWord(stringList) {
  // Completar código
  let iMax = 0;
  let maxLen = 0;
  for(let j = 0; j < stringList.length; j++)
  {
    let curLen = stringList[j].length;
    if(curLen > maxLen) { 
      maxLen = curLen; 
      iMax = j;
    }
    else if(curLen == maxLen) {continue;}
  }

  return(stringList[iMax]);
}
console.log(findLongestWord(avengers));
console.log(findLongestWord(tester));
