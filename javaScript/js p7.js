const myself = {
    name: "pranjal",
    age: 26,
    eng: 78,
    hin: 98,
    mat: 74,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.hin + this.mat) / 3;
        console.log(avg);
        console.log(`${this.name} has obtained ${Math.ceil(avg)} percentage`);
    },
};

//try and catch are used to test codes if they work or not
// JS breaks in case of wrong code
console.log("knock");
console.log("knock");
try {
    console.log(hello);
} catch (err) {
    console.log("hi-wrong code--hello didnt work");
    console.log(err);
}
console.log("anybody there?");
console.log("anybody there?");

// arrow function (different from normal function but works same)
// its main function is to make funtions compact
// (a,b=>(/{      }/)
const sum = (a, b) => {
    console.log(a + b);
};
//try-- sum(78,12)

const power = (a, b) => {
    return a ** b;
};
//try-- power(12,3)

// if the function has just one value to return,
// then no need to write 'return'
// use (parenthesis) instead of {curlybraces}
const mul = (a, b) => a * b;
//try mul(78,62)

//
// set timeout--an independent countdown after which Fn will execute
//
console.log(`Hi! there`);
setTimeout(() => {
    //empty arrow function
    console.log(`Apna College`);
}, 2000);//time in millisecond-- 1s == 1000ms
console.log(`Welcome to`);

//
// set interval--will repeat function in a loop
//same as set timeout
//time in millisecond-- 1s == 1000ms

// let id1 = setInterval(() => {
//     console.log(`SKiLlSs`);
// }, 3000);

// let id2 = setInterval(() => {
//     console.log(`maTTer`);
// }, 4000);

//to stop this loop, try--
// clearInterval(id);
// clearInterval(id2)

//
//practice Q1
const sqr= (a)=>(
    a*a
)
//practice Q2
let loop = setInterval(()=>(
    console.log(`hello`)
    ),2000)
setTimeout(()=>{
    clearInterval(loop);
    console.log(`clear interval injected`);
},10000)

//HW practice Qs

let arrAvg = (a,b,c)=>(
    (a+b+c)/3
)
console.log(arrAvg(1,2,3));

let isEven=(a)=>(
    a%2==0
) 

console.log(isEven(3));