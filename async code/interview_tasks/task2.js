import {promise1, promise2, promise3, promise4} from './promises.js'

// custom promiseAll
const customPromiseAll = (promises) => {
   return new Promise((resolve, reject) => {
       const results = []
       let completed = 0

       promises.forEach((promise, i) => {
           Promise.resolve(promise)
               .then(value => {
                   results[i] = value;
                   completed++

                   if (completed === promises.length) resolve(results)
               })
               .catch(reject)
       })
       if (promises.length === 0) resolve([])

   })
}

customPromiseAll([promise1, promise2, promise3, promise4]).then(console.log)

