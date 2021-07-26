import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { getAllLocations } from './../service/fakeLocation';
import { getAllCategory,getSubCategory } from './../service/fakeCategory';

class AdWallSortArea extends Component {
  state = { allMainCategory : [] ,subCategory: ""}

  componentDidMount() {
    this.setState({ allMainCategory : getAllCategory()})
  }
  render() { 

    const {allMainCategory} = this.state;
    const {
      selectedCategory,
      subCategory,
      onSelectAllAds,
      onSelectSubCategory,
      onSelectMainCategory,
      onSelectTopRateAd,
      topRate,
      selectedSubCategoryId,
      onSelectSortByOption} = this.props;

    return ( <React.Fragment>
      <div className="sorting-section">
        <form>
         <div className="form-group">
         <div className="form-group">
            <select  className="form-control"  onChange={onSelectSortByOption}>
              <option selected value="">All</option>
              <option  value="addDate,desc">Newest On Top</option>
              <option  value="addDate,asc">Oldest On Top</option>
              <option  value="highPackge,asc">Low To Hight Packeg</option>
              <option  value="highPackge,desc">Hight To Low Packeg</option>
            </select>  
         </div>
         </div>
         <div className="form-check">                      
            <ul className="list-group">
              <li className={topRate ? "list-group-item active" : "list-group-item" } onClick={onSelectTopRateAd}><img src="/assets/star.png" width="30" className="mr-2" />Top Rating Ad</li>
            </ul>
           </div>
          </form>
        </div>
        <div className="sub-category">
        <ul className="list-group">
        <li class={!selectedSubCategoryId.length ? "list-group-item active" : "list-group-item" }  key={selectedCategory.id} onClick={onSelectAllAds}>                      

        <label class="form-check-label">
           <input type="checkbox" class="form-check-input" value=""  checked={!selectedSubCategoryId.length ? true : false} />
                 All Ads <img src={`/assets/${selectedCategory.image}`}  width="30"  />     
        </label>

        </li>
        {subCategory.map(sub => 
        <li 
        class={selectedSubCategoryId.find(item => item === sub.id)? "list-group-item active" : "list-group-item" } 
        key={sub.id} 
        onClick={() => onSelectSubCategory(sub.id)}> 

        <label class="form-check-label">
           <input type="checkbox" class="form-check-input" value="" checked={selectedSubCategoryId.find(item => item === sub.id)}/>
           {sub.name} <img src={`/assets/${sub.image}`}  width="30"  />     
        </label>
    
        </li>
           )}
           </ul>
        </div>
        <div className="all-category">
        <div className="form-group">
            <select  className="form-control" id="exampleFormControlSelect2" onChange={onSelectMainCategory}>
              <option selected value={selectedCategory.id}>{selectedCategory.name}</option>
             {allMainCategory.map(category => category.id !== selectedCategory.id ?<option value={category.id} key={category.id}>{category.name}</option> : null)}
            </select>  
         </div>
        </div> 
</React.Fragment> );
  }
}
 
export default AdWallSortArea;
