import React, { Component } from 'react';
import { TabContent, Container, Row, Col, Button } from 'reactstrap';
import './Dashboard.css';
import Profile from './Profile';
import Store from './Store';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            loading: true,
            user: null,
            store: null,
        };
    };

    async componentDidMount() {
        try {
            const { token, email } = JSON.parse(localStorage.getItem('userAuth'));

            if (!token) {
                throw Error('User not authenticated');
            }

            const userResult = await this.request('signup/', token);
            const storeResult = await this.request('dashboard/add-store/', token);

            const [user] = userResult.slice().filter(data => data.email === email);
            // TODO: wrong store is being sent from the api
            const [store] = storeResult;

            this.setState({ user, store, loading: true });
        } catch {
            alert('Error while fetching data');
        }
    }

    async request(path, token) {
        const result = await fetch(`http://localhost:8000/webapp/api/${path}`, {
            method: 'GET',
            headers: {
                Authorization: `${token}`,
            },
        });

        return result.json();
    }

    logoutUser = () => {
        const { history } = this.props;

        localStorage.removeItem('userAuth');
        history.push('/login');
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
                            <Store />
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