import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProduct: (state, actions) => actions.payload
    }
})

export const { setProduct } = productsSlice.actions

export default productsSlice.reducer

//REDUX THUNK. 
//sirve para guardar la informacion de un end point a un estado GLOBAL
//uns funcion que retorna otra funcion

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products'
    axios.get(URL)
        .then((result) => {
            dispatch(setProduct(result.data.data.products))
        }).catch((err) => {
            console.log(err)
        });
}