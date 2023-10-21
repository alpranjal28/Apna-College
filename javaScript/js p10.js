// let btn = document.querySelector("button");
// console.dir(btn);

function sayHello() {
    console.log("button was clicked");
    // alert(`button was clicked`);
}
function sayName() {
    console.log(`dblclick button`);
    alert(`btn was dblclicked`)
}

// for multiple buttons
let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("dblclick", sayName);
}
