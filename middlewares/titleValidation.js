module.exports = {
     title: async(req, res, next) => {
        req.body.title ? next() : res.status(500).send({message:"Title is required"})
    }
    }