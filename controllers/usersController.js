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
            .populate('thoughts')
            .populate('friends')
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No user found' })
                : res.json(user)
      )
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
    updateSingleUser(req,res){
        User.findOneAndUpdate({userName:req.params.username},
            { $set: req.body },
            { runValidators: true, new: true })
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No course with this id!' })
                : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
    deleteUser(req,res){
        User.findOneAndDelete({userName:req.params.username})
            .then((user) =>
                !user
                ? res.status(400).json({message:"That user already does not exsist"})
                //might have to add code to delete associated thoughts as well
                : Thoughts.deleteMany({userName: {$in:user.thoughts}})
               
            )
            .then(() =>res.json({message:"User and associated thoughts have been deleted"})) 
            .catch((err) => res.status(500).json(err));    
    },
    addFriend(req,res){
        User.findOne({userName:req.params.friendUserName})
            .then((friendUser) => {
                return User.findOneAndUpdate({userName:req.params.username}, 
                    { $addToSet: { friends: friendUser._id } },
                    { new: true })
            })
            .then((user) =>
                    !user
                    ? res.status(404).json({ message: 'Friend not found' })
                    : res.json('Added Friend! 🎉')
            )
            .catch((err) => {
                    console.log(err);
                    return res.status(500).json(err);
                    });
    },
    deleteFriend(req,res){
        User.findOne({userName:req.params.friendUserName})
            .then((friendUser) => {
                return User.findOneAndUpdate({userName:req.params.username}, 
                    { $pull: { friends: friendUser._id } },
                    { new: true })
            })
            .then((user) =>
                    !user
                    ? res.status(404).json({ message: 'No friends with that username found' })
                    : res.json('Removed Friend')
            )
            .catch((err) => {
                    console.log(err);
                    return res.status(500).json(err);
                    });
    }
   
}