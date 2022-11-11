
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// I1. Arrow Function > remove funtion and convert return into arrow =>
function getAllDirectors (moviesArray) {
  const movieDirectors = moviesArray.reduce((list, current) => {
    if (!list.includes(current.director)) {
      list.push(current.director)
    } return list
  },[])
  return movieDirectors;
};

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(movie => movie.director.includes('Steven Spielberg')).filter(movie => movie.genre.includes('Drama'))
    return spielbergMovies.length;
  };

  console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0
  const sumScore = moviesArray.filter(movie => movie.score >= 0).reduce((sum, movie) => (sum + movie.score), 0);
  return Number(((sumScore / moviesArray.length).toFixed(2)))
};
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
  if (dramaMovies.length === 0) return 0
  const reduceDramaMovies = dramaMovies.reduce((sum, movie) => (sum + movie.score), 0);
  return Number(((reduceDramaMovies / dramaMovies.length).toFixed(2)))
};
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopyYear = JSON.parse(JSON.stringify(moviesArray));
  const moviesSorted = moviesCopyYear.sort((a, b) => {
    let sortYear = a.year - b.year;
    if (sortYear !== 0) return sortYear;
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else { return 0}
  })
  return moviesSorted.sort((a, b) => a.title - b.title)
};
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopyAbc = JSON.parse(JSON.stringify(moviesArray));
/*   const moviesCopyAbcSorted = moviesCopyAbc.sort((a, b) => a.title < b.title)
  console.log(moviesCopyAbcSorted); */ // nose que pasa con esto ?????????
  const moviesCopyAbcSorted = moviesCopyAbc.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else { return 0}
  })
  const moviesTitle = moviesCopyAbcSorted.map(movie => movie.title);
  return moviesTitle.slice(0,20);
};  
console.log(orderAlphabetically(movies));




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
