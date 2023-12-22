const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// Index route
router.get("/", wrapAsync(listingController.index));

//new route//form
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

//Show route
router.get("/:id", wrapAsync(listingController.showListing));

//create route//add to DB
router.post(
    "/",
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
);

//edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderUpdateForm)
);

// update route
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
);

//delete route
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
);

module.exports = router;
