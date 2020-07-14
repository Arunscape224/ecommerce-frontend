import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERR, CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS } from '../action_types/product.types'
import axios from 'axios'

const url = "http://localhost:8000/api/products"

export const getProducts = () => {
    return async dispatch => {
        dispatch({
            type: GET_PRODUCTS,
        })
        return await axios.get(url)
                .then(res => {
                    dispatch({
                        type: GET_PRODUCTS_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type: GET_PRODUCTS_ERR,
                        payload: ''
                    })
                })
    }
}

export const createProduct = (product, userId, token) => {
    return async (dispatch) => {
        console.log(product)
        await dispatch({
            type: CREATE_PRODUCT,
            product: product        
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'post',
            url: `http://localhost:8000/api/product/create/${userId}`,
            headers,
            data: product
          })
        .then(response => {
                console.log(response.data)
                dispatch({
                    type: CREATE_PRODUCT_SUCCESS,
                    product: response.data.product       
                })
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}



