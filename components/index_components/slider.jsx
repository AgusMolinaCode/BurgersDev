import React, { Component } from "react";
import Slider from "react-slick";
import {GiHamburger} from 'react-icons/gi'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 6000,
      cssEase: "linear"
    };
    return (
      <div className="mt-4 mb-0">
        
        <Slider {...settings}>
          <div>
            <h3 className="font-principal flex items-center font-bold text-xl">Best Hamburger in the World</h3>
          </div>
          <div>
            <h3 className="font-principal flex items-center font-bold text-xl">Best Hamburger in the World</h3>
          </div>
          <div>
            <h3 className="font-principal flex items-center font-bold text-xl">Best Hamburger in the World</h3>
          </div>
          <div>
            <h3 className="font-principal flex items-center font-bold text-xl">Best Hamburger in the World</h3>
          </div>
          <div>
            <h3 className="font-principal flex items-center font-bold text-xl">Best Hamburger in the World</h3>
          </div>
          <div>
            <h3 className="font-principal flex items-center font-bold text-xl">Best Hamburger in the World</h3>
          </div>
        </Slider>
      </div>
    );
  }
}