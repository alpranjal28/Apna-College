let arr = [1, 2, 3, 4, 5];

//with arrow function
arr.forEach((el) => {
    console.log(`with arrow function`);
    console.log(el);
});

//with normal function
let print = function (el) {
    console.log(`with normal function`);
    console.log(el);
};
arr.forEach(print);

let arrObj = [
    {
        name: "pranjal",
        age: 26,
    },
    {
        name: "shlesha",
        age: 23,
    },
    {
        name: "avita",
        age: 26,
    },
];

arrObj.forEach((student) => {
    console.log(student.age);
});

//arr.map
let double = arr.map((el) => {
    return el * el;
});

let gpa = arrObj.map((el) => {
    return el.age / 10;
});

//arr.filter(some function definition or name)
let even = arr.filter((el) => {
    return el % 2 == 0; //even->true,, odd->false
});

let odd = arr.filter((el) => {
    return el % 2 != 0; //even->false,,odd->true
});

//arr.every---when all items return true
console.log(arr.every((el) => el % 2 == 0));

let evenNum = [2, 4, 6, 8, 10];
console.log(evenNum.every((el) => el % 2 == 0));

//arr.reduce---actually sums up and returns a value----------MDN
//arr.reduce((accumulator, currentItem)--(acc+curr)=acc2->(acc2+curr)->acc3....--------MDN
console.log(evenNum.reduce((tot, el) => tot + el));
// accumulator 0+2-> 2+4-> 6+6-> 12+8-> 20+10-> 30
//eg.
console.log(`example`);
console.log(
    evenNum.reduce((tot, el) => {
        console.log(tot);
        return tot + el;
    })
);
//finding max with reduce method
let max = evenNum.reduce((max, el) => {
    if (max < el) {
        return el;
    } else if (max > el) {
        return max;
    }
});
console.log(max);

//practice Qs--check if all numbers un our array are multiples of 10 or not
let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let check10 = ary.every((el) => el % 10 == 0);
console.log(check10);
//using reduce
function getMin(ary) {
    let min = ary.reduce((min, el) => {
        if (min > el) {
            return el;
        } else if (min < el) {
            return min;
        }
    });
    return min;
}

console.log(getMin(ary));

//default parameter
//eg.            function sum(a, b=5){
//                   return a+b;
//               };
// here b value is given a default value in case the 2nd number not provided

//spread ----->>(...array) i.e. 3 dots before array name
// when we access a lot of values say in an array or object
// which can be accessed individualy w/o making mustiple arguements
//eg.
//  try--Math.min(ary) //NaN
//  try--Math.min(...ary) //10
console.log(ary);
console.log(...ary);
console.log("apnaCollege");
console.log(..."apnaCollege");

//can also be used in following way
const hw = "hello world!";
console.log(hw);

const hlw = [...hw];
console.log(hlw);
//and to copy properties into a new variable

//rest (opposite to spread)
function numb(...arg) {
    //... before arguement can now take indefinite values, collect it and then process
    console.log(`You gave us : ${arg}`);
    for (let i = 0; i < arg.length; i++) {
        console.log(`They are : ${arg[i]}`);
    }
}
//try numb(1,5,8,96,4,7,8,64,1,2)

//destructuring
let names = ["pranjal", "shlesha", "avita", "kuldeep", "abc", "pqr", "xyz"];
let [winner, runnerUp, third, fourth, ...others] = names; // index 0,1,2,3 will be stored in the following from names

console.log(winner, runnerUp, third, fourth);
console.log(winner);
console.log(runnerUp);
console.log(third);
console.log(fourth);
console.log(others);

// destructuring Objects
let student = {
    name: "pranjal",
    class: 7,
    age: 12,
    subjects: ["english", "hindi", "math", "science"],
    username: "alpranjal28",
    password: "abc@123",
};

let { username, password } = student;
// variable name matched with key & got stored as such
console.log(username);
console.log(password);
// or
let { username: user, password: pass, city : place ="ambikapur" } = student;
//key named username/password/city was stored in variable user/pass/place
//default value ambikapur is set in case it is not provided
console.log(user);
console.log(pass);
console.log(place);