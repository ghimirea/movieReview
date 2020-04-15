import React, { Component } from "react";
import "./image.css";

export default class Slide extends Component {
  render() {
    return (
      <div className="">
        <div
          id="carouselExampleControls"
          className=" col-sm-3 pic  carousel slide container"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://4.bp.blogspot.com/-01VrN_YGTc8/XCB7inrKpzI/AAAAAAAACls/ogoVYKxunuwegdmSxm381xVGpDq5GnCdgCLcBGAs/s1600/latest-action-movie-poster-background-download.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://www.joblo.com/assets/images/oldsite/posters/images/full/pantherposterhandsmain_thumb.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://lh3.googleusercontent.com/proxy/KeS-Od6rlAQpF3vcF9RYjQZRWiFuJaDvOXdd8lAAg8PUQSisplm3jCXAcXji_DgN1WepeTNZZlYvRMx0IuqmpDiELLIn6X7yTroDMYQ"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
