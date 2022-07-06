import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deleteAlbum } from '../utils/API';
import Auth from '../utils/auth';
import { removeAlbumId } from '../utils/localStorage';

const SavedAlbums = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('Oh no!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the albums's mongo _id value as param and deletes the album from the database
  const handleDeleteAlbum = async (albumId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteAlbum(albumId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove album's id from localStorage
      removeAlbumId(albumId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved Albums!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedAlbums.length
            ? `Viewing ${userData.savedAlbums.length} saved ${userData.savedAlbums.length === 1 ? 'album' : 'albums'}:`
            : 'You have no saved Albums!'}
        </h2>
        <CardColumns>
          {userData.savedAlbums.map((book) => {
            return (
              <Card key={album.albumId} border='dark'>
                {album.image ? <Card.Img src={album.image} alt={`The cover for ${album.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{album.title}</Card.Title>
                  <p className='small'>Artist(s): {album.artists}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteAlbum(album.albumId)}>
                    Delete this Album!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedAlbums;
