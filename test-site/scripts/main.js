let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let name = prompt('Please enter your name: ');
  if (!name) {
    setUserName();
  } else {
    localStorage.setItem('name', name);
    myHeading.textContent = `This is the World Wide Web, ${name}...`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `This is the World Wide Web, ${storedName}...`;
}

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc == './images/world-wide-web.jpg') {
    myImage.setAttribute('src', './images/www.jpeg');
  } else {
    myImage.setAttribute('src', './images/world-wide-web.jpg');
  }
};

myButton.onclick = function () {
  setUserName();
};
