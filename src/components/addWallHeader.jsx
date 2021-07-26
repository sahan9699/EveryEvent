import React, { Component } from 'react';
import Back from './common/back';

import { getAllLocations,getSubLocations,getSelectMainLocation,getSelectSubLocation} from './../service/fakeLocation';
import { getOneCategory } from './../service/fakeCategory';

import "../css/adWallHeader.css";
import SubLocation from './subLocation';


class AdWallHeader extends Component {

  state = {allLocations : [],selectMainLocation :"",subLocation : ""};

  componentDidMount() {
    const allLocations = [{locationName : "All Locations"},...getAllLocations()]

    this.setState({ allLocations:allLocations});}

  

  render() { 
   
  const {allLocations,selectMainLocation,subLocations} = this.state;

  const {selectedCategory : selectedCategoryDetails,onSearch,searchValue,onHandelGoBack} = this.props;

  return (  
   <React.Fragment>
        <Back  onHandelGoBack={onHandelGoBack} />
      <div className="category-area text-center">
          <img src={`./../assets/${selectedCategoryDetails.image}`}  width="30" className="m-2"/>
          <span style={{fontWeight : "500",fontSize : "15px"}}>{selectedCategoryDetails.name}</span> 
       </div>
       <div className="location-area"  data-toggle="modal" data-target="#mainLocation">
          <img src="/assets/location.png" width="20"/>
          <span style={{fontWeight : "500"}}>{this.props.mainLocation.locationName || "Select Location"}</span>
       </div>
       {this.props.mainLocation.subLocation ?  <div className="location-area"  data-toggle="modal" data-target="#subLocation">
          <img src="/assets/location.png" width="20"/>
          <span style={{fontWeight : "500"}}>{this.props.subLocation.subLocationName || "Sub Location"}</span>
       </div> : null}
       
       <div className="search-area text-center">
           <input type="text" placeholder="Search What You Want ?" onChange={onSearch} value={searchValue}/>
       </div>

          <div className="modal" id="mainLocation">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Select District</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                
                  <ul className="list-group">
                   {allLocations.map(location =>  
                   <li className="list-group-item"
                    key={location.id || location.locationName} 
                    onClick={() => this.props.onSelectMainLocation(location)}  
                    data-dismiss="modal">{location.locationName}</li>)}  
                  </ul>
                 
                </div>
                {/* <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div> */}
              </div>
            </div>
          </div>                

           
           <div className="modal" id="subLocation">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Select Sub Location</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
            
                  <ul className="list-group">
                  {this.props.mainLocation.subLocation ? 
                  this.props.mainLocation.subLocation.map(sublocation =>  
                  <li 
                  className="list-group-item" 
                  key={sublocation.id}  
                  data-dismiss="modal"
                  onClick={() => this.props.onSelectSubLocation(sublocation)}>{sublocation.subLocationName}</li>) 
                  : null} 
                  </ul>
                 
                </div>
                {/* <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div> */}
              </div>
            </div>
          </div> 
                   
</React.Fragment>);
  }
}
 
export default AdWallHeader;

