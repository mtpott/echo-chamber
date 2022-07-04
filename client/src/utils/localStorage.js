//return savedAlbumIds if found; if not, return an empty array
export const getSavedAlbumIds = () => {
    const savedAlbumIds = localStorage.getItem('my_saved_albums') ? 
    JSON.parse(localStorage.getItem('my_saved_albums')) : [];

    return savedAlbumIds;
}

//
export const saveAlbumIds = (albumIdArr) => {
    if (albumIdArr.length) {
        localStorage.setItem('my_saved_albums', JSON.stringify(albumIdArr));
    } else {
        localStorage.removeItem('my_saved_albums');
    }
};

//get the array of saved albums and remove the selected id from the array
export const removeAlbumId = (albumId) => {
    //if there is an item corresponding to the 'my_saved_albums' array in localStorage, parse it. if not, return null.
    const mySavedAlbumIds = localStorage.getItem('my_saved_albums') ? JSON.parse(localStorage.getItem('my_saved_albums')) : null;

    if (!mySavedAlbumIds) {
        return false;
    }

    //if after returning the existing array, filter out the chosen albumId and remove it from the array
    const updatedMyAlbums = mySavedAlbumIds?.filter((savedAlbumId) => savedAlbumId !== albumId);
    localStorage.setItem('my_saved_albums', JSON.stringify(updatedMyAlbums));

    return true;
}