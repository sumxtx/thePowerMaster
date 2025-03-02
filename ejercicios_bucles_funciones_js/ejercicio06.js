/* Ejercicio 6

Agrupa las películas de Star Wars por década de lanzamiento en un 
objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// Añade tu código de bucle aquí

function getDecade(year)
{
  let decade;
  decade = year % 100;
  (decade = Math.trunc(decade /= 10));
  (decade *= 10);
  return decade;
}

function sortMoviesByDecade(list)
{
  let decade;
  const sortedList = {};
  for(ele of list)
  {
    decade = getDecade(ele.releaseYear);
    if (!sortedList[decade])
    {
      sortedList[decade] = [];
      sortedList[decade].push(ele.title);
    }
    else if(sortedList[decade])
    { 
      sortedList[decade].push(ele.title);
    }
  }
  return sortedList;
}

console.log(sortMoviesByDecade(starWarsMovies));
