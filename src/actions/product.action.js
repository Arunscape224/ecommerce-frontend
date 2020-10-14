import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERR, GET_PRODUCTS_ERR, CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, DELETE_SINGLE_PRODUCT, UPDATE_SINGLE_PRODUCT } from '../action_types/product.types'
import axios from 'axios'

export const getProducts = () => {
    return async dispatch => {
        dispatch({
            type: GET_PRODUCTS,
        })
        return await axios.get('http://localhost:8000/api/products')
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

export const getSingleProduct = (product) => {
    return async dispatch => {
        dispatch({
            type: GET_SINGLE_PRODUCT,
        })
        return await axios.get(`http://localhost:8000/api/product/${product}`)
                .then(res => {
                    dispatch({
                        type: GET_SINGLE_PRODUCT_SUCCESS,
                    })
                    return res.data
                })
                .catch(error => {
                    dispatch({
                        type: GET_SINGLE_PRODUCT_ERR,
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


export const deleteProduct = (productId, userId, token) => {
    return async (dispatch) => {
        await dispatch({
            type: DELETE_SINGLE_PRODUCT,
        })
        return await fetch(`http://localhost:8000/api/product/delete/${productId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`
            },
        })
        .then(res => {
                return res.json()
        })
        .catch(err => {
            console.log(err);
        });
    }
}

// export const updateProduct = (productId, userId, token, product) => {
//     return async (dispatch) => {
//         await dispatch({
//             type: UPDATE_SINGLE_PRODUCT,
//         })
//         return await fetch(`http://localhost:8000/api/product/update/${productId}/${userId}`, {
//             method: "PUT",
//             headers: {
//                 Accept: 'application/json',
//                 "Content-Type": "Application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(product)
//         })
//         .then(res => {
//                 return res.json()
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }
// }

export const updateProduct = (productId, userId, token, product) => {
    return async (dispatch) => {
        console.log(product)
        await dispatch({
            type: UPDATE_SINGLE_PRODUCT,
            product: product        
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'put',
            url: `http://localhost:8000/api/product/update/${productId}/${userId}`,
            headers,
            data: product
          })
        .then(response => {
                return response.data.product
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}

