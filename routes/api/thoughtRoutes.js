const router = require('express').Router();
const { getThoughts, 
    createThought, 
    getSingleThought, 
    updateSingleThought,
    deleteThought
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getSingleThought).put(updateSingleThought).delete(deleteThought);

module.exports = router;