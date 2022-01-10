const router = require('express').Router();

const { getUsers, createUser, getSingleUser, updateSingleUser } = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);
router.route('/:username').get(getSingleUser).put(updateSingleUser);

module.exports = router;