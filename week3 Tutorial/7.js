console.log("1. Script Start");
 setTimeout(() => {
 console.log("2. Timeout");
 }, 0);
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(() => console.log("3. Fetch Return"));
 console.log("4. Script End");