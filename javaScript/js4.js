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
















