const promise1 = new Promise((resolve) => setTimeout(() => resolve(null), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve('promise2'), 1700))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(null), 500))
const promise4 = new Promise((resolve) => setTimeout(() => resolve('promise4'), 1200))

export {
    promise1,
    promise2,
    promise3,
    promise4,
}