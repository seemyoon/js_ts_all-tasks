console.log(1)

const foo = () => {
    return new Promise((resolve, reject) => {
        console.log(2) // the third one is executed because we called the foo function after console.log(4)
        resolve(3) // the promise is immediately resolved with 3, but .then() is not executed yet (it is asynchronous, falls into microtasks)
    })
}

console.log(4)

foo().then((res) => {
    console.log(res)
})

console.log(5)

// 1, 4, 2, 5, 3