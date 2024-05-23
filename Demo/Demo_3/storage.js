function welcomeUser() {
    const name = 
}

document.querySelector('button')
    .addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.querySelector('input').value;

        console.log(name);

        localStorage.setItem('name', name);
    });