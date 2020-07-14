import axios from 'axios'
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERR } from '../action_types/category.types'

const url = "http://localhost:8000/api/categories/all"

export const getCategories = () => {
    return async dispatch => {
        dispatch({
            type: GET_CATEGORIES,
        })
        return await axios.get(url)
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

