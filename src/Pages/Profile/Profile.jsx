import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Assets/Scss/Pages/Profile/Profile.scss";
import { userProfileApi } from "../../Redux/Reducer/UserReducer/UserReducer";
import { Button, Modal } from "antd";
import {EditOutlined} from '@ant-design/icons';
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import ProfileListJob from "./ProfileListJob/ProfileListJob";
export default function Profile() {
  const { userProfile, userLogin } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  console.log(userProfile);
  useEffect(() => {
    const action = userProfileApi(userLogin.user.id);
    dispatch(action);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

   
  return (
    <>
      <div className="container flex justify-around my-10">
        <div className="left w-1/4 bg-white p-4 rounded-xl shadow-xl border  h-full">
          <div className="header text-center  border-b ">
            <div className="avatar mb-3">
              
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
                alt=""
                className="w-32 h-32 rounded-full m-auto "
              />
            </div>

            <h3 className="font-semibold text-lg m-0">{userProfile.name} </h3>

            <Button className="mb-1 py-0 border-none shadow-none " onClick={showModal}>
            <EditOutlined  className="leading-3"/>
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              
            >
              <UpdateProfile handleOk={handleOk} userProfile={userProfile}/>
            </Modal>
          </div>
          <div className="body py-3 border-b">
            <div className="email flex justify-between py-1">
              <h3 className=" font-semibold">Email : </h3>
              <p className="m-0 text-gray-400 text-sm">{userProfile.email}</p>
            </div>

            <div className="birthday flex justify-between py-1">
              <h3 className=" font-semibold">Birthday :</h3>
              <p className="m-0 text-gray-400 text-sm">
                {userProfile.birthday}
              </p>
            </div>
            <div className="phone flex justify-between py-1">
              <h3 className=" font-semibold">Phone :</h3>
              <p className="m-0 text-gray-400 text-sm">{userProfile.phone}</p>
            </div>
          </div>
          <div className="footer py-3 ">
            <div className="skill py-4">
              <h3 className="font-semibold">Skill</h3>
              <div className="content px-5 pt-3">
                <p className="m-0 text-gray-400">0352591999</p>
              </div>
            </div>

            <div className="certification py-4">
              <h3 className="font-semibold">Certification</h3>
              <div className="content px-5 pt-3">
                <p className="m-0 text-gray-400">0352591999</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right p-5 bg-white border  shadow-xl rounded-xl w-full h-full mx-3">
          <h1 className="text-2xl text-center  font-bold text-green-600  ">ACTIVE GIGS</h1>
          <div className="job">
              <ProfileListJob/>
          </div>
        </div>
      </div>
    </>
  );
}
