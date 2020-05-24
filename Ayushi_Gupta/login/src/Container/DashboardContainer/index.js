import React from 'react';
import { TabContent, Container, Row, Col, Button } from 'reactstrap';
import './Dashboard.css';
import Profile from '../../Components/Profile';
import StoreDetails from '../../Components/StoreDetails';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            loading: true,
            result: null,
        };
    };

    async componentDidMount() {
        try {
            const token = localStorage.getItem(token);
            const result = await fetch('http://localhost:8000/webapp/api/participant/userinfo', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return await result.json();

            this.setState({ result, loading: false });
        } catch {
            alert('Error while fetching data');
        }
    }

    logoutUser = () => {
        // Make AJAX requsest to backend (To rvoke user's JWT token)
        // Navigate to login after successful response from server
       alert('implement: handle logout');
    };

    switchTabs = tabIndex => this.setState({ activeTab: tabIndex });

    render() {
        const { activeTab } = this.state;
        return (
            <div className='dashboard-wrapper'>
                <Container className='dashboard-root'>
                    <Row className='dashboard-user'>
                        <Col className='dashboard-user-greetings'>
                            <span id='header'>Welcome, Ayushi!</span>
                            <p id='subheader'>Here are your details</p>
                        </Col>
                        <Button outline color="danger" onClick={this.logoutUser}>Logout</Button>
                    </Row>
                    <Row className='dashboard-user-details'>
                        <Container className='dashboard-tabs'>
                            <DashButton label='Profile' icon='fa fa-user' onClick={() => this.switchTabs(1)} isActive={activeTab === 1} />
                            <DashButton label='Store Details' icon='fa fa-info-circle' onClick={() => this.switchTabs(2)} isActive={activeTab === 2} />
                        </Container>
                        <TabContent activeTab={activeTab} className='dashboard-tabs-description'>
                            <Profile />
                            <StoreDetails />
                        </TabContent>
                    </Row>
                </Container>
            </div>
        );
    }
}

const DashButton = ({ label, onClick, isActive, icon }) => (
    <Button color={null} className='dashboard-tab-button' onClick={onClick}>
        <i className={`${icon} ${isActive ? 'dashbutton-active-icon' : 'dashbutton-inactive-icon'}`} aria-hidden="true"></i>
        <span className={`dashbutton ${isActive ? 'dashbutton-active' : ''}`}>{label}</span>
    </Button>
);