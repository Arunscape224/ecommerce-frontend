import { CREATE_REVIEW, CREATE_REVIEW_SUCCESS, GET_REVIEWS, GET_REVIEWS_SUCCESS, GET_REVIEWS_ERR } from '../action_types/review.types'
import axios from 'axios'
import { API } from '../config'

export const createReview = (review, userId, token) => {
    return async (dispatch) => {
        await dispatch({
            type: CREATE_REVIEW,
            review: review        
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'post',
            url: `${API}/review/create/${userId}`,
            headers,
            data: review
          })
        .then(res => {
                console.log(res.data)
                dispatch({
                    type: CREATE_REVIEW_SUCCESS,
                    review: res.data.review       
                })
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}


export const getReviews = (productId) => {
    return async dispatch => {
        dispatch({
            type: GET_REVIEWS,
        })
        return await axios.get(`${API}/product/reviews/${productId}`)
                .then(res => {
                    dispatch({
                        type: GET_REVIEWS_SUCCESS,
                        payload: res.data
                    })
                    return res
                })
                .catch(error => {
                    dispatch({
                        type: GET_REVIEWS_ERR,
                        payload: ''
                    })
                })
    }
}