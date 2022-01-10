const { User, Thoughts } = require('../models');

module.exports = {
    getUsers(req,res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    createUser(req,res){
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
                });
    },
    getSingleUser(req,res){
        User.findOne({userName:req.params.username})
            .select('-__v')
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No user found' })
                : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
    updateSingleUser(req,res){
        User.findOneAndUpdate({userName:req.params.username},{ $set: req.body },{ runValidators: true, new: true })
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No course with this id!' })
                : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    }
   
}