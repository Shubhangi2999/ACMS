import React, { Component } from 'react'; 
import './Nav.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
export class Nav extends Component
{
    render()
    {
        return(
            
        <div className="navstyle">
            <ul>
            <center><h1>ACCESS POINT CLASSIFICATION</h1></center>
              <center> <Button style={styles.button} color="secondary" size="lg"> <Link to="/"><li>Register</li> </Link></Button></center>
             <center>  <Button style={styles.button} color="secondary" size="lg"> <Link to="login"><li>Login </li></Link></Button></center>
            </ul>
             </div>
    );
    }
} 
const styles={
    button:{
        width:150,
        margin:25
    }
}
export default Nav; 