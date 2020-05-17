
import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button, isRequired} from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup} from 'availity-reactstrap-validation';
import {BrowserRouter as Router} from 'react-router-dom';
export class Login extends Component{ 
    render()
    {
    return( 

        <AvForm>
         <h1>Login</h1>  
         <br />
        <AvGroup>
            <Label for="email">Email</Label>
            <AvInput name="email" id="email" type="email" required />
            <AvFeedback>Invalid Email</AvFeedback>
        </AvGroup>
        <AvGroup>
            <Label for="password">Password</Label>
            <AvInput name="password" type="password" id="password" required />
            <AvFeedback>Password is required</AvFeedback>
        </AvGroup>
        <center><Button color="primary" size="lg" style={styles.button}
                onClick={this.continue}> Login</Button></center>
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
export default Login; 