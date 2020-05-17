import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {UserForm} from './component/UserForm';
import Nav from './component/Nav';
import './App.css';
import Login from './component/Login';
import Header from './component/Shared/Header/header.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends Component {
  render()
  {
    return (
      <BrowserRouter>
    <div className="App">
      <Nav className="nav" />

      <Switch>
    <div className="wrapper">
    <div className="form-wrapper">
    <Container> 
      <Header/>
      <Route path="/" exact component={UserForm} />
      <Route path="/login" component={Login} />
     
    </Container>
    </div>
    </div>
    </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;