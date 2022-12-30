import { Button, Dropdown } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietLoaiCongViecApi, menuCongViecApi } from '../../../Redux/Reducer/ProductReducer/ProductReducer';



const App = () => {


  










    const {menuCongViec} = useSelector(state => state.ProductReducer)
    console.log(menuCongViec)
    const items = [
      {
        key: '1',
        label: (
          <div className='drop-item'>
               {menuCongViec?.map((item,index)=>{
                  return <div key={index}>
                    {item.dsNhomChiTietLoai.map((pord)=>{
                      return <div key={pord.id}>
                          <h3>
                            {pord.tenNhom}
                          </h3>


                      </div>
                    })}
                    
                  </div>
               })}
          </div>
        ),
      },
    
    ];
    const dispatch = useDispatch()
    useEffect(()=>{
        const action = menuCongViecApi()
        dispatch(action)
    },[])
    const renderMenu = () =>{
        return menuCongViec.map((item,index)=>{
            return <div key={index}>
             
            <Button className='border-none p-0  text-gray-400 hover:text-black' onClick={()=>{
              console.log(item.id)
              const action = layChiTietLoaiCongViecApi(item.id)
              dispatch(action)
            }} >{item.tenLoaiCongViec}</Button>
         ``
            </div>
        })
    }

    return(

        <>
    
      
       <div className='container py-1 shadow flex justify-around'>
       {renderMenu()}
       </div>
       
       
       
       
      </>
    )
}

    





 
;
export default App;