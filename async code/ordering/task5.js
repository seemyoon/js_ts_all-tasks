// in what order will the consoles be printed and what will they contain?
setTimeout(() => {
    console.log('timeout')
}, 0);

const p = new Promise((resolve, reject) => {
    console.log('Promise creation');
    resolve()
})

const p2 = new Promise((resolve, reject) => {
    console.log(123)
})

p.then(() => {
    console.log('Promise resolving');
})

console.log('End')

console.log('p2 =>>', p2)

// Promise creation  > 123 > End > p2 =>> Promise { <pending> }> Promise resolving >timeout