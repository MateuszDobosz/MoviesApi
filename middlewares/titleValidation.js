module.exports = {
     title: async(req, res, next) => {
        req.body.title ? next() : res.status(412).send({message:"Title is required"})
    }
    }