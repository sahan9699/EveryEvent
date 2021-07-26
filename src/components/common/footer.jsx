import React from 'react';


import "../../css/footer.css";

const Footer = () => {
    return ( 
        <div className="container-fluid footer">
            <div className="footerItem">
            <h5>Download Our App</h5>
              <img src="/assets/android-2x-f6e6a4fb.png" width="120" className="mr-2 my-3" alt="android"/>
              <img src="/assets/ios-2x-5670037f.png" width="120" alt="ios"/>
              <h5>Coonect With Facebook</h5>
            </div>
            <div className="footerItem">
               <h5>More from EveryItem</h5>
               <ul>
                   <li><a href="#">Sell Fast</a></li>
                   <li><a href="#">Doorstep Delivery</a></li>
                   <li><a href="#">Membership</a></li>
                   <li><a href="#">Banner Ads</a></li>
                   <li><a href="#">Promotions</a></li>
                  
               </ul>
            </div>
            <div className="footerItem">
            <h5>Help & Support</h5>
               <ul>
                   <li><a href="#">Sell Fast</a></li>
                   <li><a href="#">Doorstep Delivery</a></li>
                   <li><a href="#">Membership</a></li>
                   <li><a href="#">Banner Ads</a></li>
                   <li><a href="#">Promotions</a></li>
                  
               </ul>
            </div>
            <div className="footerItem">
            <h5>Follow EveryEvent</h5>
               <ul>
                   <li><a href="#">Sell Fast</a></li>
                   <li><a href="#">Doorstep Delivery</a></li>
                   <li><a href="#">Membership</a></li>
                   <li><a href="#">Banner Ads</a></li>
                   <li><a href="#">Promotions</a></li>
                  
               </ul>
            </div>
        </div>
     );
}
 
export default Footer;