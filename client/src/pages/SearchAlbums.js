import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveAlbum, searchGoogleBooks } from '../utils/API';
import { saveAlbumIds, getSavedAlbumIds } from '../utils/localStorage';

const SearchAlbums = () => {
  // create state for holding returned google api data
  const [searchedAlbums, setSearchedAlbums] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved albumId values
  const [savedAlbumIds, setSavedAlbumIds] = useState(getSavedAlbumIds());

  // set up useEffect hook to save `savedAlbumIds` list to localStorage on component unmount
  useEffect(() => {
    return () => saveAlbumIds(savedAlbumIds);
  });

  // create method to search for albums and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const albumData = items.map((album) => ({
        albumId: album.id,
        artists: album.volumeInfo.authors || ['No artist to display'],
        title: album.volumeInfo.title,
        description: album.volumeInfo.description,
        image: album.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedAlbums(albumData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a album to our database
  const handleSaveAlbum = async (albumId) => {
    // find the book in `searchedAlbums` state by the matching id
    const albumToSave = searchedAlbums.find((album) => album.albumId === albumId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveAlbum(albumToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if album successfully saves to user's account, save album id to state
      setSavedAlbumIds([...savedAlbumIds, albumToSave.albumId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Albums!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a Album'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedAlbums.length
            ? `Viewing ${searchedAlbums.length} results:`
            : 'Search for a Album to begin'}
        </h2>
        <CardColumns>
          {searchedAlbums.map((album) => {
            return (
              <Card key={album.albumId} border='dark'>
                {album.image ? (
                  <Card.Img src={album.image} alt={`The cover for ${album.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{album.title}</Card.Title>
                  <p className='small'>Artist(s): {album.artists}</p>
                  <Card.Text>{album.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedAlbumIds?.some((savedAlbumId) => savedAlbumId === album.albumId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveAlbum(album.albumId)}>
                      {savedAlbumIds?.some((savedAlbumId) => savedAlbumId === album.albumId)
                        ? 'This Album has already been saved!'
                        : 'Save this Album!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchAlbums;
