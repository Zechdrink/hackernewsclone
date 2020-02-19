import React from 'react';
// import { Link } from 'react-router-dom';
import './navbar.scss'

const NavBar = (props) => {
    return ( 
    
    <div className = "nav">
        <h2> HackerNewsClone</h2>
        <p> New </p>
        <p> Past </p>
        <p> Comments </p>
        <p> Submit </p>
        <p> Login </p>
    </div> 
    
    );
}
 
export default NavBar;