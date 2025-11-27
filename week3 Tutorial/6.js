const movie = { id: 2, title: 'The Green Mile', genre: 'Crime', year: 1999 } ;





// Old way
function displayMovie(movie) {
 return movie.title + " (" + movie.year + ") - " + movie.genre;
}
// New way: Use template literals and destructuring
function displayMovieModern(movie) {
 const {title, genre, year} = movie;
 return`${title} (${year}) : ${genre}`;
}
// Test it
console.log(displayMovie(movie));
console.log(displayMovieModern(movie));



// console.log(displayMovieModern(movies[0]));