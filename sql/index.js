const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 8080;

//making connection with mySQL server
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Sail2boat3$_",
}); //valid database

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

//inserting new data

// let q = "INSERT INTO newuser (id,username,email,password) VALUES ? ";
// let data = [];
// for (i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// }

// let users = [
//     ["102", "1234_newuser", "1234@gmail.com", "abc"],
//     ["103", "12345_newuser", "12345@gmail.com", "abc"],
// ];

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }
// connection.end(); //connection does not closes automatically

// console.log(getRandomUser());

app.listen(port, () => {
    console.log("server is live on port : ", port);
});

app.get("/", (req, res) => {
    let q = `SELECT count(*) from newuser`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

app.get("/user", (req, res) => {
    let q = `SELECT * FROM newuser`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result[4]);
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM newuser WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
    // res.render("edit.ejs");
});

//update route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM newuser WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("wrong password");
            } else {
                let q2 = `UPDATE newuser SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});
