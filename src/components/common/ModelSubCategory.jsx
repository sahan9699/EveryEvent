import React from 'react';


const ModelSubCategory = ({selectedSubCategoryId,subCategory,onSelectSubCategory}) => {

   return (
    <ul class="list-group">     
    {subCategory.map(sub => 
      <li class={selectedSubCategoryId == sub.id ? "list-group-item active" : "list-group-item" } key={sub.id} onClick={() => onSelectSubCategory(sub.id)}  data-dismiss="modal">                      
      <div className="img-text-alinge">
          <div className="image-flex">
           <img src={`/assets/${sub.image}`} 
           width="30" 
           className="mr-2"/>
          </div>
          <div className="details-flex">
            {sub.name}
          </div>
      </div>
      </li>
      
         )}
    </ul>
      );
     
}
 
export default ModelSubCategory;