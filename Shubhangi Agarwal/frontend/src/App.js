import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Header from './components/Shared/Header/header.component';
import Footer from './components/Shared/Footer/footer.component';
import Register from './components/Register/register.component';

function App() {

  return (
    <div className="wrapper">
      <div className="form-wrapper">
    <Container> 
      
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      
      <div>
      <Row>
        <Col md={12}>
          <Register />
        </Col>
      </Row>
      </div>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
      
    </Container>
    </div>
    </div>
    
    
  );
}

export default App;