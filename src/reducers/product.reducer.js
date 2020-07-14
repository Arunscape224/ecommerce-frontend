import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERR, CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS } from '../action_types/product.types'


const initState = {
    data: [],
    loading: false,
    error: ''
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return action.product
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
            default:
                return state
    }
}