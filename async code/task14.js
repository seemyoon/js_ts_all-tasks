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

// a → microtask 1
// e → microtask 2
// (after this microtasks c and v are created)
// c → microtask 3
// v → microtask 4
// b → microtask 5
// (d is created inside)
// n → microtask 6
// (m is created inside)
// d → microtask 7
// m → microtask 8

//But why is v after b in example?
// Because .then(function v) is created later than .then(function b) — v is inside e, but e is called after a, and b is in the a chain.