let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    let head = document.querySelector("h1");
    let randomColor = getRandomColor();
    head.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log(`color updated`);

    div.addEventListener("mouseenter",function(){
        console.log(`mouse entered div`);
    })
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
