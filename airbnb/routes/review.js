const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log(error);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

//post reviews route
//

router.post(
    "/",
    validateReview,
    wrapAsync(async (req, res) => {
        console.log("review of", req.params.id); //
        let listing = await Listing.findById(req.params.id);
        let newReview = new Review(req.body.review);

        listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();

        console.log("new review saved");
        res.redirect(`/listings/${listing._id}`);
    })
);

//delete reviews route
router.delete("/:reviewId", async (req, res) => {
    // res.send("working")
    let { id, reviewId } = req.params;
    console.log(`delete request for`, req.params);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
});

module.exports = router;
