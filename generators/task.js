function* evenNumbers() {
    for (let i = 1; ; i++) {
        yield i * 2
    }
}

const generatorEvenNumbers = evenNumbers();
const one = generatorEvenNumbers.next();
const two = generatorEvenNumbers.next();
const three = generatorEvenNumbers.next();
const four = generatorEvenNumbers.next();
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(four);


