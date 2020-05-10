import React, { Fragment } from 'react';
import logo from './amazon_logo.png';
import './header.css';
function Header(props){
    return(
        <Fragment>
            <br />

            <img className="photo" src={logo} alt="logo" />
            <div className="Head">
             </div>
             <hr />
        </Fragment>
    );
}
export default Header;
