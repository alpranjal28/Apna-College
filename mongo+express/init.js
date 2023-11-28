//to insert sample data //run once

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "neha",
        to: "pranjal",
        msg: "send me your noodles",
        created_at: new Date(),
    },
    {
        from: "shlesha",
        to: "pranjal",
        msg: "kya khaya?",
        created_at: new Date(),
    },
    {
        from: "papa",
        to: "pranjal",
        msg: "chalo khat banate h",
        created_at: new Date(),
    },
    {
        from: "mom",
        to: "pranjal",
        msg: "kaha ho jaldi aao",
        created_at: new Date(),
    },
    {
        from: "gandi aurat",
        to: "pranjal",
        msg: "kya hua?",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats)
