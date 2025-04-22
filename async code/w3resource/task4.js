// Parallel URL Downloads with Promises
// Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const urls = [
    fetch('https://dummyjson.com/products/1').then(res => res.json()),
    fetch('https://dummyjson.com/products/2').then(res => res.json())
]


const customPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const results = []
        let completed = 0

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(value => {
                    results[idx] = value
                    completed++

                    if (completed === results.length) {
                        resolve(results)
                    }

                })
        })
    })

}

customPromiseAll(urls)
    .then(dataArray => {
        dataArray.forEach((data, i) => {
            console.log(`URL ${i + 1}:`, data)
        })
    })
    .catch(err => console.error('Error: ', err))