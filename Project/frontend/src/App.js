import React, { Component } from 'react';
import { UserForm } from './component/UserForm';
import Nav from './component/Nav';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Shared/Header/header.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './component/Shared/Header/amazon_logo.png';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path={['/', '/login']} exact component={() => <Nav className="nav" />} />
          <Switch>
            <div className="wrapper">
              <Route exact path={['/', '/login']} exact component={Header} />
              <Route exact path="/" exact component={props => withFormWrapper(UserForm, props)} />
              <Route exact path="/login" component={props => withFormWrapper(Login, props)} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

function withFormWrapper(Component, props) {
  return (
    <div className="form-wrapper">
       <img className="photo" src={logo} alt="logo" />
       <hr />
      <Component {...props} />
    </div>
  );
}

export default App;