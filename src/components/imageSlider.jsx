import React, { Component } from 'react';
import "../css/imageSlider.css"

const logo = 'https://picsum.photos/4920/700';

const url = "../video/Why Don't We Just (lyrics) - Why Don't We - YouTube.MP4";

const VideoSlider = () => {
    return (<div id="demo" class="carousel slide" data-ride="carousel">

    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
  

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={logo} alt="Los Angeles" />
      </div>
      <div class="carousel-item">
        <img src={logo} alt="Chicago" />
      </div>
      <div class="carousel-item">
        <img src={logo} alt="New York" />
      </div>
    </div>
  
  
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  
  </div> );
}
 
export default VideoSlider;