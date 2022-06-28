const { Schema, model } = require('mongoose');

const ReplySchema = new Schema (
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 400
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //FORMAT TIMESTAMP FOR DATE
        },
    },
    {
        id: false
    }
)

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
        replies: [ReplySchema],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Comment = model('Comment', CommentSchema)

module.exports = Comment;