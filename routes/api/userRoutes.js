const router = require('express').Router();

const { getUsers, createUser } = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);
router.route('/:id').put()

module.exports = router;