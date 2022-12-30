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
       
          <div className="slick ">
          <Slider {...settings}>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            <div className="item relative ">
                <img src="./img/seo-2x.jpg" alt=""  />
                <div className="title absolute z-10 top-2 left-0 p-2">
                    <p>Unlock growth online</p>
                    <h2>SEO</h2>
                </div>
            </div>
            </Slider>
          </div>
          
        
        </div>
       
      </div>
    );
  }
