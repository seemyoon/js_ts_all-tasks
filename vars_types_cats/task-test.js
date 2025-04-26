var days = [];

days['mon'] = 1

console.log(days.length) // 0

console.log('----task 1----')

// const arr = [0, 2, 5, 6, 7].pop().pop()

// console.log(arr)

console.log('----task 2----')
var person = {
    firstName: 'Dave',
    lastName: 'Smith'
}

var newPerson = Object.create(person)
delete newPerson.firstName
console.log(newPerson.firstName + newPerson.lastName)

console.log('----task 3----')

function dolt(param) {
    param = 2
}

var test = 1
dolt(test)
console.log(test)

var firstVar = 'asd';
var secondVar;

switch (firstVar) {
    case 'asd':
        secondVar = 'zxc';
        break;
    case 'zxc':
        secondVar = 'vbn';
        break;
    case 'vbn':
        secondVar = 'dfg';
        break;
    default:
        secondVar = 'foobar';
}

console.log(secondVar);

function* generator(i) {
    yield i = 2;
    yield i = 3;
}

const gen = generator(1)
console.log(gen.next().value)
console.log(gen.next().value)