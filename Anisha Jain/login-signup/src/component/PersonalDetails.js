import React, { Component } from 'react';
import { Row, Label, FormGroup,Input, FormFeedback, Form ,Button, isRequired, Col} from 'reactstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import { isEmail } from 'validator';
export class PersonalDetails extends Component{
    
    continue = e =>{
        e.preventDefault();
        const data=this.props.values;
        if(data.firstName==='')
        alert("first Name cannot be empty");
        else if(data.lastName==='')
        alert("last Name cannot be empty");
        else if(data.email==='')
        alert("Email cannot be empty");
        else if(!isEmail(data.email))
        alert("Enter correct Email ID");
        else if(data.contact==='')
        alert("contact cannot be empty");
        else if( data.password==='')
        alert("Password cannot be empty");
        else if(data.confirmPassword !== data.password)
        alert("Password and confirm password should match");
        else
        this.props.nextstep();
    }
    render()
    {
        const {values,handleChange}=this.props;
        return(
        <Router>
        <Form>
        <h1>User Details</h1> 
        <br />  
        <Row>
            <Col>
                <FormGroup>
                    <Label for="firstName">First Name*</Label>
                    <Input id="firstName" 
                    name="firstName"
                    defaultValue={values.lastName} 
                    onChange={handleChange('firstName')} 
                    />
                </FormGroup>
                </Col>
                <Col>
            <FormGroup>
                    <Label for="lastName">Last Name*</Label>
                    <Input id="lastName" 
                    name="lastName"
                    defaultValue={values.lastName} 
                    onChange={handleChange('lastName')}
                    />
                </FormGroup>
                </Col>
                </Row>    

                <FormGroup>
                    <Label for="email">Email*</Label>
                    <Input id="email"
                    name="email"
                     defaultValue={values.email} 
                     onChange={handleChange('email')}
                     />
                </FormGroup>

                <FormGroup>
                    <Label for="contact">Contact No.*</Label>
                    <Input id="contact" 
                    name="contact"
                    defaultValue={values.contact} 
                    onChange={handleChange('contact')}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password*</Label>
                    <Input id="password" 
                    name="password"
                    type="password" 
                    defaultValue={values.password} 
                    onChange={handleChange('password')}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password*</Label>
                    <Input id="confirmPassword" 
                    name="confirmPassword"
                    type="password"
                     defaultValue={values.confirmPassword} 
                     onChange={handleChange('confirmPassword')} 
                     />
                </FormGroup>
        <Button color="primary" size="lg"  style={styles.button}
        onClick={this.continue}> Next</Button>
        </Form>
        </Router>
    );
    }
    
}
const styles={
    button:{
    margin:20,
    width:120
    }
}
export default PersonalDetails;