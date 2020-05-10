import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button, isRequired} from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup} from 'availity-reactstrap-validation';
import {BrowserRouter as Router} from 'react-router-dom';
export class PersonalDetails extends Component{

    continue = e =>{
        e.preventDefault();
        const data=this.props.values;
        if(data.firstName==='' || data.lastName==='' || data.email==='' || data.contact==='' || data.password==='' || data.confirmpassword==='')
        alert("Fill all the details");
        //if(data.firstName!='' && data.lastName!='' && data.email!='' && data.contact!='' && data.password!='' && data.confirmpassword!='')
        else
        this.props.nextstep();
    }
    render()
    {
        const {values,handleChange}=this.props;
        return(
            <Router>
        <AvForm>
                <h1>User Details</h1> 
                <br />     
        <AvGroup>
            <Label for="firstName">First Name</Label>
            <AvInput name="firstName" id="firstName" defaultValue={values.firstName} required onChange={handleChange('firstName')} />
            <AvFeedback>First Name is required</AvFeedback>
        </AvGroup>
            
        <AvGroup>
            <Label for="lastName">Last Name</Label>
            <AvInput name="lastName" id="lastName" defaultValue={values.lastName} required onChange={handleChange('lastName')} />
            <AvFeedback>Last Name is required</AvFeedback>
        </AvGroup>

        <AvGroup>
            <Label for="email">Email</Label>
            <AvInput name="email" id="email" type="email" defaultValue={values.email} required onChange={handleChange('email')} />
            <AvFeedback>Invalid Email</AvFeedback>
        </AvGroup>

        <AvGroup>
            <Label for="contact">Contact No.</Label>
            <AvInput name="contact" id="contact" defaultValue={values.contact} required onChange={handleChange('contact')} />
            <AvFeedback>Contact No. is required</AvFeedback>
        </AvGroup>

        <AvGroup>
            <Label for="password">Password</Label>
            <AvInput name="password" type="password" id="password" defaultValue={values.password} required onChange={handleChange('password')} />
            <AvFeedback>Password is required</AvFeedback>
        </AvGroup>

        <AvGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <AvInput name="confirmPassword" type="password" id="confirmPassword" defaultValue={values.confirmPassword} required validate={{match:{value:'password'}}} onChange={handleChange('confirmPassword')} />
            <AvFeedback>Invalid Password</AvFeedback>
        </AvGroup>
        <Button color="primary" style={styles.button}
                onClick={this.continue}> Continue</Button>
        </AvForm>
        </Router>
    );
    }
    
}
const styles={
    button:{
    margin:25
    }
}
export default PersonalDetails;