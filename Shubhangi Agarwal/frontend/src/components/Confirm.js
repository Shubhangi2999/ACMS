import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button ,ListGroup,ListGroupItem,ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import {Row,Col} from 'reactstrap';
export class Confirm extends Component{
    continue = e =>{
        e.preventDefault();
        //API
        const data=this.props.values;
        console.log(data);
        const url = "http://localhost:8000/webapp/api/partners/"
        fetch(url,{method:'POST',body:JSON.stringify(data),headers:{'Content-Type':'application/json'}}).then(res=>res.json()).catch(error=>console.error('Error:',error)).then(response=>console.log('Success:',response));
        this.props.nextstep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevstep();
    }
    render()
    {
        const {values:{firstName,lastName,email,contact,password,confirmPassword,storename,address,city,pincode,state,typestore,size,workingemployees,
            customer,service}}=this.props;
        return(
                <Form>
                    
                <h1>Confirm Details</h1>
                <ListGroup>
                    <Row>
                        <Col>
                    <ListGroupItemHeading>FirstName:</ListGroupItemHeading>
                    <ListGroupItem>{firstName}</ListGroupItem>
                    <ListGroupItemHeading>Email:</ListGroupItemHeading>
                    <ListGroupItem>{email}</ListGroupItem>
                    <ListGroupItemHeading>Storename:</ListGroupItemHeading>
                    <ListGroupItem>{storename}</ListGroupItem>
                    <ListGroupItemHeading>City:</ListGroupItemHeading>
                    <ListGroupItem>{city}</ListGroupItem>
                    <ListGroupItemHeading>Address:</ListGroupItemHeading>
                    <ListGroupItem>{address}</ListGroupItem>
                    <ListGroupItemHeading>Type of store:</ListGroupItemHeading>
                    <ListGroupItem>{typestore}</ListGroupItem>
                    <ListGroupItemHeading>No. of Customers:</ListGroupItemHeading>
                    <ListGroupItem>{customer}</ListGroupItem>
                    </Col>
                    
                    <Col>
                    <ListGroupItemHeading>LastName:</ListGroupItemHeading>
                    <ListGroupItem>{lastName}</ListGroupItem>
                    <ListGroupItemHeading>Contact:</ListGroupItemHeading>
                    <ListGroupItem>{contact}</ListGroupItem>
                    <ListGroupItemHeading>Service:</ListGroupItemHeading>
                    <ListGroupItem>{service}</ListGroupItem>
                    <ListGroupItemHeading>State:</ListGroupItemHeading>
                    <ListGroupItem>{state}</ListGroupItem>
                    <ListGroupItemHeading>Pincode:</ListGroupItemHeading>
                    <ListGroupItem>{pincode}</ListGroupItem>
                    <ListGroupItemHeading>Size of store:</ListGroupItemHeading>
                    <ListGroupItem>{size}</ListGroupItem>
                    <ListGroupItemHeading>No. of working employees:</ListGroupItemHeading>
                    <ListGroupItem>{workingemployees}</ListGroupItem>
                    </Col>
                    </Row>
                </ListGroup>

                <Button color="primary" style={styles.button}
                onClick={this.back}> Back</Button>
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
export default Confirm;