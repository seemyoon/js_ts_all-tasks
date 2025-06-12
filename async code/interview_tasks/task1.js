import {promise1, promise2, promise3, promise4} from './promises.js'

const racePromises = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(result => {
                if (result !== null) resolve(result, reject)
            })
        })
    })
}

racePromises([promise1, promise2, promise3, promise4]).then(result => {
    console.log(result); // Expected result: promise4
});

// solve without: promise.all, promise.race, async/await