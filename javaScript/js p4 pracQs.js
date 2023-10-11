//Q1

let arr = [1,2,3,4,5,6,2,3]
console.log(arr);
let del= 2;
console.log(`delete number - ${del}`);
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==del){
        arr.splice(i, 1);
    }    
}
console.log(arr);

//Q2
let num = 564987132
let count = 0;

let copy = num;

while (copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//Q3      ????????
let sum = 0;
let copy1= num;
while(copy>0){
    digit = copy1 % 10;
    sum+=digit;
    copy1= math.floor(copy/10);
}
console.log(sum);


//Q4 
// Eg 
// 7! (factorialof7)=1x2x3x4x5x6x7=5040
// 5! (factorialof5)=1x2x3x4x5=120
// 3! (factorialof3)=1x2x3=6
// 0! Is always 1
let n=5;
let factorial=1;

for(let i=1; i<=n; i++){
    factorial *=i;
}

console.log(`factorial of ${n} is ${factorial}`);

//Q5
// let arr 
let largest= 0;

for(let i=0; i<=arr.length;i++){
    if (largest < arr[i]){
        largest = arr[i]
    }
}
console.log(largest);