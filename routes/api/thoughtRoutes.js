const router = require('express').Router();
const { getThoughts, createThought } = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);
//router.route('/:username').post(createThought);

module.exports = router;