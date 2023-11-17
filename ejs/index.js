const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs"); //ejs internally aquired by express; no need to require
app.set("views", path.join(__dirname, "/views")); //__dirname gives current working dir of index.js

app.get("/", (req, res) => {
    // res.send("this is root/home")
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    // res.send("this is root/home")
    let rollDice = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { rollDice });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    // console.log(data);
    if (data) {
        res.render("insta.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log("listening on port -", port);
});
