const shallowCopy1Way = (obj) => {

    return {...obj}
}

const shallowCopy2Way = (obj) => {

    return Object.assign({}, obj)
}


const user = {
    name: 'valya',
    age: 32,
    address: {
        city: 'Kharkiv',
        street: 'Sumska'
    },
    greet: function () {
        return `hello ${this.name}!`
    }
}

console.log(user.greet())
shallowCopy1Way(user)

shallowCopy2Way(user)

const deepCopy = (obj) => {
    if (!obj) throw new Error('smth faulty')

    if (typeof obj === 'function') return obj

    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) return obj.map(deepCopy)

    let clone = {}

    for (let [k, v] of Object.entries(obj)) {
        clone[k] = deepCopy(v)
    }

    return clone
}

console.log(deepCopy(user.greet()));

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const newArrCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => ({
    id: index,
    title: value.title,
    monthDuration: value.monthDuration
}))

console.log(newArrCoursesAndDurationArray)