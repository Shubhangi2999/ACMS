import React from 'react';
import { Container, Row, Col, Button, TabPane, Input, Label, Form, FormGroup } from 'reactstrap';
import './StoreDetails.css';

export default class StoreDetails extends React.Component {
    constructor(props) {
        super(props);
    };

    onNewStore = () => {
        alert('implement: new store');
    };

    render() {
        return (
            <TabPane tabId={2} className='dashboard-tab-content'>
                <Form className='store-tab-form'>
                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-name">Store Name</Label>
                        <Input className='store-input' type="text" name="Store Name" id="store-name" placeholder="Add store name" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-address">Store Address</Label>
                        <Input className='store-input' type="text" name="Store Address" id="store-address" placeholder="Add your store address" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="city">City</Label>
                        <Input className='store-input' type="text" name="City" id="city" placeholder="Add your city" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="state">State</Label>
                        <Input className='store-input' type="text" name="State" id="state" placeholder="Add your state" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="pincode">Pincode</Label>
                        <Input className='store-input' type="text" name="pincode" id="pincode" placeholder="Add pincode" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-type">Store Type</Label>
                        <Input className='store-input' type="text" name="Store Type" id="store-type" placeholder="Add store type" />
                    </FormGroup>


                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="store-size">Store Size</Label>
                        <Input className='store-input' type="text" name="size" id="store-size" placeholder="Add store size" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="no-of-employees">No of employees</Label>
                        <Input className='store-input' type="text" name="No of employees" id="store-employees" placeholder="Add no. of employees" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="no-of-customers">No. of customers</Label>
                        <Input className='store-input' type="text" name="No of customers" id="no-of-customers" placeholder="Add no. of customers" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="service">Service</Label>
                        <Input className='store-input' type="text" name="Service" id="store-service" placeholder="Add service" />
                    </FormGroup>

                    <FormGroup className='store-form-group'>
                        <Label className='store-label' for="program">Program</Label>
                        <Input className='store-input' type="text" name="Program" id="store-program" placeholder="Add program" />
                    </FormGroup>
                </Form>
                <Container className='new-store'>
                    <Button onClick={this.onNewStore} className='new-store-button'>New Store</Button>
                </Container>
            </TabPane>
        );
    }
};