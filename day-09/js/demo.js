'use strict';

let body = document.querySelector('body');

let paragraph = document.createElement('p');
paragraph.className ="highlight";
paragraph.classList.add('important');
paragraph.innerText = "hello JS world!";
paragraph.style.fontSize = "2em";

body.appendChild(paragraph);
// use querySelector and css selectors to get the none.css href
// log it
let css = document.querySelector('[href+="css/none.css"]');
console.log(css);



//select h1 and modify it's font-size
let h1 = document.querySelector('h1');
h1.style.fontSize= "5em";



//add event listener to t he button to track x and y of clicks
//log them
//log the target
let button = document.querySelector('button');
button.addEventListener('click', function(){
    let message = "You clicked " +
    event.offsetX + " and " + event.offsetY;

    let clickedElem = event.target;
    console.log(message);
    console.log(clickedElem);

});


//key press event listener
document.addEventListener('keydown', function(event){
    if(event.key == 'Arrow Up'){
        console.log("Going Up!");
    }
});

function doSomething(id) {
    document.querySelector('#${id}').addEventListener('click', function(){
        css.setAttribute('href','css/${id}.css')
    });
}

//get all style sheet links, log them, then add even listeners to each
let listItems = docuemnt.querySelectorAll('.styles li');
//console.log(listItems);
for (var i in Object.keys(listItems)) {
    doSomething(listeItems[i].id);
}


// track state of clicks
