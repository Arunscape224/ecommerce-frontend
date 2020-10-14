import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERR, CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERR, DELETE_SINGLE_PRODUCT, UPDATE_SINGLE_PRODUCT } from '../action_types/product.types'

const initState = {
    data: [],
    loading: false,
    error: ''
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return action.product
        case UPDATE_SINGLE_PRODUCT:
            return state
        case CREATE_PRODUCT_SUCCESS:
            return state
        case GET_PRODUCTS:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case GET_PRODUCTS_ERR:
        return {
            ...state,
            data: [],
            loading: false,
            error: 'There was a sad error'
        }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                data: {},
                loading: true,
                error: ''
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case GET_SINGLE_PRODUCT_ERR:
        return {
            ...state,
            data: {},
            loading: false,
            error: 'There was a sad error'
        }
        case DELETE_SINGLE_PRODUCT:
            return {
                ...state,
                data: action.payload,
                loading: true,
                error: ''
        }
            default:
                return state
    }
}