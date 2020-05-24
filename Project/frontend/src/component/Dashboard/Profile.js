import React from 'react';
import { Container, Row, Col, Button, TabPane, Input, Label, Form, FormGroup } from 'reactstrap';
import './Profile.css';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { user } = this.props;

    const {
      first_name: firstName,
      last_name: lastName,
      email,
      contact,
    } = user;

    return (
      <TabPane tabId={1} className='dashboard-tab-content'>
        <Form className='profile-tab-form'>
          <FormGroup className='profile-form-group'>
            <Label className='profile-label' for="user-name">Name</Label>
            <span className='profile-text'>{firstName} {lastName}</span>
          </FormGroup>

          <FormGroup className='profile-form-group'>
            <Label className='profile-label' for="user-email">Email</Label>
            <span className='profile-text'>{email}</span>
          </FormGroup>

          <FormGroup className='profile-form-group'>
            <Label className='profile-label' for="user-phone">Phone no.</Label>
            <span className='profile-text'>{contact}</span>
          </FormGroup>
        </Form>

      </TabPane>
    );
  }
};