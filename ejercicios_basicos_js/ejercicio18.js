
/* Ejercicio 18
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
Imprime en un console log el array resultante.
Puedes usar este array: */

const placesToTravel = [
  {id: 5, name: 'Japan'},
  {id: 5, name: 'Japan'},
  {id: 11, name: 'Venecia'},
  {id: 11, name: 'Veneca'},
  {id: 11, name: 'Veneca'},
  {id: 23, name: 'Murcia'},
  {id: 40, name: 'Santander'},
  {id: 5, name: 'Japan'},
  {id: 44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'}];

const ids = [11,40,59];

function removeIds(array, ids)
{
  for(let i = 0; i < array.length; i++)
  {
    if(ids.includes(array[i].id))
    {
      array.splice(i, 1);
      i--;
    }
  }
  console.log(array);
  return array;
}

removeIds(placesToTravel, ids);
