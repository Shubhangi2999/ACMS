import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import {Row,Col} from 'reactstrap';
export class StoreDetails extends Component{
    continue = e =>{
        e.preventDefault();
        const data=this.props.values;
        if(data.storeName==='')
        alert("Store Name cannot be empty");
        else if(data.address==='')
        alert("Address cannot be empty");
        else if(data.city==='')
        alert("City cannot be empty");
        else if(data.pincode==='')
        alert("pincode cannot be empty");
        else if( data.state==='')
        alert("State cannot be empty");
        else if(data.typeStore==='')
        alert("Type of Store is required");
        else if(data.size==='')
        alert("Size of store is required");
        else if(data.workingEmployees==='')
        alert("No. of working employees is required");
        else if(data.customer==='')
        alert("No. of customers is required");
        else if(data.ownedrented==='')
        alert("Owned/Rented is required");
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
                <Label for="storeName">Store Name*</Label>
                <Input id="storeName" 
                defaultValue={values.storeName} 
                onChange={handleChange('storeName')} />
            </FormGroup>

            <FormGroup>
                <Label for="address">Address*</Label>
               <Input id="address"
                defaultValue={values.address} 
                onChange={handleChange('address')} /> 
            </FormGroup>

            <FormGroup>
                    <Label for="city">City*</Label>
                    <Input id="city" 
                    defaultValue={values.city} 
                    onChange={handleChange('city')} />
                </FormGroup>
                
                <FormGroup>
                    <Label for="pincode">Pincode*</Label>
                    <Input id="pincode" 
                    defaultValue={values.pincode} 
                    onChange={handleChange('pincode')} />
                </FormGroup>

                <FormGroup>
                <Label for="state">State*</Label>
                <Input type="select" name="state" id="state" 
                defaultValue={values.state} 
                onChange={handleChange('state')} >
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
                    <Label for="typeStore">Type of Store*</Label>
                    <Input type="select" name="typeStore" 
                    id="typeStore" defaultValue={values.typeStore} 
                    onChange={handleChange('typeStore')} >
                    <option>Select Type of Store</option>
                    <option value="Gym">Gym</option>
                    <option value="Restraunt">Restaurant</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Departmental">Departmental Store</option>
                    <option value="Movie">Movie theater</option>
                    <option value="Bank">Bank</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Lifestyle">Lifestyle Stores</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="size">Store Size (in sq. ft.) *</Label>
                    <Input id="size" defaultValue={values.size} onChange={handleChange('size')} />
                </FormGroup>

                <FormGroup>
                    <Label for="workingEmployees">Number of working employees*</Label>
                    <Input id="workingEmployees"
                     defaultValue={values.workingEmployees} 
                     onChange={handleChange('workingEmployees')} />
                </FormGroup>

                <FormGroup>
                    <Label for="customer">Number of expected customers per day*</Label>
                    <Input id="customer"
                     defaultValue={values.customer} 
                     onChange={handleChange('customer')} />
                </FormGroup>

                <FormGroup>
                    <Label for="ownedrented">Store is Owned/Rented*</Label>
                    <Input type="select" name="ownedrented" id="ownedrented" 
                    defaultValue={values.ownedrented} 
                    onChange={handleChange('ownedrented')} >
                    <option>Select Owned/Rented</option>
                    <option value="Owned">Owned</option>
                    <option value="Rented">Rented</option>
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