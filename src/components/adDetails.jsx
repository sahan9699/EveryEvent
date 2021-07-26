import React, { Component } from 'react';

import "./../css/adDetails.css"
class AdDetails extends Component {
    state = {  }

    goBack = () => {
        this.props.history.goBack();
    }
    render() { 
        return ( <div className="post-ad" style={{padding : "10px"}}>
            <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide container" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/id/237/1200/600" class=" w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/237/1200/600" class=" w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/237/1200/600" class=" w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

<div className="containerf">

</div>
        </div> );
    }
}
 
export default AdDetails;