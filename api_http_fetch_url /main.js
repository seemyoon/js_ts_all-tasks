const promise1 = new Promise((resolve) => setTimeout(() => resolve(null), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve('promise2'), 1700))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(null), 500))
const promise4 = new Promise((resolve) => setTimeout(() => resolve('promise4'), 1200))

const racePromises = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise =>{
            Promise.resolve(promise).then(result=>{
                if (result !==null) resolve(result, reject)
            })
        })
    })
}

racePromises([promise1, promise2, promise3, promise4]).then(result => {
    console.log(result); // Expected result: promise4
});

// solve without: promise.all, promise.race, async/await