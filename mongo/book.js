const mongoose = require("mongoose");

main()
    .then(() => {
        console.log(`connection successful`);
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amaxon");
}

//schema define
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        maxLength: [30,"Character length exceeds limit of 30"]
        //validation error message
    },
    price: {
        type: Number,
        default: 1,
        min: [1,"Price is too low for amaxon selling"]

    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
        // will only take one of these two values
    },
});

const Book = mongoose.model("Book", bookSchema);
//
let book1 = new Book({
    title: "Geography",
    author: "GC Leong",
    price: 350,
});
//
book1
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
