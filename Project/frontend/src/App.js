import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UserForm } from './component/UserForm';
import Nav from './component/Nav';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Shared/Header/header.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav className="nav" />
          <Switch>
            <div className="wrapper">
              <div className="form-wrapper">
                <Container>
                  <Header />
                  <Route exact path="/" exact component={UserForm} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/dashboard" component={Dashboard} />
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