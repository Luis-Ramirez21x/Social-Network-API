const router = require('express').Router();
const { 
    getUsers, 
    createUser, 
    getSingleUser, 
    updateSingleUser, 
    deleteUser, 
    addFriend} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);
router.route('/:username').get(getSingleUser).put(updateSingleUser).delete(deleteUser);
router.route('/:username/:friendUserName').post(addFriend);

module.exports = router;