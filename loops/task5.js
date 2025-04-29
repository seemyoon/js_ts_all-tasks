const numbers = [10, -5, 20, -3, 0, 55, 130, 60];

for (const num of numbers) {
    if (num === 0) continue
    if (num > 100) break

    console.log(num)
}

console.log('------task 1------')

const purchases = [
    {name: 'Laptop', price: 900, inStock: true},
    {name: 'Mouse', price: 25, inStock: false},
    {name: 'Keyboard', price: 45, inStock: true},
    {name: 'Monitor', price: 1200, inStock: true},
    {name: 'USB Cable', price: 10, inStock: true},
];


for (const purchase of purchases) {
    const {name, inStock, price} = purchase

    if (inStock === false) continue
    if (price > 1000) break

    console.log('name: ', name, 'price: ', price)
}

console.log('------task 2------')
