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
