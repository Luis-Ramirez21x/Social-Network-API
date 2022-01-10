const router = require('express').Router();
const { getThoughts, 
    createThought, 
    getSingleThought, 
    updateSingleThought,
    deleteThought,
    addReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getSingleThought).put(updateSingleThought).delete(deleteThought);
router.route('/reaction/:id').post(addReaction);

module.exports = router;