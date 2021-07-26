import React, { Component } from 'react';

import {Link} from "react-router-dom";

const SubLocation = ({id}) => {
    return ( 
        <React.Fragment>
             <ul className="list-group">
                {/* {mainLocations.map(location =>  <Link to={`/subLocation/${loca}`}><li class="list-group-item">{location.locationName}</li></Link>)}   */}
            </ul>
        </React.Fragment>
     );
}
 
export default SubLocation;