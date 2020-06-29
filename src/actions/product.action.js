import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERR } from '../action_types/product.types'
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