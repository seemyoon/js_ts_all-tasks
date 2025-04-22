// todo Explain the code, tell what consoles will be and in what order, and then offer a more optimal solution

function resolveAfter2Seconds(x) {
    console.log(`Which X came -> ${x}`)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
}

async function add1(x) {
    console.log('add1 Hello')
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    console.log('add1 Bye')
    return x + a + b;
}

add1(10).then(console.log);

// add1 Hello => Which X came -> 20 (wait 5 sec) => Which X came -> 30 (wait 5 sec) => add1 Bye

// -------------optimization variant-----------------
const start = Date.now()
const resolveAfter1sec = async (x) => {
    console.log(`Which X came -> ${x}`)
    return new Promise((resolve) => {
        setTimeout(() => resolve(x), 2000)
    })
}

const add = async (x, y, z) => {
    console.log('hello')
    const [a, b] = await Promise.all([
         resolveAfter1sec(y),
         resolveAfter1sec(z)
    ])
    return x + a + b
}

add(10, 20, 30)
    .then(console.log)
    .then(() => {
        const end = Date.now()
        console.log(`Execution time: ${end - start} ms`)
    })

