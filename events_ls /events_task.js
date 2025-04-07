const body = document.querySelector('body')
const h1Task = document.createElement('h2')
body.prepend(h1Task)
h1Task.innerText = 'task 1'
const btn = document.createElement('button')
h1Task.after(btn)

const p = document.createElement('p')
btn.after(p)

p.setAttribute('id', 'text')
p.style.backgroundColor = 'grey'
p.innerHTML = 'test'

const elemById = document.getElementById('text')
btn.innerHTML = 'click me'
btn.addEventListener('click', () => elemById.remove())

// --------------------------------------------------------
const h2Task = document.createElement('h2')
h2Task.innerHTML = 'task 2'
p.after(h2Task)

const input = document.createElement('input')
h2Task.after(input)

const userInput = () => {
    const paragraphElement = document.createElement('p')
    paragraphElement.setAttribute('id', 'description')

    if (!Number(input.value)) {
        if (document.getElementById('description')) return
        btn2.after(paragraphElement)
        paragraphElement.innerHTML = 'faulty value'
        setTimeout(() => {
            paragraphElement.remove()
        }, 1000)
    }
    if (Number(input.value) < 18) {
        if (document.getElementById('description')) return

        btn2.after(paragraphElement)
        paragraphElement.innerHTML = 'your age less than 18'
        setTimeout(() => {
            paragraphElement.remove()
        }, 1000)
    }
}

const btn2 = document.createElement('button')
input.after(btn2)
btn2.innerHTML = 'click me'

btn2.addEventListener('click', () => userInput())

// --------------------------------------------------------
const h2Task3 = document.createElement('h2')
btn2.after(h2Task3)
const h3 = document.createElement('h3')
h3.innerHTML = 'Form:'
h2Task3.after(h3)

const form = document.createElement('form')
h3.after(form)

const inputName = document.createElement('input')
const inputSurname = document.createElement('input')
const inputAge = document.createElement('input')

form.prepend(inputName, inputSurname, inputAge)

const btn4 = document.createElement('button')
btn4.innerHTML = 'send'
form.append(btn4)

const resultOfInputs = () => {
    const nameFields = ['Name', 'Surname', 'Age']
    const values = [inputName.value, inputSurname.value, inputAge.value]

    if (values.some(value => value.trim() === '')) {
        if (document.getElementById('errorInput')) return;

        const pError = document.createElement('p')
        pError.id = 'errorInput'
        pError.innerHTML = 'all fields must be filled'
        btn4.after(pError)

        setTimeout(() => {
            pError.remove()
        }, 1500)
        return;
    }

    nameFields.forEach((value, idx) => {
        const p = document.createElement('p')
        const id = `inputForm${idx}`

        if (document.getElementById(id)) return

        p.id = id
        p.innerHTML = `${value}: ${values[idx]}`
        btn4.after(p)

        setTimeout(() => {
            p.remove()
        }, 1500)
    })
}


btn4.addEventListener('click', () => resultOfInputs())

form.onsubmit = function (e) {
    e.preventDefault()
}
// --------------------------------------------------------
const h2Task5 = document.createElement('h2')
form.after(h2Task5)
h2Task5.innerHTML = 'task5'

const input1Converter = document.createElement('input')
input1Converter.setAttribute('id', 'firstConverter')

const label1Converter = document.createElement('label')
label1Converter.setAttribute('for', 'firstConverter')
label1Converter.innerHTML = 'Converter: '

h2Task5.after(input1Converter)

input1Converter.before(label1Converter)

const pShowConverter = document.createElement('p')

input1Converter.oninput = function () {
    input1Converter.after(pShowConverter)

    if (!this.value) {
        pShowConverter.innerHTML = ' '
        return
    }

    if (isNaN(+this.value)) {
        pShowConverter.innerHTML = 'Invalid input'
        return;
    }

    const calc = this.value * 2.2046
    pShowConverter.innerHTML = JSON.stringify(calc)
}
// --------------------------------------------------------
const addToLocalStorage = (arrayName, objToAdd) => {

    const itemFroLC = localStorage.getItem(arrayName)

    if (!itemFroLC) localStorage.setItem(arrayName, JSON.stringify([]))

    const parsedItemFroLC = JSON.parse(itemFroLC)

    if (Array.isArray(parsedItemFroLC)) {
        parsedItemFroLC.push(objToAdd)

        localStorage.setItem(arrayName, JSON.stringify(parsedItemFroLC))
    }

};

addToLocalStorage('product', {'id': 'banana', 'cost': 100})
// --------------------------------------------------------
const h2Task6 = document.createElement('h2')
input1Converter.after(h2Task6)
h2Task6.innerHTML = 'task6'

const quantityRow = document.createElement('input')
const quantityGabs = document.createElement('input')
const contentInGabs = document.createElement('input')

quantityRow.setAttribute('id', 'quantityRow')
quantityGabs.setAttribute('id', 'quantityGabs')
contentInGabs.setAttribute('id', 'contentInGabs')

h2Task6.after(quantityRow, quantityGabs, contentInGabs)

const labelQuantityRow = document.createElement('label')
const labelQuantityGabs = document.createElement('label')
const labelContentInGabs = document.createElement('label')

labelQuantityRow.setAttribute('for', 'quantityRow')
labelQuantityGabs.setAttribute('for', 'quantityGabs')
labelContentInGabs.setAttribute('for', 'contentInGabs')

quantityRow.before(labelQuantityRow)
quantityGabs.before(labelQuantityGabs)
contentInGabs.before(labelContentInGabs)

labelQuantityRow.innerHTML = 'quantity row: '
labelQuantityGabs.innerHTML = ' quantity gabs: '
labelContentInGabs.innerHTML = ' content in gabs: '

const table = document.createElement('table')
table.setAttribute('border', '1')
contentInGabs.after(table)


let row = 0
let gaps = 0
let context = ''

quantityRow.oninput = function () {
    if (!isNaN(+this.value) && this.value.trim() !== '') {
        row = +this.value;
        renderTable()
    }
}

quantityGabs.oninput = function () {
    if (!isNaN(+this.value) && this.value.trim() !== '') {
        gaps = +this.value
        renderTable()

    }
}

contentInGabs.oninput = function (){
    context = this.value
    renderTable()
}


const renderTable = () => {
    table.innerHTML = ''

    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr')

        for (let k = 0; k < gaps; k++) {
            const td = document.createElement('td')
            td.innerHTML = context
            tr.prepend(td)
        }
        table.prepend(tr)
    }
}


// --------------------------------------------------------
const h2Task4 = document.createElement('h2')
input1Converter.after(h2Task4)
h2Task4.innerHTML = 'task4'

let count = 0;
window.onload = function () {
    if (localStorage.getItem('count')) {
        count = JSON.parse(localStorage.getItem('count')) + 1
        localStorage.setItem('count', JSON.stringify(count))
    } else {
        localStorage.setItem('count', JSON.stringify(count))
    }

    const pStore = document.createElement('p')
    h2Task4.after(pStore)
    pStore.innerHTML = localStorage.getItem('count')
}