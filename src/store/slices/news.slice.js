import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const newsSlice = createSlice({
    name: 'news',
    initialState: [],
    reducers: {
        setNews : (state, action) => {
            return action.payload
        }
    }
})

export const getNewsThunk = () => dispatch =>{

    axios
        .get( "https://e-commerce-api-v2.academlo.tech/api/v1/products" )
        .then( resp => dispatch( setNews(resp.data) ) )
        .catch( error => console.error(error) )

}

export const filterCategoriesThunk = id => dispatch => {
    axios
      .get (`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
      .then (resp =>dispatch(setNews(resp.data)))
      .catch ( error => console.error(error))
    }

    export const filterHeadCategoriesThunk = sony => dispatch =>
    {
        axios
           .get`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${sony}`
           .then (resp=> dispatch(setNews(resp.data)))  
           .catch(error=>console.error(error)) 
        }


export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
