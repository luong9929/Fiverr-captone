import React, { useEffect, useRef } from 'react'
import FooterHome from '../../Components/FooterHome/FooterHome'
import HeaderPage from '../../Components/HeaderPage/HeaderPage'
import { Outlet } from 'react-router-dom'
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchCongViecApi } from "../../Redux/Reducer/ProductReducer/ProductReducer";
export default function PageTemplate() {
 


  return (
    <>
        <HeaderPage />
        <div className='h-96'>
            <Outlet  ></Outlet>
        </div>
        <FooterHome/>
    
    
    
    
    
    
    </>
  )
}
