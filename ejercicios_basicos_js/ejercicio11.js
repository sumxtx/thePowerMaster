/* Ejercicio 11

Calcular promedio mezclado: 
Crea una función que reciba por parámetro un array y 
cuando es un valor number lo sume y 
de lo contrario cuente la longitud del string y lo sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
const tester = [1,1,1,'45',1,'6'];

function averageWord(list) {
  // Completar
  let sum = 0;
  let items = list.length;
  for(let ele of list)
  {
    if(typeof ele == "string") { sum += ele.length; continue; }
    sum += ele;
  }
  return(sum / items);
}

console.log(averageWord(mixedElements))
console.log(averageWord(tester));
