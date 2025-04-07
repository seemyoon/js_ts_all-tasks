const data = new Date().toLocaleString()

if (!localStorage.getItem('data')) localStorage.setItem('data', JSON.stringify([]))

const dataFromLSParsed = JSON.parse(localStorage.getItem('data'))

if (!dataFromLSParsed.includes(data)) dataFromLSParsed.push(data)

localStorage.setItem('data', JSON.stringify(dataFromLSParsed))