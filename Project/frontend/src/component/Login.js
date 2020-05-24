import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button, isRequired } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 't@t.com',
            password: 'test',
            submitted: false,
            error: ''
        };
    }

    sendLoginRequest = async () => {
        const { email, password } = this.state;
        const body = JSON.stringify({ email, password });

        try {
            const response = await fetch('http://localhost:8000/webapp/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            if (response.status !== 200) {
                throw new Error('Login request not successful');
            }

            const token = await response.text();

            const userAuth = JSON.stringify({
                token,
                email,
            });

            if (!token) {
                throw new Error('Token not recieved');
            }

            localStorage.setItem('userAuth', userAuth)

            this.props.history.push('/dashboard')
        } catch (error) {
            alert('Some error occurred during authentication')
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }; //end change

    onSubmit = (e) => {
        this.sendLoginRequest();
        e.preventDefault();
        this.setState({
            username: "",
            password: "",
        });

        this.props.history.push('/landing');
    };


    render() {
        return (
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
                <center><Button onClick={this.sendLoginRequest} color="primary" size="lg" style={styles.button}>Login</Button></center>
            </AvForm>
        );
    }
}
const styles = {
    button: {
        margin: 25,
        width: 120
    },
}
export default Login; 