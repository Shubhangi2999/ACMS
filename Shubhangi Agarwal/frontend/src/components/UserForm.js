import React, {Component} from 'react';
import PersonalDetails from './PersonalDetails'
import StoreDetails from './StoreDetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component{
    state={
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        storename:'',
        address: '',
        city:'',
        state: '',
        pincode:'',
        typestore:'',
        size:'',
        workingemployees:'',
        customer:'',
        service:'',
        password: '',
        confirmPassword: ''
    };
    //Proceed to next step
    nextstep = () =>{
        const {step} = this.state;
        this.setState({
            step:step+1
        });
    };
    //proceed to prev step
    prevstep = () =>{
        const {step} = this.state;
        this.setState({
            step:step-1
        });
    };
    handleChange=input => e => {
        this.setState({[input]:e.target.value});
    };
    render()
    {
        const {step}= this.state;
        const {firstName,lastName,email,contact,storename,address,city,state,pincode,typestore,size,workingemployees,
            customer,service,password,confirmPassword}=this.state;
        const values = {firstName,lastName,email,contact,storename,address,city,state,pincode,typestore,size,workingemployees,
            customer,service,password,confirmPassword}
        switch(step)
        {
            case 1:
                return(
                    <PersonalDetails
                    nextstep={this.nextstep}
                    handleChange={this.handleChange}
                    values={values} 
                    />
                );
            case 2:
                return(
                    <StoreDetails
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                    values={values} 
                    />
                );
            case 3:
                return(
                    <Confirm
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    values={values} 
                    />
                );
            case 4:
                return (
                    <Success />
                );
        }
    }
}
export default UserForm;