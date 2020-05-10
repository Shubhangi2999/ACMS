import React from 'react';
import { Container, Row, Col, Button, TabPane } from 'reactstrap';
import './Profile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    };

  render() {
    return (
      <TabPane tabId={1} className='dashboard-tab-content'>
      </TabPane>
    );
  }
};