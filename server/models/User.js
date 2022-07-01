const { Schema, model } = require('mongoose');
//INSTALL BCRYPT

const UserSchema = new Schema(
   { 
       username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must match an email address!']
        },
        password: {
            type: String,
            minlength: 6
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//AUTH FOR PASSWORD
//virtual for comments
UserSchema.virtual('commentsList').get(function() {
    return this.comments.length;
})

const User = model('User', UserSchema);

module.exports = User;