import React, { Component } from 'react';
import { Form, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Row, Col } from 'reactstrap';

export class Confirm extends Component {

    continue = async event => {
        event.preventDefault();
        // Registration API call
        const data = this.props.values;

        const url = "http://localhost:8000/webapp/api/signup/"

        try {
            const body = JSON.stringify(data);
            const response = await fetch(url, {
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.status === 201) {
                this.props.nextstep();
            } else {
                throw Error('Signup not successful');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to register, please contact support');
        }
    }

    back = event => {
        event.preventDefault();
        this.props.prevstep();
    }

    render() {
        const {
            values: {
                first_name,
                last_name,
                email,
                contact,
                storename,
                address,
                city,
                state,
                pincode,
                typestore,
                size,
                workingemployees,
                customer,
                service,
                password,
                confirmPassword
            }
        } = this.props;

        return (
            <Form>
                <h1>Confirm Details</h1>
                <ListGroup>
                    <Row>
                        <Col>
                            <ListGroupItemHeading>FirstName:</ListGroupItemHeading>
                            <ListGroupItem>{first_name}</ListGroupItem>
                            <ListGroupItemHeading>LastName:</ListGroupItemHeading>
                            <ListGroupItem>{last_name}</ListGroupItem>
                            <ListGroupItemHeading>Email:</ListGroupItemHeading>
                            <ListGroupItem>{email}</ListGroupItem>
                            <ListGroupItemHeading>Contact:</ListGroupItemHeading>
                            <ListGroupItem>{contact}</ListGroupItem>
                            <ListGroupItemHeading>Storename:</ListGroupItemHeading>
                            <ListGroupItem>{storename}</ListGroupItem>
                            <ListGroupItemHeading>Address:</ListGroupItemHeading>
                            <ListGroupItem>{address}</ListGroupItem>
                            <ListGroupItemHeading>City:</ListGroupItemHeading>
                            <ListGroupItem>{city}</ListGroupItem>
                        </Col>
                        <Col>
                            <ListGroupItemHeading>State:</ListGroupItemHeading>
                            <ListGroupItem>{state}</ListGroupItem>
                            <ListGroupItemHeading>Pincode:</ListGroupItemHeading>
                            <ListGroupItem>{pincode}</ListGroupItem>
                            <ListGroupItemHeading>Type of store:</ListGroupItemHeading>
                            <ListGroupItem>{typestore}</ListGroupItem>
                            <ListGroupItemHeading>Size of store:</ListGroupItemHeading>
                            <ListGroupItem>{size}</ListGroupItem>
                            <ListGroupItemHeading>No. of working employees:</ListGroupItemHeading>
                            <ListGroupItem>{workingemployees}</ListGroupItem>
                            <ListGroupItemHeading>No. of Customers:</ListGroupItemHeading>
                            <ListGroupItem>{customer}</ListGroupItem>
                            <ListGroupItemHeading>Service:</ListGroupItemHeading>
                            <ListGroupItem>{service}</ListGroupItem>
                        </Col>
                    </Row>
                </ListGroup>

                <Button color="primary" size="lg" style={styles.button}
                    onClick={this.back}> Back</Button>
                <Button color="primary" size="lg" style={styles.button}
                    onClick={this.continue}> Continue</Button>
            </Form>
        );
    }
}

const styles = {
    button: {
        margin: 25,
        width: 120
    }
}

export default Confirm;