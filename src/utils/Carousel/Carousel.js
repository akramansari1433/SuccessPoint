import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PreviousBtn = (props) => {
   const { className, onClick } = props;
   return (
      <div className={className} onClick={onClick}>
         <ArrowBackIosIcon color="warning" fontSize="large" />
      </div>
   );
};
const NextBtn = (props) => {
   const { className, onClick } = props;
   return (
      <div className={className} onClick={onClick}>
         <ArrowForwardIosIcon color="warning" fontSize="large" />
      </div>
   );
};

export default function Carousel() {
   const settings = {
      dots: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
   };
   return (
      <div className="container">
         <Slider {...settings}>
            <div>
               <img alt="cover" src="images/cover/1.jpg" />
            </div>
            <div>
               <img alt="cover" src="images/cover/2.jpg" />
            </div>
            <div>
               <img alt="cover" src="images/cover/3.jpg" />
            </div>
            <div>
               <img alt="cover" src="images/cover/1.jpg" />
            </div>
         </Slider>
      </div>
   );
}
