/* Ejercicio 12

Desarrolla una función que busque en un array de objetos 
representando mutantes si existe alguno con un poder específico y 
retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Sabertooth', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
];

function findMutantByPower(mutants, power) {
  // insert code
  let ret = {};
  for (let mutant of mutants)
  {
    if(mutant.power == power)
    {
      if(!ret[power]) { ret[power] = [];}
      ret[power].push(mutant.name);
    }
  }
  if(Object.keys(ret).length === 0)
  {
    return `No mutants with ${power} found`;
  }
  return `Mutants with ${power}: ${ret[power]}`;
}

console.log(findMutantByPower(mutants, 'noPower'));
console.log(findMutantByPower(mutants, 'teleportation'));
console.log(findMutantByPower(mutants, 'regeneration'));
