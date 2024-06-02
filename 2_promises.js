
/* 
Promise object represents :
- "a pending state"
- "eventual completion or failure of an asynchronous operation"
*/
const myPromise = new Promise((resolve, reject) => {
    const someFloat = Math.random();
    if (someFloat > 0.5) {
        resolve(someFloat);
    } else {
        reject(someFloat);
    }
});

myPromise
    .then(message => console.log(`Promise resolved: ${message}`))
    .catch(message => console.log(`Promise rejected: ${message}`));

/*
Promise chains can become difficult to understand sometimes.
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));
Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains
*/