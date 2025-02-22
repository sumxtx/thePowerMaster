/* Ejercicio 22

Usa un for para remplazar todas las comidas que no sean veganas 
con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Burger", isVegan: false },
  { name: "Burger", isVegan: false },
  { name: "Burger", isVegan: false },
];

function goVegan(listToMod, fruitList)
{
  let l_fruitList = fruitList.length;
  for(ele of listToMod)
  {
    if(!(ele.isVegan))
    {
      if(!(l_fruitList))
      {
        console.log("[!!] NO MORE FRUITS TO REPLACE");
        break;
      }
      ele.name = fruitList.pop();
      ele.isVegan = true;
      l_fruitList--;
    }
  }
  console.log(listToMod);
  return listToMod;
}
goVegan(foodSchedule, fruits);
