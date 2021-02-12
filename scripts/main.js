let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lisa-simpson.jpg') {
        myImage.setAttribute('src','images/lisa-simpson.png');
    } else {
        myImage.setAttribute('src','images/lisa-simpson.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter a name.');
    if(!myName) {
        myHeading.textContent = "Lisa Simpson";
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `${myName} Simpson`;
    }
}

if(!localStorage.getItem('name')) {
    myHeading.textContent = "Lisa Simpson";
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `${storedName} Simpson`;
}

myButton.onclick = function() {
    setUserName();
}
