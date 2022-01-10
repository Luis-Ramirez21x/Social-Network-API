const { User, Thoughts } = require('../models');

module.exports = {
    getThoughts(req,res){
        Thoughts.find()
                .then((thoughts) => res.json(thoughts))
                .catch((err) => res.status(500).json(err));
    },
    createThought(req,res){
        Thoughts.create(req.body)
                .then((thought) => res.json(thought))
                .catch((err) => {
                    console.log(err);
                    return res.status(500).json(err);
                    });
    }

}