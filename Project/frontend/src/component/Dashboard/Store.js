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

    render() {
        const { store } = this.props;
        const {
            address,
            city,
            customer: customers,
            workingemployees: employees,
            owner,
            pincode,
            service,
            size,
            state,
            storename: storeName,
            typestore: typeStore,
        } = store;
        
        return (
            <TabPane tabId={2} className='dashboard-tab-content'>
                <Form className='store-tab-form'>
                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-name">Store Name</Label>
                        <span className='store-text'>{storeName}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-address">Store Address</Label>
                        <span className='store-text'>{address}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="city">City</Label>
                        <span className='store-text'>{city}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="state">State</Label>
                        <span className='store-text'>{state}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="pincode">Pincode</Label>
                        <span className='store-text'>{pincode}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-type">Store Type</Label>
                        <span className='store-text'>{typeStore}</span>
                    </FormGroup>


                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-size">Store Size</Label>
                        <span className='store-text'>{size}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="no-of-employees">No of employees</Label>
                        <span className='store-text'>{employees}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="no-of-customers">No. of customers</Label>
                        <span className='store-text'>{customers}</span>
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="service">Service</Label>
                        <span className='store-text'>{service}</span>
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