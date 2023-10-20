// console.dir(document.getElements("h1"));
console.dir(document.getElementsByName("h1"));
console.dir(document.getElementById("mainImg"));
console.dir(document.getElementsByClassName("boxLink"));

//query selector is mainly used
//querySelector gives the first match only. eg
console.dir(document.querySelector("h1"));
console.dir(document.querySelector(".images"));
console.dir(document.querySelector("div .oldImg"));
//querySelectorAll gives all matching resusts in form of node list
console.dir(document.querySelectorAll("div .oldImg"));
//

//using properties and methods

console.dir(document.querySelector("p").innerText);
let para = document.querySelector("p");
// type console.dir(para)
// type para.innerText
// type para.innerHTML
// type para.textContent

// type console.dir(para)
// type console.dir(para)

let head = document.querySelector("h1");

let img = document.querySelector("#mainImg");

// img.getAttribute("id")
// img.setAttribute("src","assets/creation_1.png")
// getAttribute and setAttribute are also known as getters and setters
// setAttribute has 2 values --1.selecting attribute 2.giving value to attribute

// changing style values.................
// head.style.color = "#ff0"
let links = document.querySelectorAll(".box a");

for (link of links) {
    link.style.color = "green";
}
//this styling method is generally not used
//it applies style as inline style on html itself
//values given on style.css is not visible in it

head.classList.add("green");//add a class
head.classList.remove("green");//remove existing class
head.classList.contains("green")//to check if class exists//false boolean value returns
head.classList.toggle("green")//basically a switch//if exists-removes//if not exists-adds//gives boolean value t/f
