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
const h2Task4 = document.createElement('h2')
form.after(h2Task4)
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


