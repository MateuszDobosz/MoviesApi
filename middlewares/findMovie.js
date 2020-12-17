const axios = require("axios");

module.exports = {
     findMovie : async(req, res, next) => {
        const {title} =req.body;

        try{
            const response= await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`)
            const {data}=response;
            req.movie=data;
            data.Response === "True" ? next() : res.status(500).send({message:`There is no movie with name: ${title}`})
        }
        catch(error){
            res.status(500).send(error.message);
        }
    }
    }