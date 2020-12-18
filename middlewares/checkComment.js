const db=require('../models');

const Movie=db.Movie;

module.exports = {
     checkMovie : async(req, res, next) => {
        const {movieId}=req.body;
        if(movieId)
        {  try{
            const movie = await Movie.findOne({where:{id:movieId}})
            movie !== null ? next() : res.status(412).send({message:`Movie with id:${movieId} doesnt exist`})    
        }
        catch(error){
            res.status(500).send(error);
        }}
        else{
            res.status(412).send({message:"MovieId is required"})
        }
        },
    checkText: (req, res, next) => {
        req.body.text ? next() : res.status(412).send({message:"Text is required"})
    }
    }