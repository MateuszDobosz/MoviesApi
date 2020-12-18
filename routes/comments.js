const express = require("express");
const {comments}=require("../controllers");
const {checkComment} = require("../middlewares");


const router = express.Router();

router.get('/',comments.getComments);
router.get('/:id',comments.getCommentById)

router.post('/',checkComment.checkMovie,checkComment.checkText, comments.addComment)


module.exports = router;