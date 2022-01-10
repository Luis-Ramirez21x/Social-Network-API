const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

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

module.exports = reactionSchema;