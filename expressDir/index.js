const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("app is listening on port : ", port);
});

// app.use((req, resp) => {
//     console.log("request recieved");
//     resp.send({
//         fruit: "apple",
//         color: "red",
//     });
// });

//or

app.get("/", (req, res) => {
    console.log(`please enter your username and id after localhost:_ _ _ _/`);
    res.send(
        `<h1>please enter your localhost:3000/<u><i>username</i></u>/<u><i>id</i></u></h1>`
    );
}); // "/" gives a default value
app.get("/:username/:Id", (req, res) => {//path parameter/template
    let { username, Id } = req.params;
    console.log(req.params);
    let welStr = `<h1>welcome to your page ${username}</h1>`;
    res.send(welStr);
}); //go to localhost on hoppscotch with localhost:3000/anything, it will be logged in as username
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`search result for : ${q}`);
});
