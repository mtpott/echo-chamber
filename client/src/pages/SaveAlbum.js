import React, { useState, useEffect } from 'react';
import { SAVE_ALBUM } from '../utils/mutations';
import { useMutation } from '@apollo/client';

//IMPORT AUTH FOR TOKEN TO SAVE ALBUM


const SavedAlbum = () => {
    const [saveAlbum, { error }] = useMutation(SAVE_ALBUM);

    //SAVE ALBUMID TO STATE (local storage functionality)
    //const [savedAlbumId, setSavedAlbumId] = useState()

    // useEffect(() => {
    //     return () => saveAlbumId(savedAlbumId)
    // });


    const handleSaveAlbum = async(albumId) => {
        //album to save--> get albumId during onClick and add to localStorage
       //AUTH TOKEN FOR FUNCTIONALITY

       try {
           await saveAlbum({
               variables: { albumData: { ...albumToSave } }
           })
           //setSaveAlbumId([...savedAlbumId, albumToSave.albumId]);
       } catch (err) {
           console.error(err);
       }
    };

    return (
        <>
            <div className='album-cards'>
                <h1>Albums:</h1>
                {/* populate album cards. i will add this functionality later */}
                {/* <btn onClick{() => handleSaveAlbum(album.albumId)}>Save this album</btn> */}
                {error && <p>Something went wrong.</p>}
            </div>

        </>
    )
}

export default SavedAlbum;