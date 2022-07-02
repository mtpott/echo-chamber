const { AuthenticationError } = require('apollo-server-errors');
const { User, Comment } = require('../models');

const resolvers = {
    Query: {
        //get me
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .populate('savedAlbums');

                return userData;
            }
            throw new AuthenticationError("You're not logged in.");
        },
        //get one user
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        //get all comments by username
        comments: async (parent, { username }) => {
            return Comment.find();
        }
    },
    Mutation: {
        login: async (parent, { email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Wrong email or password!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Wrong email or password!');
            }

            //ADD TOKEN FROM AUTH MIDDLEWARE FUNCTIONALITY FOR USER AUTHENTICATION
            //RETURN TOKEN AND USER
            return user;
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        //ADD COMMENT FUNCTIONALITY MUST BE FIXED; RETURNS NULL IN APOLLO SERVER
        addComment: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await Comment.create({ ...args });
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { comments: comment._id } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("Log in to leave a comment!");
        },
        addReply: async (parent, { comment }, context) => {
            if (context.user) {
                const updatedComment = await Comment.findByIdAndUpdate(
                    {_id: comment._id},
                    { $push: { comments: comment } },
                    { new: true }
                );
                return updatedComment;
            }
            throw new AuthenticationError("log in to reply to this comment.");
        },
        saveAlbum: async (parent, { albumData }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    //PUSH TO SAVED ALBUMS ARRAY
                    { $push: { savedAlbums: albumData }},
                    { new: true }
                )
                return updatedUser;
            }
            throw new AuthenticationError("Log in to save an album!");
        },
        removeAlbum: async (parent, { albumId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedAlbums: albumId } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("Log in to delete an album!");
        }
    }
}; 

module.exports = resolvers;