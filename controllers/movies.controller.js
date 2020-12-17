const db=require('../models');

const Movie=db.Movie;

module.exports = {
    getMovies: async(req,res)=>{
        try{
           const data= await Movie.findAll();
           res.status(500).json(data);
        }
        catch(e){
            console.log(e);
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
            status===true ? res.status(200).send(req.movie) : res.status(500).send({message:"This movie already exists in database"});
            
        }
        catch(error){
            res.status(500).send(error);
        }
    }
    }