import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            # RETURN TOKEN ONCE AUTHENTICATION IS FINALIZED
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            # RETURN TOKEN ONCE AUTHENTICATION IS FINALIZED
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_ALBUM = gql`
    mutation saveAlbum($albumData: AlbumInput!) {
        saveAlbum(albumData: $albumData) {
            _id
            email
            username
            savedAlbums {
                albumId
                albumTitle
                image
                link
                artist
            }
        }
    }
`;

export const REMOVE_ALBUM = gql`
    mutation removeAlbum($albumId: albumId!) {
        removeAlbum(albumId: $albumId) {
            _id
            email
            username
            savedAlbums {
                albumId
                albumTitle 
                image
                link
                artist
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($commentText: String!, $username: String!) {
        addComment(commentText: $commentText, username: $username) {
            _id
            commentText
            createdAt
            username
            replies {
                _id
            }
        }
    }
`;

export const ADD_REPLY = gql`
    mutation addReply($username: String!, $replyText: String!) {
        addReply(username: $username, replyText: $replyText) {
            _id
            username
            replies {
                _id
                replyText
                createdAt
                username
            }
        }
    }
`;