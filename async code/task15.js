const promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        console.log(2)

        resolve(3)

        console.log(4)
    })

    console.log(5)
})

promise
    .then((res) => console.log(res))

console.log(6)

// 1, 5, 6, 2, 4