import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { isEmail } from 'validator';
import {Container,Row,Col} from 'reactstrap';
import axios from "axios"
import { API_URL } from "../constants/index.js";


class Register extends Component {

/*   constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = this.getInitialState();
    }
*/
    state = {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address: "",
            city: "",
            state: "",
            typestore: "",
            size: "",
            workingemployees: "",
            space: "",
            service: "",
            password: "",
            confirmPassword: ""
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    validate = () => {
        let errors = {};

        if (this.props.firstName === "") errors.firstName = 'First Name can not be blank.';
        if (this.props.lastName === "") errors.lastName = 'Last Name can not be blank.';
        if (!isEmail(this.props.email)) errors.email = 'Email must be valid.';
        if (this.props.email === "") errors.email = 'Email can not be blank.';
        if(this.props.contact === "") errors.contact = 'contact can not be blank';
        if(this.props.address=== "") errors.address = 'Store Address can not be blank';
        if(this.props.city==="") errors.city='City can not be blank ';
        if(this.props.state==="") errors.state='State can not be empty';
        if(this.props.typestore==="") errors.typestore='Type of store can not be empty';
        if(this.props.workingemployees==="") errors.workingemployees='No. of working employees cannot be empty';
        if(this.props.size==="") errors.size='Store Size can not be empty';
        if(this.props.space==="") errors.space='Space Size can not be empty';
        if(this.props.service==="") errors.service='Mention service';
        if (this.props.password === "") errors.password = 'Password must be valid.';
        if (this.props.confirmPassword !== this.props.password) errors.confirmPassword = 'Passwords must match.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            const errors = this.validate();
	    if (!(Object.keys(errors).length === 0)) {
            this.setState({ errors });
		    this.props.resetState();
		    this.props.toggle();
        } 
    	});
    }

    defaultIfEmpty = value => {
    return value === "" ? "" : value;
  	};

    render() {
        const errors = {};
        return (
                <Form onSubmit={this.handleSubmit}>
                <Row>
                <Col>
                <FormGroup>
                    <Label for="firstName">First Name*</Label>
                    <Input id="firstName" value={this.state.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>
                
                
                <FormGroup>
                    <Label for="lastName">Last Name*</Label>
                    <Input id="lastName" value={this.state.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                    <FormFeedback>{errors.lastName}</FormFeedback>
                </FormGroup>
                

                <FormGroup>
                    <Label for="email">Email*</Label>
                    <Input id="email" value={this.state.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="contact">Contact No.*</Label>
                    <Input id="contact" value={this.state.contact} invalid={errors.contact ? true : false} name="contact" onChange={this.handleChange} />
                    <FormFeedback>{errors.contact}</FormFeedback>
                </FormGroup>
                
                <FormGroup>
                    <Label for="address">Store Address*</Label>
                    <Input id="address" value={this.state.address} invalid={errors.address ? true : false} name="address" onChange={this.handleChange} />
                    <FormFeedback>{errors.address}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="city">City*</Label>
                    <Input id="city" value={this.state.city} invalid={errors.city ? true : false} name="city" onChange={this.handleChange} />
                    <FormFeedback>{errors.city}</FormFeedback>
                </FormGroup>

                <FormGroup>
                <Label for="state">State*</Label>
                <Input type="select" name="state" id="state" value={this.state.state} invalid={errors.state ? true: false} onChange={this.handleChange} >
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
                    <Input id="typestore" value={this.state.typestore} invalid={errors.typestore ? true : false} name="typestore" onChange={this.handleChange} />
                    <FormFeedback>{errors.typestore}</FormFeedback>
                </FormGroup>                
                
                <FormGroup>
                    <Label for="size">Size of Store(sq. ft)*</Label>
                    <Input id="size" value={this.state.size} invalid={errors.size ? true : false} name="size" onChange={this.handleChange} />
                    <FormFeedback>{errors.size}</FormFeedback>
                </FormGroup> 

                <FormGroup>
                    <Label for="workingemployees">No. of working employees*</Label>
                    <Input id="workingemployees" value={this.state.workingemployees} invalid={errors.workingemployees ? true : false} name="workingemployees" onChange={this.handleChange} />
                    <FormFeedback>{errors.workingemployees}</FormFeedback>
                </FormGroup> 
                
                <FormGroup>
                    <Label for="space">How much space you are willing to give to the locker?*</Label>
                    <Input id="space" value={this.state.space} invalid={errors.space ? true : false} name="space" onChange={this.handleChange} />
                    <FormFeedback>{errors.space}</FormFeedback>
                </FormGroup> 

                <FormGroup>
                    
                    <Label for="service">Services you want to offer(Delivery/Pickup/Customer Return/All)</Label>
                    <Input id="service" value={this.state.service} invalid={errors.service ? true : false} name="service" onChange={this.handleChange} />
                    <FormFeedback>{errors.service}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password*</Label>
                    <Input id="password" value={this.state.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password*</Label>
                    <Input id="confirmPassword" value={this.state.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>
                </Col>
                </Row>
                <br />
                <div className="text-center">
                <Button color="primary">Register</Button>
                </div>
            </Form>

        );
    }
}

export default Register;