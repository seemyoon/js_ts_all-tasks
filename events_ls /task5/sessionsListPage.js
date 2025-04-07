const body = document.querySelector('body')

const getTimeParsed = JSON.parse(localStorage.getItem('data'))

getTimeParsed
    .sort((item1, item2) => new Date(item2) - new Date(item1))
    .forEach(item => {
        const p = document.createElement('p')
        p.innerHTML = item
        body.prepend(p)
    })