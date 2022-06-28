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
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        }
    }
}; 

module.exports = resolvers;