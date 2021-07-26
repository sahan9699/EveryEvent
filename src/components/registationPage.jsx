import React,{Component} from 'react';

class RegistationPage extends Component {
    state = {  }
    render() { 
        return ( <div className="container loginPage animate__animated animate__fadeInRight">
        <div className="details"></div>
        <div className="loginForm">
        <form action="/action_page.php">
             <h1 className="text-center">Register</h1>
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" placeholder="Enter email" id="email" />
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
            </div>
            <div className="form-group">
              <label for="pwd">Comform Password:</label>
              <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary form-control">Register</button>
            </div>
            </form>
            <div className="text-center">
            <h6>or</h6>
            <button type="button" className="btn facebook-btn"><img src="/assets/facebook.png" className="mr-2" alt="facebook"/>countinu with facebook</button>
            </div>    
        </div>
     </div> );
    }
}
 
export default RegistationPage;