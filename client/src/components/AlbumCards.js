import React, {useState, useEffect} from "react";
// import { Container, Col, Row, Card, Button } from "react-bootstrap";


function AlbumCards() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a0f9c2e4cdmshbe352db2ac16675p113388jsne92dbdd69642',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

      fetch("https://spotify23.p.rapidapi.com/search/?q=%25a%25&type=albums&offset=100&limit=10&numberOfTopResults=5", options)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data.data.albums);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
    
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        getItems();
       
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <div className="card">
      <img className="card-img-top" src={item.coverArt} alt="" />
        <div className="card-body">
          <h1 className="card-albumName">{item.name}</h1>
          <h2 className="card-artist">{item.artists}</h2>
        </div>
    </div>
            // <li key={item.id}>
            //   {item.name} {item.price}
            // </li>
          ))}
        </ul>
      );
    }
  }


  export default AlbumCards;