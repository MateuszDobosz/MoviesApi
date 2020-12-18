const db=require('../models');

const Comment=db.Comment;

module.exports = {
    getComments: async(req,res)=>{
        try{
            const comments = await Comment.findAll();
            res.status(200).json(comments);
        }
        catch(error){
            res.status(500).send(error);
        }
    },
    getCommentById: async(req,res)=>{
        const {id}=req.params;
        try{
            const comments = await Comment.findAll({where:{movieId:id}})
            res.status(200).json(comments);
        }
        catch(error){
            res.status(500).send(error)
        }
    },
    addComment: async(req,res)=>{
        console.log("ADDCOMMENT")
        const {text}=req.body;
        const {movieId}=req.body;
        try{
            const comment = await Comment.create(
               {
                  movieId,
                  text 
               } 
            )
           res.status(201).json(comment);
        }
        catch(error)
        {
            res.status(500).send({message:`Movie with id: ${movieId} doesnt exist.`});
        }
    }
}