const router = require('express').Router();
const { getThoughts, createThought, getSingleThought, updateSingleThought } = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getSingleThought).put(updateSingleThought);

module.exports = router;