import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from '../Components/LoginComponent';
import './Login.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="form-wrapper">
            <Container>
              <Login />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default App;