// let m= prompt(guess my favourite movie)
let fm = `avengers`;
let g = prompt("guess movie")
while((g!=fm)){
    if (g=="quit"){
        console.log("no worries try again later");
        break;
    }
    g = prompt(`nope! guess again! or type quit`)   
}

if(g==fm){
    console.log(`congratulations! You guessed it`);
}

//else if(g=="quit"){
//     console.log("no worries try again later");
// }

