import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk("getproducts",async()=>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return res.data;
    }catch(err){
        console.log(err)
    }
})

 const productSlice = createSlice({
    name:'products',
    initialState:{
        dataList:[],
        loading:false,
        err:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.dataList = action.payload;
           
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.err = action.error.message;
        })
    }
})
export default productSlice.reducer;