// document.getElementById("count-el").innerText = 5
// console.log("JavaScript is connected!");

// initialize the count at 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// camelCase
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;


function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    
    count = 0;
    countEl.innerText = count;
}
