import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachDaThueApi } from "../../../Redux/Reducer/ProductReducer/ProductReducer";

export default function ProfileListJob() {
  const { DsDaThue } = useSelector((state) => state.ProductReducer);
  console.log(DsDaThue);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layDanhSachDaThueApi();
    dispatch(action);
  }, []);

  const renderListJob = () => {
    return DsDaThue?.map((prod, index) => {
      return (
        <div
          key={index}
          className="flex gap-6 my-4  cursor-pointer shadow-md border-b-2 border-green-400 rounded  p-2"
        >
          <div className="left w-40 h-32 ">
            <img
              src={prod.congViec.hinhAnh}
              alt="..."
              className="w-screen h-full img-job"
            />
          </div>
          <div className="right">
            <h3 className="font-semibold hover:text-green-500 cursor-pointer">
              {prod.congViec.tenCongViec}
            </h3>
            <p className="text-sm text-gray-500">{prod.congViec.moTaNgan}</p>
            <div className="rate leading-3 flex  items-center">
              <i class="fa fa-star text-yellow-400 ">
                <span className="ml-1 font-light">
                  {prod.congViec.saoCongViec}.0
                </span>
              </i>
              <p className="text-xs font-semibold text-gray-400 pl-1 leading-3 m-0">
                ({prod.congViec.danhGia})
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{renderListJob()}</div>;
}
