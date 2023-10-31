//call stack -- Last in First out

function hello() {
    console.log(`inside hello fn`);
    console.log("hello");
}

function demo() {
    console.log(`calling hello fn`);
    hello();
}

console.log(`calling demo fn`);
demo();
console.log(`done! bbye!`);

//

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

// JS is single threaded- meaning only 1 task at a time
// dealing with it is done via callbacks

setTimeout(() => {
    console.log(`Apna College`);
}, 2000); //here JS didnt wait for this function to complete

console.log(`hello......`); //and executed this code
//here JS didnt execute setTimeout but rather the browser holds it for JS
//and after set time returns the code to JS callStack
//where JS executes it
//this displays an asynchronous nature of JS which is generally synchronous

//callBack hell
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

function changeh1Color(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
//callBacks nesting -> callback hell
//hard to understand, bad method but used in production
//promises and async help prevent callback hell
changeh1Color("red", 1000, () => {
    changeh1Color("orange", 1000, () => {
        changeh1Color("blue", 1000, () => {
            changeh1Color("green", 1000);
        });
    });
});

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//     h1.style.color = "blue";
// }, 3000);

//example of callback hell

function saveToDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed >= 4) {
        success();
    } else {
        failure();
    }
}

saveToDB(
    "pranjal",
    () => {
        console.log("saved data to DB");
        saveToDB(
            "altherius",
            () => {
                console.log("saved data2 to DB");
                saveToDB(
                    "lakra",
                    () => {
                        console.log("saved data3 to DB");
                    },
                    () => {
                        console.log("failed connection");
                    }
                );
            },
            () => {
                console.log("failed connection");
            }
        );
    },
    () => {
        console.log("failed connection");
    }
);

//promises= promise object represents the eventual completion (or failure)
//          of an asynchronous operation and its resulting value

//example

function saveToDBMS(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data was saved");
        } else {
            reject("unable to save");
        }
    });
}

saveToDBMS("data1") //methods used in this object
    .then((result) => {
        console.log("data1 saved");
        console.log(result);
        return saveToDBMS("data2");
    }) //.then method chained
    .then((result) => {
        console.log("data2 saved");
        console.log(result);
        return saveToDBMS("data3");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log(result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(error);
    }); //.catch will grab error if any of the .then gets failed

//hange color function with the help of promises


function changeh2Color(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeh2Color("violet", 1000)
    .then(() => {
        console.log(`switched to color violet`);
        return changeh2Color("indigo", 1000);
    })
    .then(() => {
        console.log(`switched to color indigo`);
        return changeh2Color("blue", 1000);
    })
    .then(() => {
        console.log(`switched to color blue`);
        return changeh2Color("green", 1000);
    })
    .then(() => {
        console.log(`switched to color green`);
        return changeh2Color("yellow", 1000);
    })
    .then(() => {
        console.log(`switched to color yellow`);
        return changeh2Color("orange", 1000);
    })
    .then(() => {
        console.log(`switched to color orange`);
        return changeh2Color("red", 1000);
    })
    .then(() => {
        console.log("switched to color red");
    });
// .catch(()=>{
//     console.log("failed to change the color");
// })
