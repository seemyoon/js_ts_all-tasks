const body = document.querySelector('body')

const div = document.createElement('div')

const classes = ['wrap', 'collapse', 'alpha', 'beta']

classes.forEach(oneClass => div.classList.add(oneClass))

body.prepend(div)

div.classList.add("container")

const divClone = div.cloneNode()
body.prepend(divClone)

const elems = ['Main', 'Products', 'About us', 'Contacts']

const ul = document.createElement('ul')

div.after(ul)

for (const elem of elems) {
    const li = document.createElement('li')
    ul.prepend(li)

    li.innerHTML = elem
}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


const mainBlock = document.createElement('div')
mainBlock.classList.add('container2')

ul.after(mainBlock)

for (const course of coursesAndDurationArray) {
    const innerDiv = document.createElement('div')
    mainBlock.prepend(innerDiv)
    innerDiv.classList.add('inner_container')

    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    innerDiv.prepend(h2)

    h2.after(p)

    h2.innerHTML = course.title
    p.innerHTML = "Duration: " + course.monthDuration
}

const mainBlock2 = document.createElement('div')
mainBlock2.classList.add('container2')
mainBlock.after(mainBlock2)

for (const course of coursesAndDurationArray){
    const innerDiv = document.createElement('div')
    innerDiv.classList.add('item')
    mainBlock2.prepend(innerDiv)

    const h3 = document.createElement('h3')
    h3.classList.add('heading')

    const p = document.createElement('p')
    p.classList.add('description')

    innerDiv.prepend(h3)
    h3.after(p)

    h3.innerText = course.title
    p.innerText = course.monthDuration
}
