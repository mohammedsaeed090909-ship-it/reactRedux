import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
    const res = await fetch("http://localhost:9000/products");
    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export const {}=productsSlice.actions;
export default productsSlice.reducer;