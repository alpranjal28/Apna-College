// LOOPS--"for loop" , "while loop" & "for of loop"

// NOTE: infinite loops are bad-- always check for conditions

// "for" loops

 
for(let i=0; i<=16; i++){
    console.log(i);
}

for( let j=15; j>=0; j=j-1){
    console.log(j);
    if(j%2==0){
        console.log(`even number ${j}`);
    }else{
        console.log(`odd number ${j}`);
    }
}
console.log("                               odd numbers");
for(i=1; i<=45; i=i+2){
    if(i%2!=0){
        console.log(`odd number :${i}`);
    }
}

console.log("                          odd numbers descending");

for(j=45; j>=0; j=j-2){
    if(j%2!=0){
        console.log(`descending odd number :${j}`);
    }
}




console.log(`                                even numbers`);
for (i=2;i<=45;i=i+2){
    if(i%2==0){
        console.log(`even number :${i}`);
    }
}

console.log(`                              descending even number`);
for(j=44; j>=0; j=j-2){
    if(j%2===0){
        console.log(`descending even number :${j}`);
    }
}

//table
// let n = prompt(`table of`);
let n = prompt(`table of `);
n = parseInt(n);//this method converts a string into integer
for(let i = n; i<=n*10; i=i+n){
    console.log(i);
    // if(i%5==0){
    //     console.log(i);
    // }
}

console.log(`nested loop`);
//nested loops
for(let i=1; i<=5; i++){
    console.log(`outer loop ${i}`);
    
    for(j=1; j<=5; j++){
        console.log(j);
    }
}

//"while" loops
console.log(`                                     while loop`);
while (n<=10){
    console.log(n);
    n++;
}




//breaks
console.log(`break keyword`);

while (n<=20){
    if(n==15){
        break;
    }
    console.log(n);
    n++;
}
console.log("we used break at 15");




//
//loops with arrays
//

console.log(`fruit basket`);
let fruits = ["mango","apple","banana","litchi","orange"];
fruits.push("pineapple")
// try odd/even/all

console.log(`odd`);
for(i=1; i<fruits.length; i=i+2){
    console.log(i, fruits[i]);
}
console.log(`even`);
for(i=0;i<fruits.length;i=i+2){
    console.log(i,fruits[i]);
}
console.log(`all`);
for(i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
console.log(`reverse order`);
for(i=fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}




//nested loops with nested arrays

let heroes = [["ironMan","spiderMan","thor"],["superMan","batMan","wonderWoman"]];

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i]);
    
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}



//
//for of loop
//

for(fruit of fruits){
    console.log(fruit);
}
// here a new variable fruit is created before "of" for individual items of array


for(list of heroes){
    for(hero of list){
    console.log(hero);
    }
}

//nesting-- [[00,01,02],[10,11,12]]
