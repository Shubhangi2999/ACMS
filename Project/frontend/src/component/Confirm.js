import React, { Component } from 'react';
import { Form, Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
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
                firstName,
                lastName,
                email,
                contact,
                storeName,
                address,
                city,
                state,
                pincode,
                typeStore,
                size,
                workingEmployees,
                customer,
                ownedrented,
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
                            <ListGroupItem>{firstName}</ListGroupItem>
                            <ListGroupItemHeading>LastName:</ListGroupItemHeading>
                            <ListGroupItem>{lastName}</ListGroupItem>
                            <ListGroupItemHeading>Email:</ListGroupItemHeading>
                            <ListGroupItem>{email}</ListGroupItem>
                            <ListGroupItemHeading>Contact:</ListGroupItemHeading>
                            <ListGroupItem>{contact}</ListGroupItem>
                            <ListGroupItemHeading>Storename:</ListGroupItemHeading>
                            <ListGroupItem>{storeName}</ListGroupItem>
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
                            <ListGroupItem>{typeStore}</ListGroupItem>
                            <ListGroupItemHeading>Store Size (in sq. ft.):</ListGroupItemHeading>
                            <ListGroupItem>{size}</ListGroupItem>
                            <ListGroupItemHeading>No. of working employees:</ListGroupItemHeading>
                            <ListGroupItem>{workingEmployees}</ListGroupItem>
                            <ListGroupItemHeading>No. of Customers:</ListGroupItemHeading>
                            <ListGroupItem>{customer}</ListGroupItem>
                            <ListGroupItemHeading>Owned/Rented:</ListGroupItemHeading>
                            <ListGroupItem>{ownedrented}</ListGroupItem>
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