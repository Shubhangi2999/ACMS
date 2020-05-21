import React from 'react';
import { Container, Row, Col, Button, TabPane, Input, Label, Form, FormGroup } from 'reactstrap';
import './Store.css';

export default class StoreDetails extends React.Component {
    constructor(props) {
        super(props);
    };

    onNewStore = () => {
        alert('implement: new store');
    };

    //    Actual reference data to be added after authentication is done.
    //         Would be added in format 
    //         {this.props.response.<object-name>} 
    //         in place of the filled object entry 

render() {
    return (
        <TabPane tabId={2} className='dashboard-tab-content'>
            <Form className='store-tab-form'>
                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="store-name">Store Name</Label>
                    <span className='store-text'>The Right Store</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="store-address">Store Address</Label>
                    <span className='store-text'>65798, 10th Street SE,</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="city">City</Label>
                    <span className='store-text'> St. Petersburg,</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="state">State</Label>
                    <span className='store-text'> Missouri</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="pincode">Pincode</Label>
                    <span className='store-text'>634010</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="store-type">Store Type</Label>
                    <span className='store-text'>General Store</span>
                </FormGroup>


                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="store-size">Store Size</Label>
                    <span className='store-text'>2000 sq ft</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="no-of-employees">No of employees</Label>
                    <span className='store-text'>6</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="no-of-customers">No. of customers</Label>
                    <span className='store-text'>30-40 per day</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="service">Service</Label>
                    <span className='store-text'>Delivery</span>
                </FormGroup>

                <FormGroup className='store-form-group'>
                    <Label className='store-label' for="program">Program</Label>
                    <span className='store-text'>Locker</span>
                </FormGroup>
            </Form>
            <Container className='new-store'>
                <Button onClick={this.onNewStore} className='new-store-button'>New Store</Button>
            </Container>
        </TabPane>
    );
}
};