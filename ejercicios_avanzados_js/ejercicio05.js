/* Ejercicio 5

Crea una función llamada rollDice() que reciba como parámetro 
el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
Que la función use el parametro para simular una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes. 
Busca información sobre la función de JavaScript Math.random() */

function rollDice(diceFaces)
{
  let ran = Math.floor(Math.random() * diceFaces);
  return ran
}

console.log(rollDice(6));
