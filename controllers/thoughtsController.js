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
    },
    getSingleThought(req,res){
        Thoughts.findOne({_id:req.params.id})
                .then((thought) => res.json(thought))
                .catch((err) => res.status(500).json(err));
    },
    updateSingleThought(req,res){
        Thoughts.findByIdAndUpdate({_id:req.params.id},{ $set: req.body },{ runValidators: true, new: true })
                .then((thought) =>
                    !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req,res){
        Thoughts.findOneAndDelete({_id:req.params.id})
                .then((thought) =>
                    !thought
                    ? res.status(400).json({message:"That thought already does not exsist"})
                    :res.json({message:"Thought has been deleted"})
                )
                .catch((err) => res.status(500).json(err));
    }

}