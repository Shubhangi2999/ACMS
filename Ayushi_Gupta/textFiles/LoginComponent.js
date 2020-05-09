import React, { Component } from 'react';
import {Label, Button} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback} from 'availity-reactstrap-validation';

export class Login extends Component
{

    render()
    {
        return(
        <AvForm>
            <h1>LOGIN</h1>
        <AvGroup>
            <Label for="Email ID">Email ID</Label>
            <AvInput name="email" id="email" defaultValue={values.email} required onChange={handleChange('email')} />
            <AvFeedback>Email is required</AvFeedback>
        </AvGroup>
            
        <AvGroup>
            <Label for="password">Password</Label>
            <AvInput name="password" type="password" id="password" defaultValue={values.password} required onChange={handleChange('password')} />
            <AvFeedback>Password is required</AvFeedback>
        </AvGroup>

        <Button color="primary" style={styles.button}> Submit </Button>
        </AvForm>
    );
    }
}
const styles={
    button:{
    margin:25
    }
}
export default Login;