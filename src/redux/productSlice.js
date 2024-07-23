import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        try {
            dispatch(setStatus(STATUSES.LOADING))
            const res = await fetch('https://fakestoreapi.com/products')
            const products = await res.json()
            dispatch(setProducts(products))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))

        }
    }
}