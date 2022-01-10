const router = require('express').Router();
const { 
    getUsers, 
    createUser, 
    getSingleUser, 
    updateSingleUser, 
    deleteUser, 
    addFriend,
    deleteFriend} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);
router.route('/:username').get(getSingleUser).put(updateSingleUser).delete(deleteUser);
router.route('/:username/:friendUserName').post(addFriend).delete(deleteFriend);

module.exports = router;