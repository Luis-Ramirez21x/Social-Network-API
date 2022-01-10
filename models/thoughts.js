const { Schema, model, Types } = require('mongoose');
//const { reactionSchema } = require('./reactions');
const reactionSchema = new Schema(
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody:{
            type: String,
            required: true,
            maxlength: 280,
        },
        userName:{
            type:String,
            required: true,
        },
        createdAt: {
            type: Date, default:Date.now,
            //use a get virtual to format date
        },
    }
);

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date, default:Date.now,
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