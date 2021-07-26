import React, { Component } from 'react';
import {FaArrowLeft} from "react-icons/fa"

import "../../css/back.css";

const Back = ({onHandelGoBack}) => {
    return (  <React.Fragment>
    <span className="ml-auto back" onClick={onHandelGoBack}><FaArrowLeft /> back</span></React.Fragment> );
}
 
export default Back;