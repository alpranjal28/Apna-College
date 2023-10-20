let para1 = document.createElement("p");
para1.innerText = "hey I'm Red!";
document.querySelector("body").append(para1);

para1.classList.toggle("red");
//

let head3 = document.createElement("h3");
head3.innerText = "I'm a Blue H3";
document.querySelector("body").append(head3);

head3.classList.add("blue");

let div = document.createElement("div");
document.querySelector("body").append(div);
div.classList.add("div");

let innerH1 = document.createElement("h1");
innerH1.innerText = "I'm in a Div";
document.querySelector("body div").append(innerH1);

let para2 = document.createElement("p");
para2.innerText = "ME TOO";
document.querySelector("body div").append(para2);

//assignment Qs
let inp = document.createElement("input");
let btn = document.createElement("button");

document.querySelector("body").append(inp);
document.querySelector("body").append(btn);

btn.innerText = "Click me";
inp.placeholder = "username"
btn.id = "btn"

let newH1 = document.createElement("h1")
newH1.innerHTML= "<u>DOM Practice</u>"
document.querySelector("body").append(newH1)
newH1.classList.add("purple")

let newp = document.createElement("p")
newp.innerHTML = "Apna College <b>Delta</b> Practice"
document.querySelector("body").append(newp)