const { User, Thoughts } = require('../models');

module.exports = {
    getThoughts(req,res){
        Thoughts.find()
                .then((thoughts) => res.json(thoughts))
                .catch((err) => res.status(500).json(err));
    },
    createThought(req,res){
        Thoughts.create(req.body)
                .then((thought) => {
                    return User.findOneAndUpdate(
                    { userName: req.body.userName },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                    );
                })
                .then((user) =>
                    !user
                    ? res.status(404).json({ message: 'Thought created, but found no user with that ID' })
                    : res.json('Created the post 🎉')
          )
                .catch((err) => {
                    console.log(err);
                    return res.status(500).json(err);
                    });
    }

}