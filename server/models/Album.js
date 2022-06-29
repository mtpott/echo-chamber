const { Schema } = require('mongoose');

const albumSchema = new Schema(
    {
        albumTitle: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true,
        },
        artist: [
            {
                type: String
            }
        ]
    }
)

module.exports = albumSchema;