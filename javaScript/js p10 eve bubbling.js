let ul = document.querySelector("ul");
let li = document.querySelector("li");

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

li.addEventListener("click", function (event) {
    event.stopPropagation();
    //this prevents multiple EvLi to trigger 
    //child
    console.log("li was clicked");
});
