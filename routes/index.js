
const express = require("express");
const moviesRoute = require('./movies');
const commentsRoute = require("./comments")

const router = express.Router();


router.use('/movies',moviesRoute);
router.use('/comments',commentsRoute)

module.exports = router;