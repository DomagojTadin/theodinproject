const container = document.querySelector('#container');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
} )

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const blueElement = document.createElement('h3');
blueElement.classList.add('blueElement');
blueElement.setAttribute('style', 'color: blue');
blueElement.textContent = "I'm a blue h3!";

const redElement = document.createElement('p');
redElement.classList.add('redElement');
redElement.style.cssText = 'color:red';
redElement.textContent = "Hey, I'm red!";

// a <div> with a black border
// and pink background color
// with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the div with createElement,
//     append the <h1> and <p> to it before adding it to the container.
const pinkDiv = document.createElement('div');
const h1Div = document.createElement('h1');
const pDiv = document.createElement('p');
pinkDiv.appendChild(h1Div);
pinkDiv.appendChild(pDiv);
//pinkDiv.style.cssText = 'background-color: blue';
pinkDiv.setAttribute('style', 'border-style: solid; background-color: pink');
h1Div.textContent = "I'm in a div";
pDiv.textContent = 'ME TOO!';
pinkDiv.addEventListener('click', alertfunction);

container.appendChild(pinkDiv);
container.appendChild(blueElement);
container.appendChild(content);
container.appendChild(redElement);

function alertfunction(e) {
	console.log(e);
	e.target.style.background = 'blue';
	//alert('clicked!');
}
