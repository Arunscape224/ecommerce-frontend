import { CREATE_REVIEW_SUCCESS, CREATE_REVIEW, GET_REVIEWS, GET_REVIEWS_SUCCESS, GET_REVIEWS_ERR } from '../action_types/review.types'

const initState = {
    data: [],
    loading: false,
    error: ''
}

export const reviewReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return action.review
        case CREATE_REVIEW_SUCCESS:
            return state
        case GET_REVIEWS:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case GET_REVIEWS_ERR:
            return {
                ...state,
                data: [],
                loading: false,
                error: 'There was a sad error'
            }
            default:
                return state
    }
}