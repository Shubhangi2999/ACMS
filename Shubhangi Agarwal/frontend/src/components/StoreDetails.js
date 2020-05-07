import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import {Row,Col} from 'reactstrap';
export class StoreDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevstep();
    }
    render()
    {
        const {values,handleChange}=this.props;
        return(
            <Form>
                <h1>Store Details</h1>
                <Row>
                    <Col>
            <FormGroup>
                <Label for="storename">Store Name*</Label>
                <Input id="storename" defaultValue={values.storename} onChange={handleChange('storename')} />
                <FormFeedback></FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="address">Address*</Label>
                <Input id="address" defaultValue={values.address} onChange={handleChange('address')} />
                <FormFeedback></FormFeedback>
            </FormGroup>

            <FormGroup>
                    <Label for="city">City*</Label>
                    <Input id="city" defaultValue={values.city} onChange={handleChange('city')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>
                
                <FormGroup>
                    <Label for="pincode">Pincode*</Label>
                    <Input id="pincode" defaultValue={values.pincode} onChange={handleChange('pincode')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                <Label for="state">State*</Label>
                <Input type="select" name="state" id="state" onChange={handleChange('state')} >
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Gujurat</option>
                    <option>Uttar Pradesh</option>
                    <option>Punjab</option>
                </Input>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for="typestore">Type of Store*</Label>
                    <Input id="typestore" defaultValue={values.typestore} onChange={handleChange('typestore')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="size">Size of Store*</Label>
                    <Input id="size" defaultValue={values.size} onChange={handleChange('size')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="workingemployees">Number of working employees*</Label>
                    <Input id="workingemployees" defaultValue={values.workingemployees} onChange={handleChange('workingemployees')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="customer">Number of expected customers per day*</Label>
                    <Input id="customer" defaultValue={values.customer} onChange={handleChange('customer')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="service">Services you want to offer(Delivery/Pickup/customers Return/All)*</Label>
                    <Input id="service" defaultValue={values.service} onChange={handleChange('service')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>
                </Col>
                </Row>
               
                <Button color="primary" style={styles.button}
                onClick={this.back}>Back</Button>

                <Button color="primary" style={styles.button}
                onClick={this.continue}> Continue</Button>

            </Form>
    );
    }
}
const styles={
    button:{
    margin:20
    }
}
export default StoreDetails;