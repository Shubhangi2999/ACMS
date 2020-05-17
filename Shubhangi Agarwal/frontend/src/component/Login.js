
import React, { Component } from 'react';
import { Label, Button } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

// const clientId = '';
// const redirectUrl = '';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            error: ''
        };
    }

    sendLoginRequest = async () => {
        const { email, password } = this.state;
        const body = JSON.stringify({ email, password });

        try {
          const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            if (response.status !== 200) {
                throw new Error('Login request not successful')
            }
            
            const parsedResponse = await response.json(); 

            if (parsedResponse.success) {
                // Store any token if proviced
                // Navigate to dashboard
            } else {
                // Show error
            }
        } catch (error) {
            // Show error
        }
    }

    //aunthenticate request
    async requestUserInfo(token) {
        const response = await fetch('http://localhost:8000/api/participant/userinfo', {
            method: 'GET',
            headers: new Headers({
                Authorization: 'Bearer ${token}',
            }),
        });

        return await response.json();
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

        // this.props.history.push('/landing');
    };

    render() {
        return (
            <AvForm>
                <h1>Login</h1>
                <br />
                <AvGroup>
                    <Label for="email">Email</Label>
                    <AvInput
                        name="email"
                        id="email"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <AvFeedback>Invalid Email</AvFeedback>
                </AvGroup>
                <AvGroup>
                    <Label for="password">Password</Label>
                    <AvInput
                        name="password"
                        type="password"
                        id="password"
                        required
                        value={this.state.password}
                        onChange={e => this.change(e)}
                    />
                    <AvFeedback>Password is required</AvFeedback>
                </AvGroup>
                <center><Button color="primary" size="lg" style={styles.button}
                    onClick={this.continue} onSubmit={e => this.onSubmit(e)}>Login</Button></center>
            </AvForm>
        );
    }
}
const styles = {
    button: {
        margin: 25,
        width: 120
    }
}
export default Login; 