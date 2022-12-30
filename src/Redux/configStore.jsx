
import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from './Reducer/ProductReducer/ProductReducer'
import UserReducer from './Reducer/UserReducer/UserReducer'


export  const store = configureStore({
    reducer:{
        ProductReducer:ProductReducer,
        UserReducer:UserReducer
    }
})