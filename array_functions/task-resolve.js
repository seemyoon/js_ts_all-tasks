const str = 'hello world'
const str2 = 'lorem ipsum'
const str3 = 'javascript is cool'
console.log(str.length)
console.log(str2.length)
console.log(str3.length)

console.log(str.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

console.log(str.toLowerCase())
console.log(str2.toLowerCase())
console.log(str3.toLowerCase())

const dirty_string = ' dirty string   '
console.log(dirty_string.trim())

const str4 = 'Ревуть воли як ясла повні';
console.log(str4.split(' '))

const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const str_arr = arr.map(num => num + '')
console.log(str_arr)

const nums = [11, 21, 3]

const direction = 'descending'

switch (direction) {
    case 'ascending':
        const asc = nums.sort((num1, num2) => num1 - num2)
        console.log(asc)
        break
    case 'descending':
        const desc = nums.sort((num1, num2) => num2 - num1)
        console.log(desc)
        break
    default:
        console.log('fault value')
}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const sorted_course = coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration)
console.log(sorted_course)

const filtered_course = coursesAndDurationArray.filter(course => course.monthDuration >= 5)
console.log(filtered_course)

const mapped_course = coursesAndDurationArray.map((course, index) => {
        return {
            id: index + 1,
            title: course.title,
            monthDuration: course.monthDuration,
        }
    }
)
console.log(mapped_course)
const cards = [
    {
        cardSuit: 'spade',
        values: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'black',
    }, {
        cardSuit: 'diamond',
        values: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'red',
    }, {
        cardSuit: 'heart',
        values: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'red',
    }, {
        cardSuit: 'clubs',
        values: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'black',
    },
]
