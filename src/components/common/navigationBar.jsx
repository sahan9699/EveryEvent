import React from 'react';
import {Link} from "react-router-dom";


import "../../css/navigationBar.css"

const NavigationBar = () => {
    return ( 
       
<nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
  <Link className="navbar-brand" to="/">
  <img src="/assets/logo.jpeg" width="150" height="60" alt="logo"/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul className="navbar-nav mr-auto">
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li> */}
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link btn login" to="/login" style={{borderWidth : 1,borderColor : "black",padding : 3,marginTop : 5}}>
        <img src="/assets/group.png" width="25" alt="login"/>
        LOGIN
        </Link>
      </li>
      <li className="nav-item post-ad-btn">
        <Link to="/postad" className="nav-link btn btn-warning" style={{padding : 5}}>
        POST YOUR AD
        </Link>
      </li>
    </ul>
  </div>
</nav>

     );
}
 
export default NavigationBar;