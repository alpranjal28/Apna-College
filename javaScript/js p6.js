//print
function poem() {
    console.log(`ba ba baba black sheep, have you any wool??`);
}

poem("pranjal");

//dice roll
function dice(){
    let roll = Math.floor(Math.random()*6)+1
    console.log(roll);
}
dice();

//arguements inside (), 
//note--order of items is necessary
function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("shlesha", 23)



//automating a function with given variables
//eg--sum
function sum(a, b){
    console.log(a+b);
}
//add any numbers here
sum(12,78);

//practice Qs --avg of 3 num
function avg(a,b,c){
    console.log((a+b+c)/3);
}

// printing table 
function table(a){
    for (let i = a; i <= a*10; i+=a) {
        console.log(`${a} x ${i/a} = ${i}`);    
    }
}

//sum of factorial
function factorial(a){
    let sum = 0;
    for(let i=1; i<=a; i++){
        sum+=i;
    }
    // console.log(sum);
    return sum;
}

//practice Qs
let str = ["hi","how","are","you"]


function concat(str){
    let result="";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }

    return result;
}

//
// functions expression -- another way of writing functions

let hi= function(){
    console.log(`hello`);
}

let hello = function(a,b){
    console.log(a+b);
}

hello( `hey `, ` Pranjal`)


//
//types of scope 
//global scope--works in the entire js file eg. let/const directly defined
//functions scope-- works only under the function where it is defined
//lexical scope-- suppose there is a function which contains a variable and another function nested--the nested function can access the variable in parent function; but not vice versa bc-
//block scope-- functions and variables inside any curly braces{} cannot be accessed from the outside
//
// eg.

let greet = "hel lo"; //global scope

function changeGreet(){
    let greet = "na maste"; //function scope
    console.log(greet);
    let innerGreet = function(){
        console.log(greet); //lexical scope let the outer variable be used inside
        let hi = "hey"
    }
    innerGreet()
    console.log(hi);//block scope prevented inner variables to be used outside
}

console.log(greet);
changeGreet();


//higher order functions-- takes one or multiple functions as arguements

function multipleGreet(funct,n){
    for(let i=1; i<=n; i++){
        funct();
    }
}


let greeting = function(){
    console.log("hello");
}


multipleGreet(greeting, 5) // this function took another function as its arguement 

greeting();
greeting();
greeting();
greeting();




//
//
//
let odd = function(n){
    console.log(!(n%2==0));
}

let even = function(n){
    console.log(n%2==0);
}
//
//
let request; // we can request code for even or odd test
function oddOrEvenTest(request){
    if(request== "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
//
let funct = oddOrEvenTest("even");

console.log(funct); //this function now got the formulae for even number test
//try funct(8) , funct(11) ,funct(564856), etc.

//
//objects in functions are called methods ie. inside {}.
const calc={
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    },
    mul(a,b){
        return a*b
    }
};

console.log(calc);


//
// practice Qs 
//
let obj = {
    id: 76,
    name: "pranjal lakra",
    subject: "agriculture",
    class: "11th",
    city: "ambikapur",
    hobby: ["gym","gaming","coding"],
    marks:[
        {english: 88},
        {hindi: 78},
        {maths: 58},
        {agri: 83},
        {science: 79},
    ]
}
let arr= [7,59,1,23,456,87,79,2,312,74,856,123];
let num= 10;
//Q1- write a JS Fn that returns array elements larger than a number.
function lar(arr,num){
    for(let i=0; i<arr.length; i++){
        if (arr[i]>num){
            console.log(arr[i]);
        }
    }
}

lar(arr,num);

// Q2- write a JS Fn to extract unique characters from a string. ?????????
let string = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"

let unique = function(string){
    let ans="";
    for(let i=0;i<string.length;i++){
        let currChar = string[i];
        if(ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
unique(string);


//Q3- write a JS Fn that accepts a list of country names as input and returns the longest country name as output.
let countries = ["india","australia","united arab emirates","argentina","thailand","indonesia","united states of america"];
function length(countries){
    let ansIdx=0;
    for(let i=0;i<countries.length;i++){
        let ansLen= countries[ansIdx].length;
        let currLen= countries[i].length;
        if(currLen>ansLen){
            ansIdx = i;
        }
    }
    return countries[ansIdx];
}
length(countries);


// Q4--write a JS Fn to count the no of vowels in a string arguement.
function vow(string){
    let count = 0;
    for(let i=0; i< string.length;i++){
        if(
            string.charAt(i) == "a" ||
            string.charAt(i) == "e" ||
            string.charAt(i) == "i" ||
            string.charAt(i) == "o" ||
            string.charAt(i) == "u"
        ){
            count++
        }
    }
    return count;
}


// Q5--write a JS Fn to generate a random no within a range (start, end)
let start = 100;
let end =200;
function randBtw(start,end){
    let diff= end-start;
    return Math.floor(Math.random()* diff) + start;
}

randBtw();