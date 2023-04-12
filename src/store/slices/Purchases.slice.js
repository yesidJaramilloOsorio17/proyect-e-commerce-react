import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from "../../utils/getConfig"

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setpurchases : (state, action) => {
            return action.payload
        }
    }
})

export const getpurchasesThunk = () => dispatch => {

    axios
        .get( "https://e-commerce-api-v2.academlo.tech/api/v1/cart ", getConfig())
        .then( resp => dispatch(setpurchases(resp.data)) )
        .catch( error => console.error(error) )

}

export const createPurchasesThunk = data => dispatch =>  {
    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/cart",data, getConfig())
    .then (()=> dispatch(getpurchasesThunk ()))
    .catch(error => console.error(error))
}

export const { setpurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer
