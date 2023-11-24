const mongoose = require("mongoose");

main()
    .then(() => {
        console.log(`connection successful`);
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// User.findByIdAndUpdate(
//     { _id: "6560c640f0a4cc99c20202c6" },
//     { age: 47 },
//     { new: true }
// )
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

User.updateMany({}, { role: "protectors of wall"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// User.insertMany([
//     { name: "sansa", email: "wannabeprincess@wall.com", age: 24 },
//     { name: "robb", email: "chainmail@wall.com", age: 28 },
//     { name: "eddard", email: "dadprotects@wall.com", age: 50 },
// ]).then((res) => {
//     console.log(res);
// });

// const user2 = new User({
//     name: "john",
//     email: "iknownothing@wall.com",
//     age: 25,
// });
// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
