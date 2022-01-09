const { Schema, model } = require('mongoose');
const {reactionSchema} = require('./reactions');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: date, default:Date.now,
            //use a get virtual to format date
             },
        userName:{
            type:String,
            required: true,
        },
        reactions:[reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
        
    }
);
/*
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactionSchema.length;
});
*/

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;