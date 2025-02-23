/* Ejercicio 2

Dada una lista de películas, cuenta cuántas son de antes del año 2000 y 
cuántas son posteriores, utilizando un bucle.
Imprime ambos conteos por consola. */

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Añade tu código de bucle aquí

function findByYear(list, year)
{
  let count = {before: 0, match: 0, after: 0};
  for (ele of list)
  {
    if(ele.releaseYear < year)
    {
      count.before++;
    }
    else if(ele.releaseYear > year)
    {
      count.after++;
    }
    else if(ele.releaseYear == year)
    {
      count.match++;
    }
  }
  return count;
}
console.log(findByYear(movies, 1999));

