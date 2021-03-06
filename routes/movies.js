const express = require("express");
const {movies}=require("../controllers");
const {findMovie,validation} = require("../middlewares")

const router = express.Router();

router.get('/',movies.getMovies);
router.get('/:id', movies.getMovieById);

router.post('/',validation.title,findMovie.findMovie,movies.addMovie);

module.exports = router;