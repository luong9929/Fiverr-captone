import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}
export default function Responsive(props) {
 
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <h2 className="text-4xl mb-10 pl-8 text-gray-500 font-semibold"> Popular professional services </h2>
        <div className="mx-8 ">
       
          <div className="slick text-white">
          <Slider {...settings}>
            <div className="item relative  ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4 ">
                    <p  className="text-sm py-1 m-0">Unlock growth online</p>
                    <h2 className="text-xl font-bold">SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/voiceover-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Share your message</p>
                    <h2 className="text-xl font-bold">Voice Over</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/illustration-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Color your dreams</p>
                    <h2 className="text-xl font-bold">Illustration</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/logo-design-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Build your brand</p>
                    <h2 className="text-xl font-bold">Logo Design</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src=".\img\social-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Reach more customers</p>
                    <h2 className="text-xl font-bold">Social Media</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src=".\img\translation-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Go global</p>
                    <h2 className="text-xl font-bold">Translation</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src=".\img\book-covers-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Showcase your story</p>
                    <h2 className="text-xl font-bold">Book Covers</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src=".\img\animated-explainer-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Engage your audience</p>
                    <h2 className="text-xl font-bold">Video Explainer</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src=".\img\data-entry-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Reach more customers</p>
                    <h2 className="text-xl font-bold">Social Media</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src=".\img\wordpress-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-4">
                    <p className="text-sm py-1 m-0">Customize your site</p>
                    <h2 className="text-xl font-bold">WordPress</h2>
                </div>
            </div>
            </Slider>
          </div>
          
        
        </div>
       
      </div>
    );
  }
