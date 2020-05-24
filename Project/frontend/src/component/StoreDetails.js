import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import {Row,Col} from 'reactstrap';
export class StoreDetails extends Component{
    continue = e =>{
        e.preventDefault();
        const data=this.props.values;
        if(data.storename==='')
        alert("Store Name cannot be empty");
        else if(data.address==='')
        alert("Address cannot be empty");
        else if(data.city==='')
        alert("City cannot be empty");
        else if(data.pincode==='')
        alert("pincode cannot be empty");
        else if( data.state==='')
        alert("State cannot be empty");
        else if(data.typestore==='')
        alert("Type of Store is required");
        else if(data.size==='')
        alert("Size of store is required");
        else if(data.workingemployees==='')
        alert("No. of working employees is required");
        else if(data.customer==='')
        alert("No. of customers is required");
        else if(data.service==='')
        alert("Type of service is required");
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
        <Form>
            <h1>Store Details</h1>
        <Row>
        <Col>
         <FormGroup>
                <Label for="storename">Store Name*</Label>
                <Input id="storename" defaultValue={values.storename} onChange={handleChange('storename')} />
            </FormGroup>

            <FormGroup>
                <Label for="address">Address*</Label>
               <Input id="address" defaultValue={values.address} onChange={handleChange('address')} /> 
            </FormGroup>

            <FormGroup>
                    <Label for="city">City*</Label>
                    <Input id="city" defaultValue={values.city} onChange={handleChange('city')} />
                </FormGroup>
                
                <FormGroup>
                    <Label for="pincode">Pincode*</Label>
                    <Input id="pincode" defaultValue={values.pincode} onChange={handleChange('pincode')} />
                </FormGroup>

                <FormGroup>
                <Label for="state">State*</Label>
                <Input type="select" name="state" id="state" defaultValue={values.state} onChange={handleChange('state')} >
                    <option>Select State</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujurat">Gujurat</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Punjab">Punjab</option>
                </Input>
                </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                    <Label for="typestore">Type of Store*</Label>
                    <Input type="select" name="typestore" id="typestore" defaultValue={values.typestore} onChange={handleChange('typestore')} >
                    <option>Select Type of Store</option>
                    <option value="Gym">Gym</option>
                    <option value="Restraunt">Restraunt</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Departmental">Departmental Store</option>
                    <option value="Movie">Movie theater</option>
                    <option value="Bank">Bank</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Lifestyle">Lifestyle Stores</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="size">Size of Store*</Label>
                    <Input id="size" defaultValue={values.size} onChange={handleChange('size')} />
                </FormGroup>

                <FormGroup>
                    <Label for="workingemployees">Number of working employees*</Label>
                    <Input id="workingemployees" defaultValue={values.workingemployees} onChange={handleChange('workingemployees')} />
                </FormGroup>

                <FormGroup>
                    <Label for="customer">Number of expected customers per day*</Label>
                    <Input id="customer" defaultValue={values.customer} onChange={handleChange('customer')} />
                </FormGroup>

                <FormGroup>
                    <Label for="service">Services you want to offer(Delivery/Pickup/customers Return/All)*</Label>
                    <Input type="select" name="service" id="service" defaultValue={values.service} onChange={handleChange('service')} >
                    <option>Select type of Service</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Return">customers Return</option>
                    <option value="All">All</option>
                    </Input>
                </FormGroup>

        </Col>
        </Row>
        <Button color="primary" size="lg" style={styles.button}
        onClick={this.back}>Back</Button>
        <Button color="primary" size="lg" style={styles.button}
        onClick={this.continue}> Next</Button>

        </Form>
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