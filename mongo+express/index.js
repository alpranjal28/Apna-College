const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//connection to mongoose as async function thrfr logs after port8080
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(8080, () => {
    console.log(`listening to port 8080`);
});