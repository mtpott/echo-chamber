import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'


const Navigation = () => {

    return (
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" align="left">EchoChamber</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#lucky">Feeling Lucky?</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navigation;