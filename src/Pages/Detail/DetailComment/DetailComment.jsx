import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layBinhLuanApi } from '../../../Redux/Reducer/UserReducer/UserReducer'

import { Avatar } from 'antd';
import { Rate } from 'antd';
export default function DetailComment(props) {

    console.log(props.id)
    const {userComment} = useSelector(state => state.UserReducer)
    console.log(userComment)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        const action = layBinhLuanApi(props.id)
        dispatch(action)
    },[])

    const renderAvatar = (item) =>{
        if(item.avatar){
            return(
                <img src={item.avatar} alt="" className='w-12 h-12 rounded-full' />
            )
            
        }
        return <Avatar size={40}>USER</Avatar>
    }
   
  return (
    <div className='pt-3 '>
        <h1 className='text-xl font-bold'>Top Comment</h1>
    <div>
        {userComment?.map((item,index)=>{
            return   <div className='flex px-5 py-3 mt-5 border rounded-xl ml-5' key={index}>
            <div className="avatar">
             
              
                {renderAvatar(item)}
                 
  

            </div>
            <div className="profile">
               <div className=' flex items-center mt-2'>
                    <h3 className='m-0 px-2 font-semibold'>
                        {
                            item.tenNguoiBinhLuan
                        }
                    </h3>
                    <Rate disabled value={item.saoBinhLuan} />
               </div>
                <div className='pt-4 pl-5'>
                    <p className='text-sm'>
                        {
                            item.noiDung
                        }
                    </p>

                    <p className='text-xs font-semibold text-gray-400'>
                        {
                            item.ngayBinhLuan
                        }
                    </p>
                    <div className='flex items-center'>
                    <span className='text-sm font-semibold text-gray-700 flex mr-2'>
                    <i class="fa fa-thumbs-up mr-1"></i>
                    <p className='text-xs'>
                     Like
                    </p>
                   
                    </span>
                    <span className='text-sm font-semibold text-gray-700 flex'>
                    <i class="fa fa-thumbs-down mr-1"></i>
                    <p className='text-xs'>
                    Dislike
                    </p>
                   
                    </span>
                    </div>
                  
                </div>
            </div>




        </div>
        })}
    </div>
       





    </div>
  )
}
