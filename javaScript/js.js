console.log("hello! world!");
let a = 10;
let b = 20;
console.log("The total price is :", a+b, "rupees");





let c ="the total price is : " + (a + b) + " rupees";
console.log(c);




let d = `the total price is : ${ a + b } rupees`;
console.log(d);

a = 30;
console.log(d);

//enter age here
let age = 18;
console.log(age>=18);
console.log(age==18);
//       !=   not equal to
//       ==    equal to



console.log("before my if statement");
if (age>=18){
    console.log("you can vote");
}
else if(age<18){
    console.log("you are a child");
}

//enter name her
//case sensitive
let firstName = "pranjal";
if (firstName=="Pranjal"){
    console.log(`Welcome ${firstName}`);
}else if(firstName!="Pranjal"){
    console.log(`Welcome User`);
}



//enter light code red/yellow/green here
//else works when all if's are not met
let light="red";
if (light==="red"){
    console.log("stop here");
}
else if (light=="yellow"){
    console.log("slow down");
}
else if (light=="green"){
    console.log("you can go");
} 
else {
    console.log("chaos activated");
}


//popcorn price finder, select size S/M/L/XL uppercased
let size = "S";
if (size=="S"){
    console.log("Rs.50/-");
}else if (size=="M"){
    console.log("Rs.100/-");
}else if (size=="L"){
    console.log("Rs.200/-");
}else if (size=="XL"){
    console.log("Rs.250/-");
}else{
    console.log("select size");
}



//nested, enter number 1-100
let marks ="90";

if (marks >= "33"){
    console.log("passed");
    if (marks >= 85) {
        console.log("outstanding");
    }
    else if(marks>=80){
        console.log("good");
    }
}else{
    console.log("better luck next time");
}


//logical operators 


//checking multiple variables
// output only when all conditions are met -----&&
// output when either of the conditions are met-----||
// marks and new variable percent used here
let percent= 28;

if (marks>= 33 && percent>=78 ) {
    console.log("pass");
    console.log("excellent");
}

// not "!", reverses the condition 
// eg. !(5>3), the output will be "false" 
// eg. !true=false, !false=true

if(!(percent>=50)){
    console.log("fail");
}









//practice Q- good string starts with letter 'a' and has a length >3.

let string= "Bqqq";

if((string[0]=="a"||string[0]=="A") && (string.length>3)){
    console.log("yes, it's a good string");
}
else{
    console.log("No, it's a bad string");
}


//last letter of string and str should match
let str="barbecue"; 
if((str[str.length]) == (string[string.length])){
    console.log("matched");
}else{
    console.log("not matched");
}





//practice Q- 

let numb= 12;

if((numb%3===0)&&((numb+1==15)||(numb-1==11))){
    console.log("safe");
}
else{
    console.log("unsafe");
}


//everything in JS is true or false(in boolean context)
//falsy values---false,0,-0,""(empty string),null,undefined,NaN
//truthy values---true,1,Everything else

if("yaay"){
    console.log("it has true value");
}else{
    console.log("it has false value");
}





//switch
//break is necessary to separate switches
let color="red";

switch (color){
    case"red": console.log("stop");
        break;
    case"yellow": console.log("slow down");
        break;
    case"green": console.log("go");
        break;
    default:console.log("broken light");
}




//practice Q--use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.




let date=6;

switch (date) {
    case 1: console.log("monday");      
        break;
    case 2: console.log("tuesday");   
        break;
    case 3: console.log("wednesday");    
        break;
    case 4: console.log("thursday");     
        break;
    case 5: console.log("friday");       
        break;
    case 6: console.log("saturday");       
        break;
    case 7: console.log("sunday");       
        break;
    default :console.log("undefined date");
        break;
}

//alert
// alert("something is correct");
console.error("this works");
console.warn("im learning");



//prompt
// let newName= prompt("enter your name")
// console.log(newName);

// let name1 = prompt("firstName")
// let name2 = prompt("secondName")
// let name3 = prompt("surName")

// console.log(`Welcome ${name1} ${name2} ${name3}`);
// alert(`Welcome ${name1} ${name2} ${name3}`)




//assignment
let div = 110;
if ((div%10)==0){
    console.log("good")
}else{
    console.log("bad");
}




