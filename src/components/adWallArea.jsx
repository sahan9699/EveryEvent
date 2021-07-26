import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';

class AdWallArea extends Component {
    state = {  }
    render() { 

        const {filterdAds} = this.props;
        return (
    <React.Fragment>
       {filterdAds.map(selectedCategoryAd =><NavLink to={`/ad/${selectedCategoryAd.id}`}> <div className="advertisment">
        <div className="image-area">
            <img src={`/assets/${selectedCategoryAd.image}`} width="220" height="150"/>
        </div>
        <div className="details-area">
           <h5 className="text-center">{selectedCategoryAd.title}</h5><br/><br/>
           <p>{selectedCategoryAd.location.mainLocation.name},{selectedCategoryAd.subCategory.name}   </p>
        </div>
        </div></NavLink>)}
    </React.Fragment>);
    }
}
 
export default AdWallArea;