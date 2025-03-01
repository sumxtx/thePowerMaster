/* Ejercicio 12

Valores únicos: Crea una función que reciba por parámetro un array y 
compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función: */

const duplicates = [
  'soda',
  'sushi',
  'potatoe',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'soda',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'sushi',
  'soda'
];

function removeDuplicates(list)
{
  const nodup = [];
  for(let ele of list) {
    if(!(nodup.includes(ele))) {
      nodup.push(ele);
    }
  }
  return nodup;
}
console.log(removeDuplicates(duplicates));

//Other Ways of do it

/*
function removeDuplicates(list) {
  return([...new Set(list)]);
}
console.log(removeDuplicates(duplicates));
*/

/*
function removeDuplicates(list) {
  return list.filter((valor, index) => list.indexOf(valor) === index);
}
console.log(removeDuplicates(duplicates));
*/

/*
function removeDuplicates(list) { 
  return list.reduce((nodup, item) =>  {
    if(!(nodup.includes(item))){ nodup.push(item); }
  return (nodup);
}, []);
}
console.log(removeDuplicates(duplicates));
*/

/*
function removeDuplicates(list)
{
  const exists = {};
  return list.filter((value) =>
  {
    if (exists[value])
    {
      return false;
    } else
    {
      exists[value] = true;
      return true;
    }

  });
}
console.log(removeDuplicates(duplicates));
*/
