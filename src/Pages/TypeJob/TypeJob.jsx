import React from "react";
import "../../Assets/Scss/Pages/TypeJob/TypeJob.scss";
import { PlayCircleOutlined } from "@ant-design/icons";
import SlickJob from "./slickJob/SlickJob";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layCongViecTheoChiTietApi } from "../../Redux/Reducer/ProductReducer/ProductReducer";
export default function TypeJob() {
  const { nhomCongViec } = useSelector((state) => state.ProductReducer);
  
  const dispatch = useDispatch()
  const renderNhom = () => {
    return nhomCongViec?.map((item, index) => {
      
      return <div className="flex gap-10" key={index}>
          {item.dsNhomChiTietLoai.map((pord, index) => {
        return ( <div key={index} className='w-1/4  rounded-lg shadow-md'>

            <div className="w-full">
              <img src={pord.hinhAnh} alt="" className="w-full h-48 overflow-hidden" />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold">
                {pord.tenNhom}
              </h2>
              <div className="">
                  {pord.dsChiTietLoai.map((i,index)=>{
                    return <NavLink key={index} className='block py-3 px-1 rounded-lg hover:bg-slate-200 hover:text-green-600' onClick={()=>{
                     
                      const action = layCongViecTheoChiTietApi(i.id)
                      dispatch(action)
                    }}>
                        {i.tenChiTiet}
                    </NavLink>
                  })}
              </div>
            </div>




        </div>
          
        );
      })}
      </div>
    });
  };

  return (
    <div className="container py-5 TypeJob">
      <div className="banner text-center py-16">
        <h1 className="text-3xl font-bold text-white">Graphics & Design</h1>
        <p className="text-white text-xl ">Designs to make you stand out.</p>
        <button className="border py-2 px-4 text-white rounded-xl">
          <PlayCircleOutlined className="mr-1"/>
          How Fiverr Works
        </button>
      </div>
      <div className="content py-5">
        <h3 className="font-bold text-xl">Most popular in Graphics & Design</h3>
        <div className="px-4 ">
          <SlickJob />
        </div>
      </div>
      <div className="typeJob">
        <h3 className="font-bold text-xl">Explore Graphics & Design</h3>

        {renderNhom()}
      </div>
    </div>
  );
}
