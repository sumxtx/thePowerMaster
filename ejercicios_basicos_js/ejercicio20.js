/* Ejercicio 20

For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes 
y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
Imprímelo por consola.
Puedes usar este array: */


const toys = [
  {id: 101, name: 'Super Soaker', sellCount: 15},
  {id: 102, name: 'Tamagotchi', sellCount: 22},
  {id: 103, name: 'Polly Pocket', sellCount: 8},
  {id: 104, name: 'Yo-yo', sellCount: 33},
  {id: 105, name: 'Pikachu plush toy', sellCount: 19},
  {id: 106, name: 'Rubik\'s Cube', sellCount: 27},
  {id: 107, name: 'Fidget Spinner', sellCount: 12},
  {id: 108, name: 'Slinky', sellCount: 5},
  {id: 109, name: 'Magic 8-Ball', sellCount: 38},
  {id: 110, name: 'Troll Doll', sellCount: 20}
];

const popularToys = []

function finPopToys(toysList, newList)
{
  for(let ele of toysList)
  {
    if(ele.sellCount > 15)
    {
      newList.push(ele);
    }
  }
}
finPopToys(toys, popularToys);
console.log(popularToys);
