//ROUTES: ADDUSER, GETUSER, SAVEALBUM, REMOVEALBUM, ADDCOMMENT, ADDREPLY LOGIN

//REQUIRE MIDDLEWARE FOR ROUTES THAT NEED IT (MY PAGE, ADDUSER, ADD COMMENT/REPLY, ADD/REMOVE ALBUM)
const { User } = require('../../models/User');

module.exports = {
    //find one user by id
    async getUser({ params }, res) {
        const user = await User.findOne({_id: params._id});

        if (!user) {
            return res.status(400).json({ message: "Can't find this user. Try again?" });
        }

        res.json(user);
    },
    //login user; find by email
    async login({ params }, res) {
        const user = await User.findOne({email: params.email});

        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password." });
        }

        const correctPw = await user.isCorrectPassword(params.password);

        if (!correctPw) {
            return res.status(400).json({ message: "Incorrect email or password." });
        }
        //SIGN TOKEN FOR EMAIL AUTHENTICATION
        res.json({ user });
    },
    //create new user
    async addUser({ username, email, password }, res) {
        const user = await User.create({ username, email, password });

        if (err) {
            return res.status(400).json({ message: "Something's wrong!" });
        }
        //SIGN TOKEN FOR AUTHENTICATION NEEDS TO BE ADDED WHEN FINALIZED
    },
    async saveAlbum({ user, body }, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $push: { albumData: body } },
                { new: true }
            )
            return res.json(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async removeAlbum({ user, params }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { albumData: { albumId: params.albumId } } },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find what you were looking for. Try again?" });
        }
        return res.json(updatedUser);
    }
};