const newMovie = {
 title: "The Matrix",
 genre: "Sci-Fi",
 year: 1999
 };

 const jsonString = JSON.stringify(newMovie);
 console.log("JSON String:", jsonString);
 console.log("Type:", typeof jsonString);
// Convert back to JavaScript object (from server response)
 const movieObject = JSON.parse(jsonString);
 console.log("Object:", movieObject);
 console.log("Type:", typeof movieObject);
 // Can you access the title now?
 console.log("Title:", movieObject.title);