import React from 'react';


const ModelMainCategory = ({selectedMainCategoryId,mainCategory,onSelectMainCategory}) => {

   return (
    <ul class="list-group">     
    {mainCategory.map(sub => 
      <li class={selectedMainCategoryId == sub.id ? "list-group-item active" : "list-group-item" } key={sub.id} onClick={() => onSelectMainCategory(sub.id)}  data-dismiss="modal">                      
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
 
export default ModelMainCategory;