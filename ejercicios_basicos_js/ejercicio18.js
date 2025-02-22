
/* Ejercicio 18
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
Imprime en un console log el array resultante.
Puedes usar este array: */

const placesToTravel = [
  {id: 5, name: 'Japan'},
  {id: 11, name: 'Venecia'},
  {id: 11, name: 'Veneca'},
  {id: 23, name: 'Murcia'},
  {id: 40, name: 'Santander'},
  {id: 44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'}];

for(let i = 0; i < placesToTravel.length; i++)
{
  if(placesToTravel[i].id === 11 || placesToTravel[i].id === 40)
  {
    placesToTravel.splice(i, 1);
    i--;
  }
}
console.log(placesToTravel);

/*
function removeById(listToPurge, idSet)
{
  for (ele of listToPurge)
  {
    if(idSet.includes(ele.id))
    {
      listToPurge.splice(listToPurge.indexOf(ele), 1);
      i--;
    }
  }
  console.log(listToPurge);
  return listToPurge;
}

console.log(placesToTravel);
const idsToRemove = [44, 55, 11, 23, 25];
console.log(`ids To remove ${idsToRemove}`);
removeById(placesToTravel, idsToRemove);
//console.log(removeById(placesToTravel, idsToRemove));
*/
