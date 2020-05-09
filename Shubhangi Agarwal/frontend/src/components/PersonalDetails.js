import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button, isRequired} from 'reactstrap';
import { isEmail } from 'validator';
import {Row,Col} from 'reactstrap';
export class PersonalDetails extends Component{

    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    render()
    {
        const {values,handleChange}=this.props;
        return(
            <Form>
                <h1>User Details</h1>
                <FormGroup>
                    <Label for="firstName">First Name*</Label>
                    <Input id="firstName" defaultValue={values.lastName} onChange={handleChange('firstName')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

            <FormGroup>
                    <Label for="lastName">Last Name*</Label>
                    <Input id="lastName" defaultValue={values.lastName} onChange={handleChange('lastName')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>
                

                <FormGroup>
                    <Label for="email">Email*</Label>
                    <Input id="email" defaultValue={values.email} onChange={handleChange('email')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="contact">Contact No.*</Label>
                    <Input id="contact" defaultValue={values.contact} onChange={handleChange('contact')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password*</Label>
                    <Input id="password" type="password" defaultValue={values.password} onChange={handleChange('password')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password*</Label>
                    <Input id="confirmPassword" type="password" defaultValue={values.confirmPassword} onChange={handleChange('confirmPassword')} />
                    <FormFeedback></FormFeedback>
                </FormGroup>

                <Button color="primary" style={styles.button}
                onClick={this.continue}> Continue</Button>
            </Form>
    );
    }
}
const styles={
    button:{
    margin:25
    }
}
export default PersonalDetails;