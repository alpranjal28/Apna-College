let num = prompt(`enter the maximum number`);
console.log(`max number entered--${num}`);

let rn = Math.floor(Math.random()* num) +1;

console.log(`random number generated ${rn}`);
let guess = prompt(`Now guess the number`)

while(true){
    if(guess=="quit"){
        console.log(`you quit the game`);
        break;
    }

    if(guess==rn){
        console.log(`You are right! the answer is ${rn}`);
        break;
    }else if(guess<rn){
        guess = prompt(`your guess was wrong! Try a higher number!`)
    }else if(guess>rn){
        guess = prompt(`your guess was wrong! Try a lower number!`)
    }
}



// for (let i = 0; i <= num; i++) {
//     if(i==rn){
//         console.log("congrats you guessed right");
//     }else if(i!=rn){
//         console.log("sorry try again");
//     }
    
// }