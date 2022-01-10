const router = require('express').Router();
const { 
    getUsers, 
    createUser, 
    getSingleUser, 
    updateSingleUser, 
    deleteUser } = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);
router.route('/:username').get(getSingleUser).put(updateSingleUser).delete(deleteUser);

module.exports = router;