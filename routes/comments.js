const express = require("express");
const {comments}=require("../controllers");
const {validation} = require("../middlewares");


const router = express.Router();

router.get('/',comments.getComments);
router.get('/:id',comments.getCommentById)

router.post('/',validation.text,validation.movie, comments.addComment)


module.exports = router;