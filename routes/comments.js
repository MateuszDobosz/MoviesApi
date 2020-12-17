const express = require("express");
const {comments}=require("../controllers");


const router = express.Router();

router.get('/',comments.getComments);
router.get('/:id',comments.getCommentById)

router.post('/',comments.addComment)


module.exports = router;