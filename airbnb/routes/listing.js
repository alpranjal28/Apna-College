const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details
            .map((el) => {
                el.message;
            })
            .join(",");
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

// router.post(
//     "/listings/:id/reviews", //validateReview,
//     wrapAsync(async (req, res) => {
//         let listing = await Listing.findById(req.params.id);
//         let newReview = new Review(req.body.review);

//         listing.reviews.push(newReview);

//         await newReview.save();
//         await listing.save();

//         console.log("new review saved");
//         res.redirect(`/listings/${listing._id}`);
//     })
// );

// Index route
router.get(
    "/",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});
        res.render("./listings/index.ejs", { allListings });
    })
);

//new route
router.get(
    "/new",
    wrapAsync(async (req, res) => {
        res.render("./listings/new.ejs");
    })
);

//Show route
router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        res.render("./listings/show.ejs", { listing });
    })
);

//create route
router.post(
    "/",
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

//edit route
router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("./listings/edit.ejs", { listing });
    })
);

// update route
router.put(
    "/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        res.redirect(`/listings/${id}`);
    })
);

//delete route
router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log("deleted listing", deletedListing);
        res.redirect("/listings");
    })
);

module.exports = router;
