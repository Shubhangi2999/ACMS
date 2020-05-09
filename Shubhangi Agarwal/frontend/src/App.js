import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {UserForm} from './component/UserForm';
import './App.css';
import Header from './component/Shared/Header/header.component';

class App extends Component {
  render()
  {
    return (
    <div className="App">
    <div className="wrapper">
    <div className="form-wrapper">
    <Container> 
      <Header/>
      <UserForm />
    </Container>
    </div>
    </div>
    </div>
  );
  }
}

export default App;
