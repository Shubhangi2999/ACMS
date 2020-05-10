import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup} from 'availity-reactstrap-validation';
import {Row,Col} from 'reactstrap';
export class StoreDetails extends Component{
    continue = e =>{
        e.preventDefault();
        const data=this.props.values;
        if(data.storename==='' || data.address==='' || data.city==='' || data.pincode==='' || 
        data.state==='' || data.size==='' || data.typestore==='' || data.workingemployees==='' ||
        data.customer==='' || data.service==='')
        alert("Fill all the details");
        else
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
        <AvForm>
            <h1>Store Details</h1>
        <Row>
        <Col>
        <AvGroup>
            <Label for="storename">Store Name</Label>
            <AvInput name="storename" id="storename" defaultValue={values.storename} required onChange={handleChange('storename')} />
            <AvFeedback>Store Name is required</AvFeedback>
        </AvGroup>
            
        <AvGroup>
            <Label for="address">Address</Label>
            <AvInput name="address" id="address" defaultValue={values.address} required onChange={handleChange('address')} />
            <AvFeedback>Address is required</AvFeedback>
        </AvGroup>

        <AvGroup>
            <Label for="city">City</Label>
            <AvInput name="city" id="city" defaultValue={values.city} required onChange={handleChange('city')} />
            <AvFeedback>City is required</AvFeedback>
        </AvGroup>

        <AvGroup>
            <Label for="pincode">Pincode</Label>
            <AvInput name="pincode" id="pincode" defaultValue={values.pincode} required onChange={handleChange('pincode')} />
            <AvFeedback>Pincode is required</AvFeedback>
        </AvGroup>

        <AvGroup>
        <AvField type="select" name="state" label="State" defaultValue={values.state} required onChange={handleChange('state')}>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>Gujurat</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Uttar Pradesh</option>
        </AvField>
        <AvFeedback>State is required</AvFeedback>
        </AvGroup>
        </Col>
        <Col>
        <AvGroup>
            <Label for="size">Size</Label>
            <AvInput name="size" id="size" defaultValue={values.size} required onChange={handleChange('size')} />
            <AvFeedback>Size is required</AvFeedback>
        </AvGroup>


        <AvGroup>
        <AvField type="select" name="typestore" label="Type of store" defaultValue={values.typestore} required onChange={handleChange('typestore')}>
            <option>Gym</option>
            <option>Restraunt</option>
            <option>Grocery</option>
            <option>Departmental Store</option>
            <option>Movie theater</option>
            <option>Bank</option>
            <option>Pharmacy</option>
            <option>Lifestyle Stores</option>
        </AvField>
        </AvGroup>

        <AvGroup>
            <Label for="workingemployees">No. of working employees</Label>
            <AvInput name="workingemployees" id="workingemployees" defaultValue={values.workingemployees} required onChange={handleChange('workingemployees')} />
            <AvFeedback>Np. of working employees is required</AvFeedback>
        </AvGroup>
        
        <AvGroup>
            <Label for="customer">No. of Customers</Label>
            <AvInput name="customer" id="customer" defaultValue={values.customer} required onChange={handleChange('customer')} />
            <AvFeedback>No. of customers is required</AvFeedback>
        </AvGroup>


        <AvGroup>
        <AvField type="select" name="service" label="Service you want to offer" defaultValue={values.service} required onChange={handleChange('service')}>
            <option>Delivery</option>
            <option>Pickup</option>
            <option>customers Return</option>
            <option>All</option>
        </AvField>
        <AvFeedback>Type of services is required</AvFeedback>
        </AvGroup>

        </Col>
        </Row>
        <Button color="primary" size="lg" style={styles.button}
        onClick={this.back}>Back</Button>
        <Button color="primary" size="lg" style={styles.button}
        onClick={this.continue}> Next</Button>

        </AvForm>
    );
    }
}
const styles={
    button:{
    margin:25,
    width:120
    }
}
export default StoreDetails;