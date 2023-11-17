const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "pranjal",
        content: "i love coding",
    },
    {
        username: "ashutosh",
        content: "i love agriculture",
    },
    {
        username: "venkatesh",
        content: "i love commerce",
    },
];

app.listen(port, () => {
    console.log("listening to port :", port);
});

app.get("/posts", (req, res) => {
    res.send(`server is working well`);
});
