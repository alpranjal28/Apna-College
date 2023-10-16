const myself = {
    name: "pranjal",
    age: 26,
    eng: 78,
    hin: 98,
    mat: 74,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.hin + this.mat) / 3;
        console.log(avg);
        console.log(`${this.name} has obtained ${Math.ceil(avg)} percentage`);
    },
};


//try and catch are used to test codes if they work or not
// JS breaks in case of wrong code
console.log("knock");
console.log("knock");
try {
    console.log(hello);
} catch(err) {
    console.log("hi-wrong code--hello didnt work");
    console.log(err);
}
console.log("anybody there?");
console.log("anybody there?");