import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layCongViecChiTietApi } from "../../Redux/Reducer/ProductReducer/ProductReducer";
import { Breadcrumb } from "antd";
import App from "./DetailRate/Rate";
import DetailJob from "./DetailJob/DetailJob";
import DetailComment from "./DetailComment/DetailComment";
import { Button, Form, Input } from 'antd';
import DetailPostComment from "./DetailPostComment/DetailPostComment";


export default function Detail() {
  const { arrCongViec } = useSelector((state) => state.ProductReducer);
  console.log("hihi", arrCongViec);
  
  const { id } = useParams();
 
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layCongViecChiTietApi(id);
    dispatch(action);
  }, [id]);
  



  return (
    <div className="container py-4 flex">
      <div className="left">
        <div className="content">
          {arrCongViec?.map((item, index) => {
            console.log(item.avatar);
            return (
              <div key={index}>
                <div className="Breadcrumb ml-3">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <a href="">{item.tenLoaiCongViec}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <a href="">{item.tenNhomChiTietLoai}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{item.tenChiTietLoai}</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="main  py-2">
                  <div className="header border-b border-gray-300">
                    <h1 className="text-3xl m-0 font-bold">
                      {item.congViec.tenCongViec}
                    </h1>

                    <div className="header-item flex items-center py-2">
                      <div>
                        <img
                          src={item.avatar}
                          alt="..."
                          className="w-10 h-10 rounded-full mr-3"
                        />
                      </div>
                      <p className="m-0 pr-1 font-bold">{item.tenNguoiTao}</p>
                      <div className="rate  px-5 flex ">
                        <h3 className="m-0 pt-1 text-orange-300 border-x mr-2 px-2">
                          Top Rated Seller
                        </h3>
                        <App rate={item.congViec.saoCongViec} />
                        <p className="pl-1 text-yellow-400 font-semibold text-lg m-0">
                          {item.congViec.saoCongViec}
                        </p>
                        <p className="text-sm pl-1 text-gray-400 m-0 mt-1">
                          ({item.congViec.danhGia})
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="body py-5 border-b border-gray-300">
                    <img src={item.congViec.hinhAnh} alt="" className="w-2/5" />

                    <div className="py-4">
                      <h3 className="text-lg font-bold">About This Gig</h3>

                      <div className="px-6 py-3">
                        <span className="font-semibold text- bg-orange-200 ">Top Rated Seller With All Posltive Revlews</span>
                          <div className="pt-3">
                          <p >{item.congViec.moTa}</p>


                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="fag">
          <section className="">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold sm:text-4xl">
                Fag
              </h2>
             
              <div className="space-y-4 px-5">
                <details className="w-4/5 border rounded-lg">
                  <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">
                  What is a vector file?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>
                <details className="w-4/5 border rounded-lg">
                  <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">
                  What does '3 logo design or 5 Logo Design' means?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                    porttitor egestas tincidunt neque vehicula potenti.{" "}
                  </p>
                </details>
                <details className="w-4/5 border rounded-lg">
                  <summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400">
                  What does Unlimited revisions mean?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Justo libero tellus integer tincidunt justo semper consequat
                    venenatis aliquet imperdiet. Ultricies urna proin fusce
                    nulla pretium sodales vel magna et massa euismod vulputate
                    sed.{" "}
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
        <div className=" postComment    py-3 border-t border-gray-500">
          <h3 className='text-xl font-bold'>Comment</h3>
                  <DetailPostComment id={id}/>
        </div>
        <div className="comment ">
          <DetailComment id={id}/>
        </div>
       
        
      </div>
      <div className="right pt-10 ml-5">
      <DetailJob arr={arrCongViec}/>
      </div>
    </div>
  );
}
