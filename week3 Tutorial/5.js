const movies = [
 { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
 { id: 2, title: "The Green Mile", genre: "Crime", year: 1999 },
 { id: 3, title: "12 Angry Men", genre: "Thriller", year: 1957 }
];
// Challenge 1: Find all Sci-Fi movies
const sciFiMovies = movies.filter(movie => {
 return movie.genre==="Sci-Fi";
});
console.log(sciFiMovies);
// Challenge 2: Get an array of just movie titles
const titles = movies.map(movie => {
 return movie.title;
});
console.log(titles);
// Challenge 3: Find the movie "Dune"
const oneMovie = movies.find(movie => {
 return movie.title==="The Green Mile";
});
console.log(oneMovie);
// Challenge 4: Display each movie nicely
movies.forEach(movie => {
 console.log(`${movie.title} (${movie.year}) ${movie.genre}`);
});



