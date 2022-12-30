import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thueCongViecApi } from '../../../Redux/Reducer/ProductReducer/ProductReducer'

export default function DetailJob(props) {


    const {userProfile} = useSelector(state => state.UserReducer)
    console.log(userProfile.id)
const dispatch  = useDispatch()
    const { id } = useParams();

    // const renderButton = (item) =>{
    //     if(userLogin !== undefined){
    //         return(
    //             <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">Continue ({item.congViec.giaTien}$)</button>
                
    //         )
           
    //     }
    //     return   <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">Continue to Login </button>
    // }

    const hireJob = () =>{
        const model = {
            id : 0 ,
            maCongViec : id ,
            maNguoiThue : userProfile.id,
            ngayThue :'',
            hoanThanh : true
        }


        const action = thueCongViecApi(id,model)
        dispatch(action)
    }

    const render = () =>{
        return props.arr?.map((item,index)=>{
            return  <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96  border rounded-2xl shadow    " key={index}>
            <h2 className="text-2xl font-semibold">Order Job</h2>
            <div>
              <div className='flex justify-between mt-3'>
              <h3 className='font-semibold'>Standard</h3>
                 <p>{item.congViec.giaTien}$</p>
              </div>
              <p className='text-sm text-center'>Create a simple wed application for your business</p>
            </div>
            
            <div className="pt-4 space-y-2">
                <p className='text-sm text-orange-500'>{item.congViec.moTaNgan}</p>
                <div className="space-y-6">
                    {/* {renderButton(item)} */}
                    <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400" onClick={hireJob}>Continue ({item.congViec.giaTien}$)</button>
                </div>
            </div>
        </div>
        })
    }
  return (
    <>
       {render()}
    </>
  )
}
