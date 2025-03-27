const rectangleSquare = (a, b) => {
    return a * b
}
console.log(rectangleSquare(7, 8));

const circleSquare = (r) => {
    return 2 * Math.PI * r
}
console.log(circleSquare(4))

const cylinderSquare = (r, h, pi = Math.PI) => {
    return 2 * pi * Math.pow(r, 2) + 2 * pi * r * h
}
console.log(cylinderSquare(4, 5))

const enterElem = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

enterElem([5, 12, 2])

console.log('----')
const sum = (arr) => {
    let count = 0
    for (let elem in arr) {
        count += arr[elem]
    }
    return count
}
console.log(sum([5, 8, 9]));

const swap = (arr, index1, index2) => {
    const firstElem = arr[index1]
    const secondElem = arr[index2]

    arr[index2] = firstElem
    arr[index1] = secondElem

    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let res = 0;
    currencyValues.find(currencyValue => {
        switch (currencyValue.currency) {
            case 'USD':
                if (exchangeCurrency === 'USD') res = sumUAH / currencyValue.value
                break
            case 'EUR':
                if (exchangeCurrency === 'EUR') res = sumUAH / currencyValue.value
                console.log(currencyValue.value)
                break
            default:
                return 'smth faulty'
        }
    })
    return res

}

const res = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')
console.log(res)