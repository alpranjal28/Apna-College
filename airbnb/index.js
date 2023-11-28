const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../airbnb/models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
    .then(() => {
        console.log(`connected to DB`);
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/air");
}

app.get("/", (req, res) => {
    res.send("hi, i am root");
});

//app.get("/testListing", (req, res) => {
// let sampleListing = new Listing({
//     title: "my new billa",
//     description: "by the tree",
//     price: 1322,
//     location: "home",
//     country: "muktipara",
// });

// sampleListing
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// res.send(`successful`)
//});

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
});

app.listen(8080, () => {
    console.log(`server is listening to port 8080`);
});
