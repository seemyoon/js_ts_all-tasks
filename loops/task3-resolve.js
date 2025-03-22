const arr = []
const arr2 = []

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) arr.push(i)
    else if (i % 2 !== 0) arr2.push(i)
}

const arr3 = []

Math.floor(Math.random() * 1000);

for (let i = 1; i <= 20; i++) {
    arr3.push(Math.floor(Math.random() * 1000))
}
// console.log(arr3)

const arr4 = []

while (arr4.length < 20) {
    const randomNumber = Math.floor(Math.random() * 1000)

    if (randomNumber > 8 && randomNumber < 732) arr4.push(randomNumber)
}

// console.log(arr4)

const arr5 = [
    513, 78, 236, 448, 260, 678,
    705, 348, 132, 36, 546, 334,
    701, 121, 12, 156, 289, 379,
    130, 421
]

for (let i = 2; i < arr5.length; i = i + 3) console.log(arr5[i])

for (let i = 2; i < arr5.length; i = i + 3) if (arr5[i] % 2 === 0) console.log(arr5[i])

const arr6 = []

for (let i = 2; i < arr5.length; i = i + 3) if (arr5[i] % 2 === 0) arr6.push(arr5[i])

const arr7 = [1, 2, 3, 5, 7, 9, 56, 8, 67]

for (let idx in arr7) if (arr7[+idx + 1] % 2 === 0) console.log(arr7[idx])

const arr8 = [100, 250, 50, 168, 120, 345, 188]
console.log('------')
let commonPrice = 0
for (let num of arr8) commonPrice += num

const avg_check = commonPrice / arr8.length
console.log(avg_check)