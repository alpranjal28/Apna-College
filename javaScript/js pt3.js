console.log("JavaScript Part 3");

let msg= "       hello        ";



console.log(      msg.trim()     );


// console.log(prompt("your name"));
// str.toUpperCase() will display the output at all uppercase
//str.toLowerCase() --//--

let names = prompt("your name trimmed")
let named = names.trim();
console.log(names.toUpperCase());


// str.indexOf("arguement") will search the position of any character at first occurance
console.log(named.indexOf("l"));



// method chaining

let chain = names.trim().toUpperCase();
console.log(chain);


//slice method 
//1/ str.slice(start, end)
//2/ str.slice(start)
//3/str.slice(-num) => str.slice(length-num) 
// eg. -1 will give only last char of this 11char long string ie. g
let quote ="iLoveCoding";
console.log(quote.slice(1,5));
console.log(quote.slice(5));
console.log(quote.slice(-1));



//replace method
//str.replace(search, replaceWith)
console.log(quote.replace("Love", "Do"));



//repeat method
//str.repeat(numOfTimes)
console.log(quote.slice(5).repeat(3));




// assignment Qs
console.log(quote.trim().toUpperCase());


//arrays

let students = ["pranjal","shlesha"]
let table = ["two", 4, "six", 8, "ten"]

//str.push--adds new value after last index
table.push(12);
//str.pop--deletes from end and returns/displays it
//str.unshift--adds to the starting index [0] and moves the rest to subsequent indices//[0]a,[1]b-->[0]x,[1]a,[2]b
//str.shift--deletes the starting index [0] value and moves the rest to subsequent indices //[0]x,[1]a,[2]b-->[0]a,[1]b


//
//difference between slice and splice is --splice makes changes to original array and returns it
//str.splice();