Promise
    .resolve()
    .then(() => console.log(1))
    .then(() =>
        setTimeout(() => console.log(2), 0)
    )
    .then(() => console.log(3))

Promise
    .resolve()
    .then(() => console.log(4))
    .then(() => setTimeout(() => console.log(5), 0))
    .then(() => console.log(6))

// 1, 4, 3, 6, 2, 5

// first the first promise is executed and its then, then the second and its then and so on
// They are executed in order:
// console.log(1)
// setTimeout(...) (postponed in macrotask)
// console.log(3)
// console.log(4)
// setTimeout(...) (also postponed)
// console.log(6)
// After that, macrotasks (setTimeout) are executed:
// console.log(2)
// console.log(5)