// HTTP GET with Promises
// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const task3Func = function () {
    return fetch('https://dummyjson.com/test')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log('ERRRRRRRRRRRROORRRRRRRRRR', err))
};
(task3Func()).then(res => res)
