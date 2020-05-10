import React, { Component } from 'react';
import { Label, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
        };
    };

    handleValidSubmit = (event, values) => {
        const {email, password} = values;
        this.setState({ email, password });
        // Send AJAX (POST) request to server with credentials
    };

    handleInvalidSubmit = (event, errors, values) => {
       // Handle error
    };

    render() {
        const {email, password} = this.state;

        return (
            <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                <h1>LOGIN</h1>
                <AvGroup>
                    <Label for="Email ID">Email ID</Label>
                    <AvField name="email" defaultValue={email} label="Email Address" type="email" required />
                    <AvFeedback>Email is required</AvFeedback>
                </AvGroup>
                <AvGroup>
                    <Label for="password">Password</Label>
                    <AvField name="password" defaultValue={password} label="Password" type="password" required />
                    <AvFeedback>Password is required</AvFeedback>
                </AvGroup>
                <Button color="primary" style={styles.button}>Submit</Button>
            </AvForm>
        );
    }
}

const styles = {
    button: {
        margin: 25
    }
}

export default Login;