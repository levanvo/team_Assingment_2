import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/instance';

const initialState: any = {
    products: [],
}

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async () => {
        try {
            const { data } = await instance.get(`/products`);
            // console.log(data.data);
            return data.data;
        } catch (error) { }
    }
);
export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product) => {
        try {
            const {data} = await instance.post(`/products`, product);
            console.log(data);
            return data;
        } catch (error) { }
    }
);
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product: any) => {
        try {
            const {data} = await instance.patch(`/products/${product.id}`, product);
            return data;
        } catch (error) { }
    }
);
export const removeProduct = createAsyncThunk(
    'product/removeProducts',
    async (id) => {
        try {
            await instance.delete(`/products/${id}`);
            return id;
        } catch (error) { }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    // rerender
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload.data)
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product: any = action.payload.data
            state.products = state.products.map((item: any) => item.id === product.id ? product : item)
        })
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
        })
    }
})

export const productReducer = productSlice.reducer;