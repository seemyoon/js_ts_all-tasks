// Callback to Promise Conversion
// Write a JavaScript program that converts a callback-based function to a Promise-based function.
const cb = () => {
    return 'task 2 was done'
}
const promiseBasedFunc = (cbfunc) => new Promise((resolve, reject) => resolve(cbfunc()))

promiseBasedFunc(cb)
    .then(res => console.log(res));