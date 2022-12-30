import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, settings, USER_LOGIN, USER_PROFILE } from "../../../util/Config";
import { history } from '../../..';
import { Result } from 'antd';
import { layCongViecChiTietApi } from '../ProductReducer/ProductReducer';
const initialState = {
  userLogin: settings.getStorageJson(USER_LOGIN)
  ? settings.getStorageJson(USER_LOGIN)
  : {},
    userRegister:[],
    userProfile:[],
    userComment:[]
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {

    loginAction:(state,action)=>{
        state.userLogin = action.payload;
    },
    
    signupAction:(state,action)=>{
        state.userRegister = action.payload
    },
    profileAction:(state,action)=>{
        state.userProfile = action.payload
    },
    getComment:(state,action)=>{
      state.userComment = action.payload
    }
  }
});

export const {loginAction,signupAction,profileAction,getComment} = UserReducer.actions

export default UserReducer.reducer



export const LoginApi = (user) =>{
    return async dispatch =>{
      try{
        const result = await http.post('/api/auth/signin',user)
        const action = loginAction(result.data.content)
        dispatch(action)
        settings.setStorageJson(USER_LOGIN, result.data.content);
        settings.setStorage(ACCESSTOKEN, result.data.content.token);
        settings.setCookie(ACCESSTOKEN, result.data.content.token, 30);
        settings.setStorageJson(USER_PROFILE, result.data.content);
        history.push('/')
        
      }catch(err){
        alert('')
      }
       
    }
}


export const signupApi = (dataUser) =>{
    console.log(dataUser)
    return async (dispatch) => {
        try {
          const result = await http.post("/api/auth/signup", dataUser);
          const action = signupAction(result.data.content);
          dispatch(action);
          
          alert('Đăng Ký Thành Công !!!');
          history.push('/login')
        } catch (err) {
          alert(Result.data.message);
        }
      };


}


export const userProfileApi = (id) =>{
  return async dispatch =>{

    const result = await http.get(`/api/users/${id}`)
    const action = profileAction(result.data.content)
    
     
    dispatch(action)
    
  }
}


export const updateProfileApi = (id,data) =>{
   return async dispatch =>{
    try{
      const result = await http.put(`/api/users/${id}`,data)
      const action = profileAction(result.data.content)
      dispatch(action)

      
      alert(result.data.message)
      
    }catch(err){
      alert('ngu')
    }
   }
}

export const layBinhLuanApi = (id) =>{

  return async dispatch =>{
      const result = await http.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`)
      const action = getComment(result.data.content)
      dispatch(action)
    console.log(
      result.data.content
    )


  }



}


export const commentApi = (id,data) => {
  console.log(data)
    return async dispatch =>{
      const result = await http.post(`/api/binh-luan`,data) 
      const action =layCongViecChiTietApi(id)
     
      
      dispatch(action)
    }
}