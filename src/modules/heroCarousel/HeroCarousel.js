import React from "react";
// Owl Carousel....
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ts1 from "../../asset/image/largeSlider/banner1.jpg";
import ts2 from "../../asset/image/largeSlider/banner2.jpg";
import ts3 from "../../asset/image/largeSlider/banner3.jpg";
import ts4 from "../../asset/image/largeSlider/banner1.jpg";
import ts5 from "../../asset/image/largeSlider/banner2.jpg";
import ts6 from "../../asset/image/largeSlider/banner3.jpg";
const HeroCarousel = () => {
  return (
    <>
      <div className="banner">
        <Carousel>
          <div>
            <img src={ts1} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={ts2} />
          </div>
          <div>
            <img src={ts3} />
          </div>
          <div>
            <img src={ts4} />
          </div>
          <div>
            <img src={ts5} />
          </div>
          <div>
            <img src={ts6} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeroCarousel;
