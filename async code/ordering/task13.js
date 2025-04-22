fetch('https://www.google.com') // fetch is a function that makes an HTTP request and returns a promise.
    .then(() => console.log(1))
// fetch is a macro task, but then() processing is a micro task that is set after receiving the response.

Promise.resolve()
    .then(() => console.log(2))

Promise.resolve()
    .then(() => console.log(3))

// 2, 3, 1