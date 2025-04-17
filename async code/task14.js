Promise
    .resolve()
    .then(function a() {
        console.log('a')
        Promise.resolve()
            .then(function c() {
                console.log('c')
            })
    })
    .then(function b() {
        console.log('b')
        Promise.resolve()
            .then(function d() {
                console.log('d')
            })
    })

Promise
    .resolve()
    .then(function e() {
        console.log('e')
        Promise.resolve()
            .then(function v() {
                console.log('v')
            })
    })
    .then(function n() {
        console.log('n')
        Promise.resolve()
            .then(function m() {
                console.log('m')
            })
    })

// a, e, c, b, v, n, d, m

// a → prints 'a', adds c to microtasks.
// e → prints 'e', adds v to microtasks.
// c → prints 'c'.
// v → prints 'v'.
// b → prints 'b', adds d to microtasks.
// n → prints 'n', adds 'm' to microtasks.
// d → prints 'd'.
// m → prints 'm'.

//But why is v after b in example?
// Because .then(function v) is created later than .then(function b) — v is inside e, but e is called after a, and b is in the a chain.