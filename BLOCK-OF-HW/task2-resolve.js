const user_input = () => {
    let user_age = prompt('enter your age:', '19')
    let user_name = prompt('enter your name:', 'alex')
    const age = Number(user_age)

    if (isNaN(age) || user_age === '' || user_name === '') return user_input()

    if (age < 18) {
        return alert('You are not allowed to visit this website')
    } else if (18 <= age && age <= 22) {
        const answer = confirm('Are you sure you want to continue?')
        alert(answer ? `Welcome, ${user_name}` : 'You are not allowed to visit this website')
    } else if (age > 22) alert(`Welcome, ${user_name}`)

}
user_input()
