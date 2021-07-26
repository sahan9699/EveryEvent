import React from 'react';
import {Route,Switch,Redirect} from "react-router-dom";

import NavigationBar from './components/common/navigationBar';
import HomePageCategory from "./components/homePageCategory";
import Footer from "./components/common/footer";
import LoginPage from "./components/loginPage";
import RegistationPage from './components/registationPage';
import AddWall from './components/addWall';
import NotFound from './components/notFound';
import PostAd from './components/postAd';
import AdDetails from './components/adDetails';
import PostAdSubCategory from './components/postAdSubCategory';
import PostAdForm from './components/postAdForm';

import "./css/app.css";







function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="container-fluid">
      <Switch>   
      <Route path="/login" component={LoginPage}/> 
      <Route path="/postad" component={PostAdForm}/> 
      <Route path="/register" component={RegistationPage}/>      
      <Route path="/adwall/:id" component={AddWall}/>
      <Route path="/ad/:id" component={AdDetails}/>
      <Route path="/not-found" component={NotFound}/>
      <Route path="/" exact component={HomePageCategory}/> 
      <Redirect to="not-found"/>
      </Switch>         
      </div>    
      <Footer />
    </div>
  );
}

export default App;
