import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import {Row,Col} from 'reactstrap';
//import {API_URL} from "C:\Users\hp\Desktop\locker_frontend-master\locker_frontend-master\src\constants";

class Register extends Component {

    constructor(props) {
        super(props);
        //this.toggle = this.toggle.bind(this);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            address: '',
            city:'',
            state: '',
            typestore:'',
            size:'',
            workingemployees:'',
            customers:'',
            service:'',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    });
    
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if(data.contact==='') errors.contact = 'contact can not be blank';
        if(data.address==='') errors.address = 'Store Address can not be blank';
        if(data.city==='') errors.city='City can not be blank ';
        if(data.state==='') errors.state='State can not be empty';
        if(data.typestore==='') errors.typestore='Type of store can not be empty';
        if(data.workingemployees==='') errors.workingemployees='No. of working employees cannot be empty';
        if(data.size==='') errors.size='Store Size can not be empty';
        if(data.customers==='') errors.customers='Approx customers are required';
        if(data.service==='') errors.service='Mention service';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();
        const url = "http://localhost:8000/webapp/api/partners/"
        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            fetch(url,{method:'POST',body:JSON.stringify(data),headers:{'Content-Type':'application/json'}}).then(res=>res.json()).catch(error=>console.error('Error:',error)).then(response=>console.log('Success:',response));
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (

                <Form onSubmit={this.handleSubmit}>
                <Row>
                <Col>
                <FormGroup>
                    <Label for="firstName">First Name*</Label>
                    <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>
                
                
                <FormGroup>
                    <Label for="lastName">Last Name*</Label>
                    <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                    <FormFeedback>{errors.lastName}</FormFeedback>
                </FormGroup>
                

                <FormGroup>
                    <Label for="email">Email*</Label>
                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="contact">Contact No.*</Label>
                    <Input id="contact" value={data.contact} invalid={errors.contact ? true : false} name="contact" onChange={this.handleChange} />
                    <FormFeedback>{errors.contact}</FormFeedback>
                </FormGroup>
                
                <FormGroup>
                    <Label for="address">Store Address*</Label>
                    <Input id="address" value={data.address} invalid={errors.address ? true : false} name="address" onChange={this.handleChange} />
                    <FormFeedback>{errors.address}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="city">City*</Label>
                    <Input id="city" value={data.city} invalid={errors.city ? true : false} name="city" onChange={this.handleChange} />
                    <FormFeedback>{errors.city}</FormFeedback>
                </FormGroup>

                <FormGroup>
                <Label for="state">State*</Label>
                <Input type="select" name="state" id="state" value={data.state} invalid={errors.state ? true: false} onChange={this.handleChange} >
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
                    <Input id="typestore" value={data.typestore} invalid={errors.typestore ? true : false} name="typestore" onChange={this.handleChange} />
                    <FormFeedback>{errors.typestore}</FormFeedback>
                </FormGroup>                
                
                <FormGroup>
                    <Label for="size">Size of Store(sq. ft)*</Label>
                    <Input id="size" value={data.size} invalid={errors.size ? true : false} name="size" onChange={this.handleChange} />
                    <FormFeedback>{errors.size}</FormFeedback>
                </FormGroup> 

                <FormGroup>
                    <Label for="workingemployees">No. of working employees*</Label>
                    <Input id="workingemployees" value={data.workingemployees} invalid={errors.workingemployees ? true : false} name="workingemployees" onChange={this.handleChange} />
                    <FormFeedback>{errors.workingemployees}</FormFeedback>
                </FormGroup> 
                
                <FormGroup>
                    <Label for="customers">Number of expected customerss per day at your shop?*</Label>
                    <Input id="customers" value={data.customers} invalid={errors.customers ? true : false} name="customers" onChange={this.handleChange} />
                    <FormFeedback>{errors.customers}</FormFeedback>
                </FormGroup> 

                <FormGroup>
                    
                    <Label for="service">Services you want to offer(Delivery/Pickup/customers Return/All)</Label>
                    <Input id="service" value={data.service} invalid={errors.service ? true : false} name="service" onChange={this.handleChange} />
                    <FormFeedback>{errors.service}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password*</Label>
                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password*</Label>
                    <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
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