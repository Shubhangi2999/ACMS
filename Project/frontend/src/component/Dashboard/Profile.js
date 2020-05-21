import React from 'react';
import { Container, Row, Col, Button, TabPane, Input, Label, Form, FormGroup } from 'reactstrap';
import './Profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  };

  //   Actual reference data to be added after authentication is done.
  //     Would be added in format 
  //   {this.props.response.<object-name>} 
  // in place of the filled object entry 


render() {
  return (
    <TabPane tabId={1} className='dashboard-tab-content'>
      <Form className='profile-tab-form'>
        <FormGroup className='profile-form-group'>
          <Label className='profile-label' for="user-name">Name</Label>
          <span className='profile-text'>Tom Sawyer</span>
        </FormGroup>

        <FormGroup className='profile-form-group'>
          <Label className='profile-label' for="user-email">Email</Label>
          <span className='profile-text'>tomsawyer@gmail.com</span>
          {/* Actual reference data to be added after authentication is successful */}
        </FormGroup>

        <FormGroup className='profile-form-group'>
          <Label className='profile-label' for="user-phone">Phone no.</Label>
          <span className='profile-text'>+91 9876154232</span>
          {/* Actual reference data to be added after authentication is successful */}
        </FormGroup>
      </Form>

    </TabPane>
  );
}
};