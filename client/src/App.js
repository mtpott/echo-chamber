// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Album from './components/Album';
import Profile from './components/profile/index';
import Navbar from './components/nav/index';
import SigninForm from './components/signin'; 
import SignupForm from './components/signup';
import {Container, Row, Col} from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router> */}




    <div className="cards">
      <h1>api call</h1>
      <Album />
      <Container>
  <Row className="rows">
    <Col className="columns">1 of 2</Col>
    <Col className="columns">2 of 2</Col>
    <Col className="columns">3 of 3</Col>
  </Row>
  <Row className="rows">
    <Col className="columns">1 of 3</Col>
    <Col className="columns">2 of 3</Col>
    <Col className="columns">3 of 3</Col>
    <Col className="columns">4 of 4</Col>
  </Row>
</Container>
    </div>

    </div>



  );

}


export default App;
