import React from 'react'; 
import './Nav.css';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
const Nav=()=>
{ 
    return(
        <div className="navstyle">
            <ul>
              <center> <Button style={styles.button} color="secondary" size="lg"> <Link to="/"><li>Sign Up</li> </Link></Button></center>
             <center>  <Button style={styles.button} color="secondary" size="lg"> <Link to="login"><li>Login </li></Link></Button></center>
            </ul>
            </div>
    );
} 
const styles={
    button:{
        width:150,
        margin:25
    }
}
export default Nav; 