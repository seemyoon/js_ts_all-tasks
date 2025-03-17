const arr = [123, 'banana', 'asd', false, true, NaN, {'a': "asd", "b": ['add', 33]}, 888, 999, true]
// this subtask should resolve like: arr[1], but i'm so lazy))
arr.forEach((item) => console.log(item))

const book1 = {
    title: 'buratino',
    pageCount: 50,
    genre: 'fairy tale',

    authors: [
        author1 = {
            'name': 'tolstoy',
            'age': 40
        }
    ]
}
const book2 = {
    title: '1984',
    pageCount: 500,
    genre: 'dystopian novel',
    authors: [
        author1 = {
            'name': 'oruel',
            'age': 45
        }
    ]
}
const book3 = {
    title: 'Twenty Thousand Leagues Under the Seas',
    pageCount: 150,
    genre: 'travelling',
    authors: [
        author1 = {
            'name': 'Verne',
            'age': 60
        }
    ]
}

const users = [
    {name: 'sasha', username: 'semyon', password: 'asd'},
    {name: 'alex', username: 'alex1564', password: '2asd'},
    {name: 'danil', username: 'danil4545', password: '3asd'},
    {name: 'bohdan', username: 'bohdan4745', password: '32asd'},
    {name: 'lena', username: 'lena545', password: 'as25d'},
]
for (const user in users) {
    console.log(users[user]['password']);
}

const temp = [{
    day: 'mon',
    morning: 18,
    afternoon: 25,
    night: 21
}, {
    day: 'tue',
    morning: 18,
    afternoon: 25,
    night: 23
}, {
    day: 'wen',
    morning: 18,
    afternoon: 24,
    night: 23
}, {
    day: 'tue',
    morning: 15,
    afternoon: 25,
    night: 25
}, {
    day: 'fri',
    morning: 19,
    afternoon: 25,
    night: 21
}, {
    day: 'sun',
    morning: 19,
    afternoon: 26,
    night: 21
}, {
    day: 'sat',
    morning: 18,
    afternoon: 27,
    night: 21
}]
// i want to log night temp
for (const day of temp) {
    for (const [key, value] of Object.entries(day)) {
        if (key === 'day') console.log(`${key}: ${value}`)
        if (key === 'night') console.log(`${key}: ${value}`)
    }

}

const x = 7
if (x !== 0) {
    console.log('correct')
} else {
    console.log('faulty')
}
let a = 1
if (a !== 0) {
    console.log('correct')
} else {
    console.log('faulty')
}
a = 0
if (a !== 0) {
    console.log('correct')
} else {
    console.log('faulty')
}
a = -3
if (a !== 0) {
    console.log('correct')
} else {
    console.log('faulty')
}

const time = 14

if (time <= 15) console.log('1 part')
else if (15 < time && time <= 30) console.log('2 part')
else if (30 < time && time <= 45) console.log('3 part')
else if (45 < time && time <= 59) console.log('3 part')
