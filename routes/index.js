
const express = require("express");
const moviesRoute = require('./movies.js');


const router = express.Router();


router.use("/movies",moviesRoute);

module.exports = router;