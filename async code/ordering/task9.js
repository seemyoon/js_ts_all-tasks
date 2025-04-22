console.log(1)

queueMicrotask(() => {
    console.log(2)
})

Promise.resolve().then(() => {
    console.log(3)
})

setTimeout(() => {
    console.log(4)
}, 0)

console.log(5)

// 1, 5, 2, 3,4