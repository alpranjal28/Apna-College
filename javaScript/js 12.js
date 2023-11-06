//async function

async function greet() {
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise was successful", result);
    })
    .catch((err) => {
        console.log("promise was failure", err);
    });
//
// async can be used with arrow functions

let demo = async () => {
    return 5;
};

//await functions

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 2000);
    });
}

async function numDemo() {
    await getNum();
    await getNum();
    getNum();
}

//color change using async and await
//handling error using try and catch

let h1 = document.querySelector("h1");

function h1color(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log("color changed");
            resolve("color changed");
        }, delay);
    });
}

async function colorChange() {
    try {
        await h1color("red", 1000);
        await h1color("green", 1000);
        await h1color("blue", 1000);
        await h1color("orange", 1000);
        await h1color("pink", 1000);
    } catch (err) {
        console.log(err);
        console.log("error caught");
    }

    let a = 5;
    let b = a + 6;
    console.log(b); //this code will execute and not break even if
    //promise rejected due to
}

colorChange();

let jsons =
    '{"activity":"Write a poem","type":"recreational","participants":1,"price":0,"link":"","key":"8688620","accessibility":0}';

console.log(jsons);

let newjson = JSON.parse(jsons);
console.log(newjson);

let newstr = JSON.stringify(newjson);
console.log(newstr);

let url = "https://catfact.ninja/breeds";
fetch(url)
    .then((res) => {
        console.log(res);
        res.json().then((data) => {
            console.log(data);
        });
    })
    .catch((err) => {
        console.log(err);
    });
