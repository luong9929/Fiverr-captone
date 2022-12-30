import React , { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Pagination } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
export default function JobList() {
  const { arrCongViec } = useSelector((state) => state.ProductReducer);

  
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const renderCard = () => {
    return arrCongViec?.map((item, index) => {
      console.log(item.congViec.id);
      return (
        <NavLink to={`/detail/${item.congViec.id}`} target="_blank" className="p-4 md:w-1/3 " >
          <div className="h-full border  border-opacity-60 rounded-lg overflow-hidden shadow">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={item.congViec.hinhAnh}
              alt="blog"
            />
            <div className="p-6">
             
              <h1 className="title-font text-xl font-bold text-gray-900 ">
                {item.congViec.tenCongViec}
              </h1>
              <p className="leading-relaxed mb-3 text-gray-300" >
                {item.congViec.moTaNgan.length >100 ? <span>{item.congViec.moTa.slice(0,150)}...</span> : <span>{item.congViec.moTa}</span> }
              </p>
              <div className=" border-b py-4">
                  <div className="rate leading-3 flex  items-center">
                  <i class="fa fa-star text-yellow-400 ">
                       <span className="ml-1 font-light" >{item.congViec.saoCongViec}.0</span>
                    
                    </i> 
                    <p className="text-xs font-semibold text-gray-400 pl-1 leading-3 m-0">({item.congViec.danhGia})</p>
                  </div>

                 
              </div >

               <p className="text-right pt-7 m-0 font-semibold text-gray-500">STARTING AT $
                {item.congViec.giaTien}
               </p>
            </div>
          </div>
        </NavLink>
      );
    });
  };

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-3 mx-auto">
          <div className="py-5 flex justify-between items-center">
            <div className="flex gap-3">
            <button className="border py-1 px-3 rounded-lg text-sm">
               Category <DownOutlined  />
            </button>
            <button className="border  py-1 px-3 rounded-lg text-sm">
               Service Options <DownOutlined  />
            </button>
            <button className="border  py-1 px-3 rounded-lg text-sm">
               Seller DeTaills <DownOutlined  />
            </button>
            <button className="border  py-1 px-3 rounded-lg text-sm">
               Budget <DownOutlined  />
            </button>
            <button className="border  py-1 px-3 rounded-lg text-sm">
               DellceryTime <DownOutlined  />
            </button>
            </div>
            <div className="flex gap-5">
                <div>
                <Switch  className="bg-gray-300" /> <span className="text-sm">Pro Services</span>
                </div>
                <div>
                <Switch   className="bg-gray-300" /> <span  className="text-sm">Local Sellers</span>
                </div>
                <div>
                <Switch   className="bg-gray-300" /> <span  className="text-sm">Online Sellers</span>
                </div>
           
            </div>
          </div>
          <div className="flex flex-wrap ">{renderCard()}</div>
            <div className=" text-center pt-9">
            <Pagination current={current} onChange={onChange} total={50} />
            </div>
        </div>
      </section>
    </div>
  );
}
