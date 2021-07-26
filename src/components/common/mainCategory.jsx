import React from 'react';
import {Link} from "react-router-dom";
import { AnimationWrapper } from 'react-hover-animation'



import "../../css/homePageCategory.css";


const MainCategory = ({image,title,count,categoryId,description,postAd=false}) => {
  let path = `/adwall/${categoryId}`;
    if(postAd){
       path = `/postAd/SubCategory/${categoryId}`;
    }
  if(postAd) { return (     
      <Link to={path}><div className="item  text-center" style={{textDecoration:"none",height : "205px"}}>     
        <img src={image} width="40" className="" alt="main-category"/>
        <h4>{title}</h4>       
        <p>{description}</p>
      </div>
      </Link>
      ) } else{   return ( <AnimationWrapper>    
            <Link to={path}><div className="item  text-center animate__animated animate__bounce text-dark" style={{textDecoration:"none"}}>     
              <img src={image} width="50" className="" alt="main-category"/>
              <h4>{title}</h4> 
              <p>({count})</p>         
              <p>{description}</p>
            </div>
            </Link>
            </AnimationWrapper>)} ;
     
}
 
export default MainCategory;