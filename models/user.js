const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true,
          },
        email:{
            type: String,
            required:true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
        //why is there an id property?
    }
);

/* virtual to be tested with seeds data
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})
*/

const User = model('User', userSchema);

module.exports = User;