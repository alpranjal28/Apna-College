const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
//middleware that can parsedata as in urlencoded in POST request
app.use(express.json());
//middleware that can parse json in POST request

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`standard GET response ${user}`);
});//sensitive info gets passed via url

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(`standard POST response`);
});//sensitive info passed securely via body in req
