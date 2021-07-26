import React, { Component } from 'react';

import { getOneCategory ,getAllCategory,getSubCategory} from './../service/fakeCategory';
import SubCategory from './common/ModelSubCategory';

import "./../css/postAd.css"


class PostAdSubCategory extends Component {

    state = { subCategory : [] }

    componentDidMount() {
        this.setState({subCategory : getSubCategory(this.props.match.params.id)})
    }
    render() { 
        return ( <div className="container post-ad">
        <div className="container">
            <h3 className="text-center">Select  Sub Category </h3>
            <hr></hr>
        </div>
        {this.state.subCategory.map(item =>  <SubCategory 
           title={item.name} 
           image={`/assets/${item.image}`}
           subCategoryId={item.id}
           description="Buy and sell 
           new and used home appliances including
           furniture, kitchen items, garden products
           and other household items in Sri Lanka."
          
           />)}
          

    
       </div> );
    }
}
 
export default PostAdSubCategory;