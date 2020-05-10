import React from 'react';
import { Container, Row, Col, Button, TabPane } from 'reactstrap';
import './StoreDetails.css';

export default class StoreDetails extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <TabPane tabId={2} className='dashboard-tab-content'>
            </TabPane>
        );
    }
};