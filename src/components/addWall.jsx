import React, { Component } from 'react';
import _, { set } from "lodash";

import { getOneCategory ,getAllCategory,getSubCategory} from './../service/fakeCategory';
import { getAdvertisment ,getAdvertismentInSubCategory} from './../service/fakeAd';

import AdWallHeader from './addWallHeader';
import AdWallSortArea from './adWallSortArea';
import AdWallArea from './adWallArea';
import NoData from './noData';
import Pagination from './common/pagination';
import { paginate } from './../utils/paginate';

import   "../css/addWall.css";




class AdWall extends Component {
    state = { 
        selectedCategoryId : "",
        selectedSubCategoryId : [],
        selectedCategory : {},
        subCategory : [],
        allCategory : [],
        pageSize : 2,
        activePage : 1,
        mainLocation : "",
        subLocation : "",
        selectedCategoryAllAds : [],
        filterdAds : [],
        topRate : false,
        sortBy : "",
        searchValue : "",
    }

constructor(props)  {
   super(props);
   this.state.selectedCategoryId = this.props.match.params.id;
}
   
componentDidMount() {

 this.setState({
               allCategory : getAllCategory(),
               selectedCategoryAllAds : getAdvertisment(this.props.match.params.id),
               subCategory : getSubCategory(this.props.match.params.id),
               selectedCategory : getOneCategory(this.props.match.params.id),
               filterdAds :getAdvertisment(this.props.match.params.id) 
            });
         }

   handelSelectMainCategory = ({currentTarget}) => { 
    window.location = `${currentTarget.value}`

               }

    handelGoback = () => {
        this.props.history.goBack();
    }
          

    handelSelectMainLocation = (location) => {
       location.id ? this.setState({mainLocation : location,subLocation : ""})
        : 
       this.setState({mainLocation : "",subLocation : ""});
    }

    handelSelectSubLocation = (location) => {    
        this.setState({subLocation : location});
    }

    handelSelectSubCategory = (id) => {
        let newSselectedSubCategoryId = this.state.selectedSubCategoryId;
        if(!newSselectedSubCategoryId.find(item => item === id)){
            newSselectedSubCategoryId = [id,...this.state.selectedSubCategoryId];
            this.setState({selectedSubCategoryId : newSselectedSubCategoryId,searchValue : "",activePage : 1});
        }else{
            newSselectedSubCategoryId = newSselectedSubCategoryId.filter(item => item !== id);
            this.setState({selectedSubCategoryId : newSselectedSubCategoryId});
        }
         
    }

    handelSelectAllAds = () => {
       this.setState({selectedSubCategoryId : []})
    }

    handelTopRateAd = () => {
        const topRate = !this.state.topRate
       this.setState({topRate,activePage: 1});
    }

    handelSelectSortByOption = ({currentTarget}) => {
        this.setState({sortBy : currentTarget.value,activePage : 1});
    }
    handelSesrch = ({currentTarget}) => {
        this.setState({searchValue : currentTarget.value, selectedSubCategoryId : []})
    }
    handelPageChange = (page) => {
      this.setState({activePage : page});
    }

    render() { 
       
       const {
        selectedCategoryId,
        selectedSubCategoryId,
        selectedCategory,
        allCategory,
        subCategory,
        pageSize,
        activePage,
        selectedCategoryAds,
        mainLocation,
        subLocation,
        topRate,
        sortBy,
        searchValue} = this.state;

        let {filterdAds} = this.state;

        if(selectedSubCategoryId.length){
            for(let i = 0 ; i < selectedSubCategoryId.length ;i++){
                filterdAds = filterdAds.filter(ad => 
                                 
                    {for(let k = 0 ; k < ad.subCategory.length ;k++){
                       if(ad.subCategory[k].id ===  selectedSubCategoryId[i]){
                           return ad;
                       }
                    }
                    
            })
        }
         
        }

        

        if(topRate){
            filterdAds = _.orderBy(filterdAds,["topRate"],["desc"])
        }
        if(mainLocation){
            filterdAds = filterdAds.filter(ad => ad.location.mainLocation.id ===  mainLocation.id)
        }
        if(subLocation){
            filterdAds = filterdAds.filter(ad => ad.location.subLocation.id ===  subLocation.id)
        }
        if(sortBy){
           const  itemArray = sortBy.split(',', 2);
           filterdAds = _.orderBy(filterdAds,[itemArray[0]],[itemArray[1]])
        }
        if(searchValue){
            filterdAds = filterdAds.filter(ad => ad.title.toLowerCase().startsWith(searchValue.toLowerCase()));
         }
         const paginateData = paginate(filterdAds,activePage,pageSize);

        return ( <div className="ad-wall container">
                   <div className="header">
                   <AdWallHeader 
                   selectedCategory={selectedCategory} 
                   mainLocation={mainLocation}
                   subLocation={subLocation}
                   searchValue={searchValue}
                   onSelectMainLocation={this.handelSelectMainLocation}
                   onSelectSubLocation={this.handelSelectSubLocation}
                   onSelectMainCategory={this.handelSelectMainCategory}
                   onSearch={this.handelSesrch}
                   onHandelGoBack={this.handelGoback}
                    />
                   </div>
                   <div className="main">
                       <div className="sorting-area">
                        <AdWallSortArea 
                           subCategory={subCategory}
                           topRate={topRate}
                           selectedCategory={selectedCategory}
                           selectedSubCategoryId={selectedSubCategoryId}
                           onSelectAllAds = {this.handelSelectAllAds}
                           onSelectSubCategory = {this.handelSelectSubCategory}
                           onSelectMainCategory={this.handelSelectMainCategory}
                           onSelectTopRateAd={this.handelTopRateAd}
                           onSelectSortByOption={this.handelSelectSortByOption}
                        />
                       </div>
                       <div className="content-area">
                      
                         {paginateData[0] ? <AdWallArea filterdAds={paginateData}/> : <NoData />}  
                          <Pagination 
                          itemsCount={filterdAds.length}
                          pageSize={pageSize} 
                          onPageChange={this.handelPageChange}
                          activePage={activePage}
                          />
                       </div>
                   </div>
                 </div> );
    }
}
 
export default AdWall;