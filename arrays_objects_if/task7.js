const filterBy = (arr, typeOfData) => {
    switch (typeOfData) {
        case 'string':
            console.log(`${typeOfData} is exist`)
            break
        case 'number':
            console.log(`${typeOfData} is exist`)
            break
        case 'object':
            console.log(`${typeOfData} is exist`)
            break
        case 'function':
            console.log(`${typeOfData} is exist`)
            break
        case 'symbol':
            console.log(`${typeOfData} is exist`)
            break
        case 'boolean':
            console.log(`${typeOfData} is exist`)
            break
        default:
            throw new Error('faulty value')
    }

    const newArr = []
    for (let value of arr) {
        if (typeof value !== typeOfData) newArr.push(value)
    }
    return newArr
}

const arr = filterBy(['banana', true, 5, 6, 7, 'strawberry', 'raspberry', false, 1], 'string')
console.log(arr);