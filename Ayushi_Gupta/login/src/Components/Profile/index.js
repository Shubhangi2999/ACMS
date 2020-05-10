import React from 'react';
import { Container, Row, Col, Button, TabPane, Input, Label, Form, FormGroup } from 'reactstrap';
import './Profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <TabPane tabId={1} className='dashboard-tab-content'>
      <Form className='profile-tab-form'>
        <FormGroup className='profile-form-group'>
          <Label className='profile-label' for="user-name">Name</Label>
          <Input className='profile-input' type="text" name="Name" id="user-name" placeholder="Add your name" />
        </FormGroup>

         <FormGroup className='profile-form-group'>
          <Label className='profile-label' for="user-email">Email</Label>
          <Input className='profile-input' type="email" name="Email" id="user-email" placeholder="Add your email" />
        </FormGroup>

        <FormGroup className='profile-form-group'>
          <Label className='profile-label' for="user-phone">Phone no.</Label>
          <Input className='profile-input' type="phone" name="Phone no." id="user-phone" placeholder="Add your phone number" />
        </FormGroup>
      </Form>

      </TabPane>
    );
  }
};