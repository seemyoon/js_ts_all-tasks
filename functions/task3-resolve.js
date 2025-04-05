const body = document.querySelector('body')
const btn = document.createElement('button')
body.prepend(btn)

btn.innerHTML = 'click me'
const createParagraph = (text) => {
    document.write(`<p>${text}</p>`)
    // const p = document.createElement('p')
    // p.innerHTML = text
    // btn.after(p)
}

btn.addEventListener('click', () => createParagraph('hello world'))

const btn2 = document.createElement('button')
btn.after(btn2)

btn2.innerHTML = 'click me2'

const createUlwith3Li = (text) => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
                </ul>`)
}

btn2.onclick = () => createUlwith3Li('greeting')

const btn3 = document.createElement('button')
btn2.after(btn3)

btn3.innerHTML = 'click me 3'

const createUlwithSomeLi = (text, quantityOfElems) => {
    document.write("<ul>")
    for (let i = 1; i <= quantityOfElems; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write("</ul>")
}

btn3.addEventListener('click', () => createUlwithSomeLi('i like sport', 5))

const primitiveDataTypes = ['banana', 1, false, null, 999, 'raspberry']

const creator = (arr) => {
    document.write("<p>")
    arr.forEach(i =>
        document.write(`<li>${i}</li>`)
    )
    document.write("</p>")
}
creator(primitiveDataTypes)

const creator2 = (arr) => {
    document.write('<div>')

    for (let i = 0; i < arr.length; i++) {
        document.write("<div>")
        for (let [k, v]of Object.entries(arr[i])){
            document.write(`<p>${k}: ${v}</p>`)
        }
        document.write("</div>")
    }
    document.write('</div>')
}

const items = [
    {
        "id": 1,
        "name": "Alex",
        "age": 20
    },
    {
        "id": 2,
        "name": "Tanya",
        "age": 25
    },
    {
        "id": 3,
        "name": 'Bogdan',
        "age": 30
    }
]

creator2(items)