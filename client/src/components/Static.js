import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
import Image1 from "../images/fmac.PNG";
import Image2 from "../images/pink.png";
import Image3 from "../images/nirvana.jpg";
import Image4 from "../images/thriller.png";
import Image5 from "../images/abbey.jpg";


const StaticView = () => {

    return (
<Container align="center">
  <Row>

    <Col>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image1} />
  <Card.Body>
    <Card.Title>Fleetwood Mac</Card.Title>
    <Card.Text>
      Rumours
    </Card.Text>
    <Button variant="primary">Save Album</Button>
  </Card.Body>
</Card>

    </Col>

    <Col>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image2} />
  <Card.Body>
    <Card.Title>Pink Floyd</Card.Title>
    <Card.Text>
      The Dark Side of the Moon
    </Card.Text>
    <Button variant="primary">Save Album</Button>
  </Card.Body>
</Card>
    
    </Col>

  </Row>
  <Row>

    <Col>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image3} />
  <Card.Body>
    <Card.Title>Nirvana</Card.Title>
    <Card.Text>
      Nevermind
    </Card.Text>
    <Button variant="primary">Save Album</Button>
  </Card.Body>
</Card>
    
    </Col>

    <Col>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image4} />
  <Card.Body>
    <Card.Title>Michael Jackson</Card.Title>
    <Card.Text>
      Thriller
    </Card.Text>
    <Button variant="primary">Save Album</Button>
  </Card.Body>
</Card>
    
    </Col>

    <Col>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image5} />
  <Card.Body>
    <Card.Title>The Beatles</Card.Title>
    <Card.Text>
      Abbey Road
    </Card.Text>
    <Button variant="primary">Save Album</Button>
  </Card.Body>
</Card>
    
    </Col>

  </Row>
</Container>
    );
};

export default StaticView;