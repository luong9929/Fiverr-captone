import React, { useEffect, useRef } from "react";
import App from "./HomeCarousel/HomeCarousel";
import { SearchOutlined, CheckCircleOutlined } from "@ant-design/icons";
import "../../Assets/Scss/Pages/Home/Home.scss";
import Responsive from "./HomeSlick/HomeSlick";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchCongViecApi } from "../../Redux/Reducer/ProductReducer/ProductReducer";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;
const suffix = (
  <AudioOutlined 
    style={{
      fontSize: 19,
      color: '#1890ff',
      
    }}
  />
);

export default function Home() {

  const dispatch = useDispatch()
  
  const onSearch = (value) => {
    console.log(value)
        
    const action = searchCongViecApi(value)
    dispatch(action)

};
    
  return (
    <>
      <div className="carousel ">
        <App />

        <div className="search container  ">
          <h3 className="title text-white">
            Find the perfect <i> freelance </i>services for your business
          </h3>

          <Space direction="horizontal">
    <Search
      placeholder=" Try ' building mobile app ' "
      onSearch={onSearch}
      style={{
        width: 600,
       
      }}
    />
    
  </Space>
  <div className="popular flex items-center mt-4">
  <p className="mt-4 text-lg font-bold text-white" >Popular :</p>
      <div className="popular-item flex ml-3">
      <p>Website Design </p>
  <p>WordPress</p>
  <p>Logo Design</p>
  <p>Dropshipping</p>
      </div>
  </div>
         

        </div>
      </div>
      <div className="contact bg-white 2 flex justify-center  items-center shadow-sm py-2">
        <span className="mr-3 text-base font-semibold text-gray-500">
          Trusted by :
        </span>
        <div className="item flex ">
          <div className="px-5">
            <img src="./img/facebook.31d5f92.png" alt="..." />
          </div>
          <div className="px-5">
            <img src="./img/google.517da09.png" alt="..." />
          </div>{" "}
          <div className="px-5">
            <img src="./img/netflix.e3ad953.png" alt="..." />
          </div>{" "}
          <div className="px-5">
            <img src="./img/pandg.8b7310b.png" alt="..." />
          </div>
          <div className="px-5">
            <img src="./img/paypal.ec56157.png" alt="..." />
          </div>
        </div>
      </div>
      <div className="services  mb-30 ">
        <Responsive />
      </div>
      <div className="content bg-emerald-900 text-gray-300 py-16">
        <div className="item container flex ">
          <div className="left pr-7  w-4/6">
            <h2 className="text-4xl font-semibold">
              A whole world of freelance talent at your fingertips
            </h2>
            <div className="left-item">
              <h5 className="font-semibold flex items-center">
                <CheckCircleOutlined className="mr-3 text-xl" />
                <span className="text-xl leading-3">
                  The best for every budget
                </span>
              </h5>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
            <div className="left-item">
              <h5 className="font-semibold flex items-center">
                <CheckCircleOutlined className="mr-3 text-xl" />
                <span className="text-xl leading-3">
                  Quality work done quickly
                </span>
              </h5>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </div>
            <div className="left-item">
              <h5 className="font-semibold flex items-center">
                <CheckCircleOutlined className="mr-3 text-xl" />
                <span className="text-xl leading-3">
                  Protected payments, every time
                </span>
              </h5>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </div>
            <div className="left-item">
              <h5 className="font-semibold flex items-center">
                <CheckCircleOutlined className="mr-3 text-xl" />
                <span className="text-xl leading-3">24/7 support</span>
              </h5>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="right pl-7  mt-10">
            <div className="item ">
              <img src="./img/selling-proposition-still-1400-x1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="marketplace container py-16 text-gray-600">
        <h1 className="font-semibold text-4xl">Explore the marketplace</h1>
        <div className="content grid grid-cols-5 gap-x-2 gap-y-9 py-9">
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3">Graphics & Design</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="img">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Digital Marketing"
                loading="lazy "
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3 ">Digital Marketing</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Writing &amp; Translation"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3">Writing & Translation</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Video &amp; Animation"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3">Video & Animation</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Music &amp; Audio"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3 pl-2">Music & Audio</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Programming &amp; Tech"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3 ">Programming & Tech</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Business"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3 px-7">Business</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Lifestyle"
                loading="lazy"
                className="w-20 ml-6"
              />
            </div>
            <p className="mt-3 px-7">Lifestyle</p>
          </div>
          <div className="item  w-4/5 m-auto">
            <div className="">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Data"
                loading="lazy"
                className="w-20 ml-6 h-20"
              />
            </div>
            <p className="mt-3 px-12">Data</p>
          </div>
        </div>
      </div>
    </>
  );
}

