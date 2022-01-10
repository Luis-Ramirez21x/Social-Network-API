const router = require('express').Router();
const { getThoughts, 
    createThought, 
    getSingleThought, 
    updateSingleThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getSingleThought).put(updateSingleThought).delete(deleteThought);
router.route('/reaction/:id').post(addReaction);
router.route('/reaction/:id/:reactionId').delete(deleteReaction);

module.exports = router;