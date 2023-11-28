const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default:
            "https://images.pexels.com/photos/11336341/pexels-photo-11336341.jpeg",
        set: (v) =>
            v === ""
                ? "https://images.pexels.com/photos/11336341/pexels-photo-11336341.jpeg"
                : v,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
