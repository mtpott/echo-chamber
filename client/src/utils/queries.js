import { gql } from '@apollo/client';

//GET COMMENTS BY USERNAME

export const GET_ME = gql`
    query {
        me {
            _id
            username
            savedAlbums {
                albumId
                albumTitle
                image
                link
                artist
            }
            comments {
                commentId
                commentText
                createdAt
                replies {
                    commentId
                    replyText
                    username
                    createdAt
                }
            }
        }
    }
`;

//get all comments by username 
export const GET_COMMENTS = gql`
    query comments($username: String!) {
        comments(username: $username) {
            _id
            commentText
            username
            createdAt
            replies {
                _id
                commentId
                username
                createdAt
            }
        }
    }
`;