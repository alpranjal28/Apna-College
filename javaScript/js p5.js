//object literals

const post = {
    name: "@pranjal",
    age: "peaceful Hamas /s",
    likes: 66,
    reposts: 14,
    tags: ["#israel", "#war", "#palestine","#terrorists"]
};

// nested object literals 
const class4 ={
    aditya: {
        grade: "b+",
        city: "jashpur"
    },
    aman: {
        grade: "a",
        city: "jashpur"
    },
    ayushi: {
        grade: "a+",
        city: "n/a"
    }

}

const class7 =[
    {
        name: "aman",
        grade: "b+"
    },
    {
        name:"aditya",
        grade: "b"
    },
    {
        name: "ayushi",
        grade: "a"
    }
]

//most commonly used math object is Math.random() which give value from 0 to 0.9999... and not 1 at random
// random num 1 to 100 here -- multiplied by 100
Math.floor(Math.random()*100)+1
// random num 1 to 5 here -- multiplied by 5
let num = Math.floor(Math.random() * 5) +1;