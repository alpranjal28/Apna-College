// Q1
let arr = [2, 2, 2, 2, 2];

const square = arr.map((num) => num * num);
console.log(square);

let total = square.reduce((sum, el) => sum + el, 0);
console.log(total);

let avg = total / arr.length;
console.log(avg);

// Q2
let arrMap = arr.map((el) => el + 5);
console.log(arrMap);

// Q3
let fam = ["ajit", "sarojini", "shlesha", "pranjal"];
console.log(fam.map((el) => el.toUpperCase()));

// Q4
const doubleAndReturnArgs = (a, ...b) => [
    ...a,
    ...b.map((el) => el * 2),
];
console.log(doubleAndReturnArgs(fam,...arr));;

// Q5
const student1 = {
    a: "pranjal",
    b: 12,
    c: 18,
    d: 74,
};
const student2 = {
    e: "chiranjeev",
    f: 12,
    g: 18,
    h: 76,
};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects(student2, student1));
