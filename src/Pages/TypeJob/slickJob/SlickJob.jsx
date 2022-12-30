import React from "react";
import Slider from "react-slick";
import {ArrowRightOutlined} from '@ant-design/icons';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        id='icon'
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        id='icon'
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
export default function SlickJob() {
   
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "100px",
          slidesToShow: 3,
          speed: 500,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
  return (
    <div>
       
        <Slider {...settings}>
          <div className=" px-3 py-3">
            <div className=" item items-center shadow border py-2 px-4 rounded-xl">
            <div  className="w-10 h-10 mr-3  ">
           <img src="./img/Logo design_2x (1).png" alt="" />
           </div>
            <span>Minimalist Logo Design <ArrowRightOutlined /></span>
            </div>
          
          </div>
          <div className=" px-3 py-3">
            <div className=" item items-center shadow border py-2 px-4 rounded-xl">
            <div  className="w-10 h-10 mr-3  ">
           <img src="./img/Architecture _ Interior Design_2x (1).png" alt="" />
           </div>
            <span>Architecture & Interior Design <ArrowRightOutlined /></span>
            </div>
          
          </div>
          <div className=" px-3 py-3">
            <div className=" item items-center shadow border py-2 px-4 rounded-xl">
            <div  className="w-10 h-10 mr-3  ">
           <img src="./img/Illustration_2x (1).png" alt="" />
           </div>
            <span>Illustration <ArrowRightOutlined /></span>
            </div>
          
          </div>
          <div className=" px-3 py-3">
            <div className=" item items-center shadow border py-2 px-4 rounded-xl">
            <div  className="w-10 h-10 mr-3  ">
           <img src="./img/Photoshop Editing_2x (1).png" alt="" />
           </div>
            <span>Image Editing <ArrowRightOutlined /></span>
            </div>
          
          </div>
          <div className=" px-3 py-3">
            <div className=" item items-center shadow border py-2 px-4 rounded-xl">
            <div  className="w-10 h-10 mr-3  ">
           <img src="./img/T-Shirts _ Merchandise_2x (1).png" alt="" />
           </div>
            <span>T-Shirts & Merchandise <ArrowRightOutlined /></span>
            </div>
          
          </div>
          <div className="px-3 py-3">
            <div className=" item items-center shadow border py-2 px-4 rounded-xl">
            <div  className="w-10 h-10 mr-3  ">
           <img src="./img/Nft Art (1) (1).png" alt="" />
           </div>
            <span>NFT Art <ArrowRightOutlined /></span>
            </div>
          
          </div>
        </Slider>
    </div>
  )
}
