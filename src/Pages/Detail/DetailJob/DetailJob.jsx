import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thueCongViecApi } from '../../../Redux/Reducer/ProductReducer/ProductReducer'

export default function DetailJob(props) {


    const {userProfile} = useSelector(state => state.UserReducer)
    console.log(userProfile.id)
const dispatch  = useDispatch()
    const { id } = useParams();

    

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
            return  <div className="  border rounded shadow  w-96  " key={index}>
                <div className='flex  border-b text-center text-gray-500'>
                <h2 className="text-base font-semibold m-0 p-2 w-1/3 text-green-500 ">Basic</h2>
             <h2 className="text-base font-semibold border-x m-0 p-2 w-1/3">Standard</h2>
                <h2 className="text-base font-semibold m-0 p-2 w-1/3">Premium</h2>
                </div>
           
            <div>
              <div className='flex justify-between mt-3 px-4 py-3'>
              <h3 className='font-semibold'>Standard</h3>
                 <p>{item.congViec.giaTien}$</p>
              </div>
              <p className='text-sm text-center py-3'>Create a simple wed application for your business</p>
            </div>
            
            <div className="py-4 space-y-2 px-4 ">
                <p className='text-sm text-orange-500'>{item.congViec.moTaNgan}</p>
                <div className="space-y-6">
                    {/* {renderButton(item)} */}
                    <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-green-400 dark:text-gray-900 dark:border-green-400" onClick={hireJob}>Continue ({item.congViec.giaTien}$)</button>
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
