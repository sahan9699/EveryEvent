import React from 'react';
import MainCategory from './common/mainCategory';

import { getCategory } from './../service/fakeCategory';

import "../css/homePageCategory.css";




const HomePageCategory = () => {
    return ( 
        <div className="container category">
            <MainCategory 
            title="Vehical" 
            image="/assets/vehical.png"
            count="3232"
            categoryId="5e83163081d6cf3ff406b257"
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
           
            />
            <MainCategory 
            title="Dressing" 
            image="/assets/dressing.png"
            count="3232"
            categoryId="5e83169081d6cf3ff406b257"
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
      
            />
            <MainCategory 
            title="Decoration" 
            image="/assets/decoration.png"
            count="3232"
            categoryId="5e83168081d6cf3ff406b257"
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
           
            />
            <MainCategory 
            title="Salon" 
            image="/assets/salon.png"
            count="3232"
            categoryId="5e83166081d6cf3ff406b257" 
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
          
            />
            <MainCategory 
            title="Foods" 
            image="/assets/food.png"
            count="3232"
            categoryId="5e83167081d6cf3ff406b257" 
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
            />
            <MainCategory 
            title="Places" 
            image="/assets/place.png"
            count="3232"
            categoryId="5e83165081d6cf3ff406b257"
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
            />
            <MainCategory 
            title="Entertainment" 
            image="/assets/music.png"
            count="3232"
            categoryId="5e83162081d6cf3ff406b257"
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
            />
            <MainCategory 
            title="Photograpy" 
            image="/assets/photograpy.png"
            count="3232"
            categoryId="5e83164081d6cf3ff406b257"
            description="Buy and sell 
            new and used home appliances including
            furniture, kitchen items, garden products
            and other household items in Sri Lanka."
            />
        </div>
     );
}
 
export default HomePageCategory;