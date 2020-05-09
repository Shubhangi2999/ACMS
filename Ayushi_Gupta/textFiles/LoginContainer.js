import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {login} from './component/login';
import './App.css';

class App extends Component {
  render()
  {
    return (
    <div className="App">
    <div className="wrapper">
    <div className="form-wrapper">
    <Container> 
      <login />
    </Container>
    </div>
    </div>
    </div>
  );
  }
}
export default App;