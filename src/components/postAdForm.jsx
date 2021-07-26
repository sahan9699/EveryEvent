import React, { Component} from 'react';

import ModelSubCategory from './common/ModelSubCategory';
import ModelMainCategory from './common/ModelMainCategory';
import Back from './common/back';

import { getOneCategory ,getAllCategory,getSubCategory,getOneSubCategory} from './../service/fakeCategory';
import { getAllLocations } from './../service/fakeLocation';

import "./../css/postAdForm.css"


class PostAdForm extends Component {
    state = { 
        mainCategory : [] ,
        subCategory : [] , 
        mainLocation : [],
        subLocation : [],
        selectMainCategoryDetails : "" , 
        selectedMainLocationDetails : "",
        selectedSubLocationDetails : "", 
        selectedMainCategoryId : "", 
        selectedSubCategoryId : "" 
    }

    componentDidMount() {
        this.setState({
          mainCategory : getAllCategory() ,
          subCategory : [],
          mainLocation : getAllLocations()
        })
    }

    handelGoback = () => {
       this.props.history.goBack();
    }

    handelSelectMainCategory = (id) => { 
       this.setState({
        selectedMainCategoryId : id ,
        selectedSubCategoryId : "", 
        subCategory : getSubCategory(id), 
        selectMainCategoryDetails : getOneCategory(id),
        selectedMainLocationDetails : "",selectedSubLocationDetails : "" 
       });
    }

    handelSelectSubCategory = (id) => {
        this.setState({selectedSubCategoryId : id
        });
    }

    handelSelectMainLocation = (details) => {
        this.setState({selectedMainLocationDetails : details,
                       subLocation : details.subLocation
        });
    }

    handelSelectSubLocation = (details) => {
      this.setState({selectedSubLocationDetails : details
      });

  }

  selectImage = event => {
    console.log(event.target.files);
  }

    render() { 
   
         const {subCategory,
            mainCategory,
            mainLocation,
            subLocation,
            selectedMainLocationDetails,
            selectMainCategoryDetails,
            selectedSubLocationDetails,         
            selectedMainCategoryId,
            selectedSubCategoryId} = this.state;

        let selectSubCategoryDetails = "";

        if(selectedSubCategoryId){
              selectSubCategoryDetails = subCategory.find(item => item.id === selectedSubCategoryId) 
        }
       
        return ( <div className="container postad-form"> 
   
        <Back  onHandelGoBack={this.handelGoback} />
        <h3 className="text-center heading"> Post Your Ad</h3>
        <hr />
        <div className="container headerForm text-center" >
            <div className="mainCategory item" data-toggle="modal" data-target="#MainCategory">
            {selectMainCategoryDetails ? 
            <React.Fragment>
            <img src={`/assets/${selectMainCategoryDetails.image}`} width="40"/>
            <h6>{selectMainCategoryDetails.name}</h6>
            </React.Fragment> 
            :  
            <React.Fragment>
            <img src="/assets/location.png" width="40"/>
            <h6>Select Main Category</h6>
            </React.Fragment>}            
               
            </div>
            {subCategory.length ?  <div className="subCategory item" data-toggle="modal" 
            data-target="#SubCategory">
            {selectSubCategoryDetails ? 
            <React.Fragment>
            <img src={`/assets/${selectSubCategoryDetails.image}`} width="40"/>
            <h6>{selectSubCategoryDetails.name}</h6>
            </React.Fragment> 
            :  
            <React.Fragment>
            <img src="/assets/location.png" width="40"/>
            <h6>Select Sub Category</h6>
            </React.Fragment>}  
            </div> : null}
           
            <div className="mainLocation item" data-toggle="modal" data-target="#MainLocation">
            {selectedMainLocationDetails ? 
            <React.Fragment>
            <img src="/assets/location.png" width="40"/>
            <h6>{selectedMainLocationDetails.locationName}</h6>
            </React.Fragment> 
            :  
            <React.Fragment>
            <img src="/assets/location.png" width="40"/>
            <h6>Select Main Loction</h6>
            </React.Fragment>}
            </div>
            {selectedMainLocationDetails ? 
            <div className="subLocation item" data-toggle="modal" data-target="#SubLocation">
            {selectedSubLocationDetails ? 
            <React.Fragment>
            <img src="/assets/location.png" width="40"/>
            <h6>{selectedSubLocationDetails.subLocationName}</h6>
            </React.Fragment> 
            :  
            <React.Fragment>
            <img src="/assets/location.png" width="40"/>
            <h6>Select Sub Loction</h6>
            </React.Fragment>} 
            </div>
            : null }
        </div>
        <form>
        <div className="container formContainer" style={{padding :"20px"}}>
        
          <div className="formDiv">
           <h4 className="text-center">Advertisment Details</h4>
              <hr />
            <div className="form-group">
              <label htmlFor="name">Name of business </label>
              <input type="text" className="form-control" 
              id="name" name="name"             
              placeholder="Enter Business Title" />
            </div>

            <div className="form-group">
              <label htmlFor="coverImage">Cover Image </label>
              <input type="file" 
              className="form-control" 
              id="coverImage" name="coverImage" 
              onChange={this.selectImage}  />
            </div>

            <div className="form-group">
              <label htmlFor="moreImage">More Image</label>
              <input type="file" 
              className="form-control" 
              id="moreImage"  name="moreImage"  
              onChange={this.selectImage}            
              multiple/>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description About Bussiness</label>
              <textarea 
              className="form-control" 
              id="description"  name="description" 
              rows="5"/>
            </div>

            <div className="form-group">
              <label htmlFor="highPackeg">High packge of Business</label>
              <input 
              type="number" 
              className="form-control" 
              id="highPackeg" name="highPackeg" 
              placeholder="High packer of your business" 
              min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lowerPackge">Low packge of Business</label>
              <input 
              type="number" 
              className="form-control" 
              id="lowerPackge" name="lowerPackge" 
              placeholder="Lower packer of your business" 
              min="0" 
              />
            </div> 


          </div>
          <div className="formDiv">
              <h4 className="text-center">Contact Details</h4>
              <hr />
              <div className="form-group">
                <label hmlFor="contactName">Contact Name</label>
                <input type="text" 
                className="form-control" 
                id="contactName" name="contactName" />
              </div>
             

              <div className="form-group">
                <label hmlFor="email">Email</label>
                <input type="email" 
                className="form-control" 
                id="email" name="email" />
              </div>

              <div className="form-group">
                <label hmlFor="webSite">Web Site Link</label>
                <input type="text" 
                className="form-control" 
                id="webSite" name="webSite" />
              </div>

            <div className="form-group">
             <label htmlFor="address">Address to Bussiness places</label>
              <textarea 
              className="form-control" 
              id="address"  name="address"/>
            </div>


            <div className="form-group">
              <label for="exampleInputEmail1">Contact Number</label>
              <br />
               <button type="button" className="btn btn-primary form-control" 
               data-toggle="modal" 
               data-target="#contactNumberModel" >Add Number</button>
            </div>
           
           </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        {/*Main location  Modal  */}
<div id="MainLocation" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title text-center">Main Location</h4>
      </div>
      <div class="modal-body">
      <ul class="list-group">
         {mainLocation.map(item =>  <li class="list-group-item" data-dismiss="modal"
          onClick={() => this.handelSelectMainLocation(item)}>{item.locationName}</li>)}    
       </ul>
      </div>    
    </div>
  </div>
</div>


        {/*Sub location  Modal  */}
<div id="SubLocation" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title text-center">Sub Location</h4>
      </div>
      <div class="modal-body">
      <ul class="list-group">
      {subLocation.map(item =>  <li class="list-group-item" data-dismiss="modal" 
      onClick={() => this.handelSelectSubLocation(item)}>{item.subLocationName}</li>)}
       </ul>
      </div>  
    </div>
  </div>
</div>


        {/*Sub Category  Modal  */}
<div id="SubCategory" class="modal fade" role="dialog">
  <div class="modal-dialog">    
    <div class="modal-content">
      <div class="modal-header"> 
        <h4 class="modal-title text-center">Sub Category</h4>
      </div>
      <div class="modal-body">
      <ModelSubCategory subCategory={subCategory} 
      selectedSubCategoryId={selectedSubCategoryId} 
      onSelectSubCategory={this.handelSelectSubCategory} />
      </div>   
    </div>
  </div>
</div>

     {/*Main Category  Modal  */}
<div id="MainCategory" class="modal fade" role="dialog">
  <div class="modal-dialog">   
    <div class="modal-content">
      <div class="modal-header">      
        <h4 class="modal-title text-center">Main Category</h4>
      </div>
      <div class="modal-body">
      <ModelMainCategory mainCategory={mainCategory} 
      selectedMainCategoryId={selectedMainCategoryId} 
      onSelectMainCategory={this.handelSelectMainCategory} />
      </div>
    </div>
  </div>
</div>

 {/*Add Contact Number Modal  */}
 <div id="contactNumberModel" class="modal fade" role="dialog">
  <div class="modal-dialog">   
    <div class="modal-content">
      <div class="modal-header">      
        <h4 class="modal-title"> Add Number </h4>
        <br/>      
      </div>
      <p className="m-4">If you haven't verified it before, we will send you an SMS with a 
        PIN code to make sure that we can get in touch with you.</p>
      <div class="modal-body">

               <div className="form-group">
                <input type="text" 
                className="form-control" 
                id="email" name="email" 
                placeholder="Enter number"
                />
              </div>

              <div className="form-group">
               <button className="btn btn-danger form-control" >Add</button>
              </div>
     
      </div>
    </div>
  </div>
</div>

</div> 
        
        );
    }
}
 
export default PostAdForm;