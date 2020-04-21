import React, { Fragment } from 'react';
import logo from './amazon_logo.png';
import './header.css';
function Header(props){
    return(
        <Fragment>
            <br />

            <img className="photo" src={logo} alt="logo" />
            <div className="Head">
            <header>
                <h1> 
            REGISTER
             </h1>
             <a href="/">Already a User? SIGN IN</a>
             </header>
             </div>
             <hr />
        </Fragment>
    );
}
export default Header;
