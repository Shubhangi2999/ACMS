import React from 'react';
import { TabContent, Container, Row, Col, Button } from 'reactstrap';
import './Dashboard.css';

export default class DashBoard extends React.Component {
  logoutUser = () => {
    // Make AJAX requsest to backend (To rvoke user's JWT token)
    // Navigate to login after successful response from server
    alert('implement: handle logout');
  };

    render() {
        return (
            <div className='dashboard-wrapper'>
                <Container className='dashboard-root'>
                    <Row className='dashboard-user'>
                      <span>Welcome, Ayushi</span>
                      <Button outline color="danger" onClick={this.logoutUser}>Logout</Button>
                    </Row>

                    <Row className='dashboard-user-details'>
                        {/* TABS */}
                        {/* RIGHT VIEW */}
                    </Row>
                </Container>
            </div>
        );
    }
}