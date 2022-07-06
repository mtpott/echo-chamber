// import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';
import Album from './components/Album';
=======
import "./App.css";
// import Album from "./components/Album";
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, Nav, Container } from 'react-bootstrap'
import Navigation from "./components/Nav";
import BgImage from "./components/Image";
// import AlbumCards from "./components/AlbumCards";
import StaticView from "./components/Static";
import Foot from "./components/Footer";


>>>>>>> feature/components

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <h1>api call</h1>
      <Album />
=======
      <Navigation/>
      <BgImage/>
      {/* <AlbumCards/> */}
      <StaticView/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Foot/>

      
      {/* <h1>api call</h1>
      <Album /> */}
>>>>>>> feature/components
    </div>
  );
}

export default App;
