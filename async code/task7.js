// In what order will the consoles be output and which ones?
const p = new Promise((resolve, reject) => {
    console.log('hello')
    reject(Error('Everything is broken :('));
})
    .catch((error) => console.log('1st', error.message))
    .catch((error) => console.log('2nd', error.message));

// 'hello'=> '1st' 'Everything is broken :('