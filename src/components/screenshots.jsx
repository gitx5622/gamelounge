import React, { Component } from 'react';
import { GrNext, GrPrevious } from 'react-icons/all';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import original from '../assets/original.jpg';
import original1 from '../assets/original1.jpg';
import original2 from '../assets/original2.jpg';

class Screenshots extends Component {
    render() {
        const settings = {
          dots: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: <GrNext style={{color:"#fdaa8f"}}/>,
          prevArrow: <GrPrevious style={{color:"#fdaa8f"}}/>
        };
        return (
          <div className="m-5">
            <center><h3>Screenshots and Videos</h3></center>
            <div className="underline"></div>
            <Slider {...settings}>
              <div className="screenshot-img">
                <img src={original} width="100%" alt=""/>
              </div>
              <div className="screenshot-img">
              <img src={original1} width="100%" alt=""/>
              </div>
              <div className="screenshot-img">
              <img src={original2} width="100%" alt=""/>
              </div>
              <div className="screenshot-img">
              <img src={original} width="100%" alt=""/>
              </div>
              <div className="screenshot-img">
              <img src={original} width="100%" alt=""/>
              </div>
              <div className="screenshot-img">
              <img src={original} width="100%" alt=""/>
              </div>
            </Slider>
          </div>
        );
      }

}
export default Screenshots;