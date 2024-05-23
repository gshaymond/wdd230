const section = document.querySelector('section');
let height = 400;
let width = 400;

document.querySelector('button')
    .addEventListener('click', () => {
        section.innerHTML += 
        `<article>
            <img src="https://place.dog/${height}/${width}" alt="dog">
        </aritcle>`
        height += 1;
        width += 1;

        section.innerHTML += `<p>Now you've done it.</p>`
    });