import React from 'react';
import { getAlbumData } from '../utils/API'; 

function Album() {
    const returnAlbumData = () => {
        const data = getAlbumData();
    
        return data;
      }

    return(
        <button className="btn" onClick={returnAlbumData}>api call!</button>
    )
}

export default Album;