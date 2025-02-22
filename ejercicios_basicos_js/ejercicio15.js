/* Ejercicio 15

Includes: Haz un bucle y muestra por consola todos aquellos valores del array 
que incluyan la palabra "Camiseta".
Usa la función .includes de javascript. */

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'];

function hasWord(nameList, word)
{
  const newList = [];
  for (ele of nameList)
  {
    if(ele.includes(word))
    {
      newList.push(ele);
      console.log(ele);
    }
  }
  return newList;
}
console.log(hasWord(products, "Camiseta"));
