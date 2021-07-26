import React from 'react';
import {Link} from "react-router-dom";
import '../css/loginPage.css'


const LoginPage = () => {
    return ( <div className="container loginPage animate__animated animate__fadeInRight">
               <div className="details"></div>
               <div className="loginForm">
               <form action="/action_page.php">
                    <h1 className="text-center">Login</h1>
                   <div class="form-group">
                     <label for="email">Email address:</label>
                     <input type="email" class="form-control" placeholder="Enter email" id="email" />
                   </div>
                   <div class="form-group">
                     <label for="pwd">Password:</label>
                     <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                   </div>
                   <div class="form-group form-check">
                     <label class="form-check-label">
                       <input class="form-check-input" type="checkbox" /> Remember me
                     </label>
                   </div>
                   <div className="form-group">
                   <button type="submit" class="btn btn-primary form-control">Login</button>
                   <div className="text-center">
                     <a href="#" className="text-center">Forgot Password</a>
                   </div>
                   </div>
                   </form>
                   <div className="text-center">
                   <h6>or</h6>
                   <button type="button" class="btn facebook-btn"><img src="/assets/facebook.png" className="mr-2"/>countinu with facebook</button>
            
                   </div>
                   <div className="text-center mt-2">
                   <h6>Don't have an account yet?</h6>
                   <Link to="/register"><button type="button" class="btn btn-warning">Register</button></Link>
                   </div>
                 
               </div>
            </div> );
}
 
export default LoginPage;