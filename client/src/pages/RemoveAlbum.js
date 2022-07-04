import React from 'react';
import { REMOVE_ALBUM } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';

import { removeAlbumId } from '../utils/localStorage';

//REACT BOOTSTAP FOR FRAMEWORK?

const MyAlbums = () => {
//FUNCTIONALITY FOR GET_ME
const { loading, data } = useQuery(GET_ME);

const myData = data?.me || {};

const [removeAlbum, { error }] = useMutation(REMOVE_ALBUM);

const handleRemoveAlbum = async (albumId) => {
        //AUTH FUNCTIONALITY REQUIRES TOKEN
    
        try {
            await removeAlbum({
                variables: { albumId }
            });
            //REMOVE ALBUM FUNCTIONALITY
            removeAlbumId(albumId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
        
        <h1>Saved Albums</h1>

        <h2>
            {myData.savedAlbums?.length
            ? 'Viewing your saved albums:' : 'You have no saved albums!'}  
        </h2>
        <div>
            {/* {myData.savedAlbums?.map((album) => {
                return (
                    {album.image ? <img src={album.image} alt={`Album art for ${album.title}.`}
                TITLE: {album.title}
                ARTIST: {album.artist}
                <btn className='remove-btn' onClick={() => handleRemoveAlbum(album.albumId)}>Remove from your list?</btn>
                );
            })} */}
            {error && <p>Something went wrong.</p>}
        </div>
        </>
    )
}

export default MyAlbums;