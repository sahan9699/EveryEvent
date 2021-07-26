import React, { Component } from 'react';
import _ from "lodash";


const Pagination = ({pageSize,itemsCount,onPageChange,activePage}) => {
    const pagersCount = Math.ceil(itemsCount / pageSize);

    if(pagersCount <= 1) return null;
    const pagers = _.range(1, 4);

   if(pagersCount <= 2){
    return ( <nav aria-label="Page navigation example" className="m-2">
    <ul className="pagination justify-content-end">
     

      {pagers.map(item => <li  className={activePage === item ? "page-item active" : "page-item"}>
      <a className="page-link" key={item} onClick={() => onPageChange(item)}>{item}</a>
      </li>)} 

    
    </ul>
  </nav>  );
   }
    return ( <nav aria-label="Page navigation example" className="m-2">
    <ul className="pagination justify-content-end">
      <li className={activePage === 1 ? "page-item disabled" : "page-item "}>
        <a className="page-link" onClick={() => onPageChange(activePage - 1)} >Previous</a>
      </li>

      {pagers.map(item => <li  className={activePage === item ? "page-item active" : "page-item"}>
      <a className="page-link" key={item} onClick={() => onPageChange(item)}>{item}</a>
      </li>)} 

      <li className={activePage === pagersCount ? "page-item disabled" : "page-item"} hidden={activePage === pagersCount}>
        <a className="page-link "  onClick={() => onPageChange(activePage + 1)}>Next</a>
      </li>
      <li className={activePage === pagersCount ? "page-item disabled" : "page-item"}>
        <a className="page-link "  onClick={() => onPageChange(pagersCount)}>Last{`(${pagersCount})`}</a>
      </li>
    </ul>
  </nav>  );
}
 

 
export default Pagination;