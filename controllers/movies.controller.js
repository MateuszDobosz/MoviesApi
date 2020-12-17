const db=require('../models');

const Movie=db.Movie;

module.exports = {
    getMovies: async(req,res)=>{
        const {sortBy} =req.query
        let {orderBy}=req.query


        orderBy !== "desc" ? orderBy="asc" : orderBy="desc"
        try{
           const movies= await Movie.findAll(
           { order: [
                [sortBy || 'id',orderBy]
            ]}
           );
           res.status(200).json(movies);
        }
        catch(e){
            res.status(500).send(e);
        }
    },
    addMovie: async(req,res)=>{  
        const { Title,Year,Rated,Genre,Plot} = req.movie;  
        try{
            const [movie,status] = await Movie.findOrCreate({
                where: {title:Title,
                year:Year,
                rated:Rated,
                genre:Genre,
                plot:Plot}
            })
            status===true ? res.status(200).send(movie) : res.status(500).send({message:"This movie already exists in database"});
            
        }
        catch(error){
            res.status(500).send(error);
        }
    }
    }