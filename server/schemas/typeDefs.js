const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
}

type Album {
    albumId: String
    albumTitle: String
    image: String
    link: String
    artist: [String]
}

input AlbumInput {
    albumId: String
    albumTitle: String
    artist: String
    image: String
    link: String
}

# NEED AUTH TYPE FOR AUTHENTICATION

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    replies: [Reply]
}

type Query {
        users: [User]
        user(username: String!): User
        albums: [Album]
        comments(username: String!): Comment
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addComment(username: String!, commentText: String!): Comment
    addReply(username: String!, replyText: String!): Comment
    saveAlbum(albumData: AlbumInput!): User
    removeAlbum(albumId: String!): User
}
`;

module.exports = typeDefs;