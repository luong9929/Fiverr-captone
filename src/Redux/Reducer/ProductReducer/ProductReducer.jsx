import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../util/Config';
import { history } from '../../..';
const initialState = {
    arrCongViec:[],
    menuCongViec:[],
    nhomCongViec:[],

    DsDaThue:[]
}

const ProductReducer = createSlice({
  name: 'ProductReducer',
  initialState,
  reducers: {


    layDanhSachCongViec:(state,action)=>{
        state.arrCongViec = action.payload
    },

    layDanhSachMenuCongViec:(state,action)=>{
        state.menuCongViec = action.payload
    },

    searchCongViec:(state,action) =>{
        state.arrCongViec = action.payload
    },

    layNhomCongViec:(state,action) =>{
        state.nhomCongViec = action.payload
    },
    layDsDaThue:(state,action) =>{
        state.DsDaThue = action.payload
    }

  }
});

export const {layDanhSachCongViec,layDanhSachMenuCongViec,searchCongViec,layNhomCongViec,layDsDaThue} = ProductReducer.actions

export default ProductReducer.reducer


export const DanhSachCongViecApi = () =>{
    return async dispatch =>{
        const result = await http.get('/api/cong-viec')
        const action = layDanhSachCongViec(result.data.content)
        dispatch(action)
    }
}

export const searchCongViecApi = (key) =>{
    return async dispatch =>{
        const result = await http.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${key}`)
        const action = layDanhSachCongViec(result.data.content)
        console.log(result.data.content)

        dispatch(action)
        history.push(`/joblist/`)
        
    }
}

export const menuCongViecApi = () =>{
    return async dispatch =>{
        const result = await http.get(`/api/cong-viec/lay-menu-loai-cong-viec`)
        const action = layDanhSachMenuCongViec(result.data.content)
        dispatch(action)
        console.log(result.data.content)
    }
}


export const layCongViecChiTietApi = (id) =>{
    return async dispatch =>{
        const result = await http.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${id}`)
        const action = layDanhSachCongViec(result.data.content)
        dispatch(action)
        console.log(result.data.content)
    }
}

export const layChiTietLoaiCongViecApi = (id) =>{
    return async dispatch =>{
        const result = await http.get(`api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
        const action = layNhomCongViec(result.data.content)
        dispatch(action)
        history.push('/typejob')
        console.log(result.data.content)
    }
}

export const layCongViecTheoChiTietApi = (id) =>{
    return async dispatch =>{
        const result = await http.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`)
        const action = layDanhSachCongViec(result.data.content)
        dispatch(action)
        console.log(result.data.content)
        history.push(`/joblist`)
    }
}


export const thueCongViecApi = (id,data) =>{
    console.log(data)
    return async dispatch =>{
        const result = await http.post('/api/thue-cong-viec',data)
        const action =layCongViecChiTietApi(id)
        
      
      dispatch(action)
    }
}

export const layDanhSachDaThueApi = () =>{
    return async dispatch =>{
        const result = await http.get('/api/thue-cong-viec/lay-danh-sach-da-thue')
        const action =layDsDaThue(result.data.content)
        
      
      dispatch(action)
    }
}