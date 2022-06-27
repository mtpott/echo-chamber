const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: 'A comment is required.',
            minlength: 1,
            maxlength: 400
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //FORMAT TIMESTAMP FOR DATE
        },
        username: {
            type: String,
            required: true
        },
        //REF TO REPLY SCHEMA; NESTED WITHIN COMMENT SCHEMA
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Comment = model('Comment', CommentSchema)

module.exports = Comment;