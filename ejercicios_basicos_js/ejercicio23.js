/* Ejercicio 23

Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos,
película mediana -> más de 100 minutos y menos de 200 y 
pelicula grande -> más de 200 minutos.
Imprime cada array por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

let dur;
for (ele of movies)
{
  dur = ele.durationInMinutes;
  if(dur < 100)
  {
    shortMovies.push(ele);
  }
  else if(dur >= 100 && dur < 200)
  {
    mediumMovies.push(ele);
  }
  else if(dur >= 200)
  {
    longMovies.push(ele);
  }
}
console.log(shortMovies);
console.log(mediumMovies);
console.log(longMovies);
