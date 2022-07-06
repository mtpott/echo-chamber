// import logo from './logo.svg';
import "./App.css";
import Album from "./components/Album";
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, Nav, Container } from 'react-bootstrap'
import Navigation from "./components/Nav";
import BgImage from "./components/Image";
import AlbumCards from "./components/AlbumCards";



function App() {
  return (
    <div className="App">
      <Navigation/>
      <BgImage/>
      <AlbumCards/>

      
      <h1>api call</h1>
      <Album />
    </div>
  );
}

export default App;
