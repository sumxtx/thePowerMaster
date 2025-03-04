/*
Ejercicio 14

Contador de repeticiones: Crea una función que nos devuelva el número de veces 
que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado 
siempre y cuando sea claro.
Puedes usar este array para probar tu función: */

const words = [
  'code',
  'eat',
  'sleep',
  'repeat',
  'code',
  'enjoy',
  'sleep',
  'repeat',
  'code',
  'enjoy',
  'sleep',
  'repeat',
  'code',
  'enjoy',
  'code',
  'bug',
  'noenjoy',
  'enjoy',
  'code',
  'enjoy',
  'code'
];

function repeatCounter(list)
{
  const counter = {};
  for(const ele of list)
  {
    if(counter[ele]) { counter[ele]++; }
    else{ counter[ele] = 1;  }
  }
  return (counter);
}
console.log(repeatCounter(words));

/*
function repeatCounter(list) {
  // Completar
  const mapp = new Map();
  for (ele of list)
  {
    if(mapp.has(ele)) { 
      let value = mapp.get(ele);
      value++;
      mapp.set(ele, value); 
    }
    else{ mapp.set(ele, 1); }
  }
  return mapp;
}
console.log(repeatCounter(words));
*/
