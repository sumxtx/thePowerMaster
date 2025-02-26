/*                              Ejercicio 7                                   */

/* Completa esta función para que, al recibir dos números por argumento, 
 * te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne , numberTwo) {
  // Completar código
  if (numberOne > numberTwo) { return numberOne; }
  else { return numberTwo; }
}
console.log(greaterNumber(8, 7));
console.log(greaterNumber(0, 7));
console.log(greaterNumber(7, 1));
console.log(greaterNumber(9, 8));
console.log(greaterNumber(9, 9));
