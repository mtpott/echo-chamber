const { User, Comment } = require('../models');

const resolvers = {
    Query: {
        //get all users
        users: async () => {
            return User.find()
        },
        //get one user
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        //get all comments by username
    },
    //login user
    //create user
    //save album
    //remove album
    //add comment
    //add reply
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        }
    }
}; 

module.exports = resolvers;