// let btn = document.querySelector("button");
// console.dir(btn);

function sayHello() {
    console.log("button was clicked");
    // alert(`button was clicked`);
}
function sayName() {
    console.log(`dblclick button`);
    alert(`btn was dblclicked`);
}

// for multiple buttons
let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("dblclick", sayName);
}

// .addEventListener can be used on any element to trigger event and response/callback

//
//this---using this in callback via console.log/dir refers to the element itself that is being triggered

//keyboard events

let input = document.querySelector("input");
input.addEventListener("keydown", function () {
    console.log(`key pressed`);
});
input.addEventListener("keyup", function (event) {
    console.log(event.code);
    // console.log(`key released`);
    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code == "ArrowDown") {
        console.log("character moves backward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }
});

// form events

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //preventDefault blocks the given default action
    //in this case submit form towards next page
    alert(`form submitted`);

    // extracting form data
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert(`hi ${user.value}! Your password is ${pass.value}`);
    //or
    console.dir(form);
    let userx = this[0]; // or this.elements[0]
    let passx = this[1]; // or this.elements[1]
    console.log(userx.value);
    console.log(passx.value);
});

//assignment Qs
let jsbtn = document.createElement("button");
document.querySelector("body").append(jsbtn);
jsbtn.innerText = "don't click";
jsbtn.addEventListener("click", function () {
    this.classList.toggle("green");
});

let jsinp = document.createElement("input");
document.querySelector("body").append(jsinp);
jsinp.placeholder = "enter your name";

jsinp.addEventListener("input", function () {
    console.log(jsinp.value);
    jshead.innerText = jsinp.value;
});

let jshead = document.createElement("h2");
document.querySelector("body").prepend(jshead);
// jshead.innerText = jsinp.value;
