import axios from 'axios'
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR, CREATE_CATEGORY, CREATE_CATEGORY_SUCCESS } from '../action_types/category.types'
import { API } from '../config'

export const getCategories = () => {
    return async dispatch => {
        dispatch({
            type: GET_CATEGORIES,
        })
        return await axios.get(`${API}/categories/all`)
                .then(res => {
                    dispatch({
                        type: GET_CATEGORIES_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type: GET_CATEGORIES_ERR,
                        payload: ''
                    })
                })
    }
}


export const createCategory = (category, userId, token) => {
    return async (dispatch) => {
        console.log(category)
        await dispatch({
            type: CREATE_CATEGORY,
            category: category        
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'post',
            url: `${API}/category/create/${userId}`,
            headers,
            data: category
          })
        .then(response => {
                console.log(response.data)
                dispatch({
                    type: CREATE_CATEGORY_SUCCESS,
                    category: response.data.category       
                })
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}
