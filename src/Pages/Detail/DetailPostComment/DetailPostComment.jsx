import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { commentApi } from '../../../Redux/Reducer/UserReducer/UserReducer';

export default function DetailPostComment(props) {
    const {userProfile} = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    const [contentComment, setContentComment] = useState("");
    const { id } = useParams();
    const handelSubmit = (e) =>{
        e.preventDefault();
        const model = {
            id: 0,
            maCongViec: id,
            maNguoiBinhLuan: userProfile.id,
            ngayBinhLuan: "",
            noiDung:contentComment ,
            saoBinhLuan: 0
        }

        const action = commentApi(id , model)
        dispatch(action)
    }
    
    const handelChange = (e) =>{
        setContentComment(e.target.value);
    }



  return (
    <div>
        <div className='flex'>
            <div className='avatar mr-3'>
                <img src="https://thuthuatnhanh.com/wp-content/uploads/2022/08/hinh-nen-cute.jpg" alt=".." className='w-12 h-12 rounded-full'/>
            </div>
            <form action="" onSubmit={handelSubmit}  className='w-full'>
                <TextArea
                    onChange={handelChange}
                    value={contentComment}
                   
                
                />
                <div className='text-end'>
                    <button type='submit' className=' bg-blue-500 text-base font-light text-white mt-3 px-3 py-1 rounded-xl'>Add Comment</button>
                </div>

            </form>

        </div>
    </div>
  )
}
