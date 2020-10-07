import { CREATE_ORDER, CREATE_ORDER_SUCCESS, LIST_ORDERS, GET_STATUS_VALUES, UPDATE_STATUS_VALUE } from '../action_types/order.types'

const initState = {
    data: {},
    loading: false,
    error: ''
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return action.order
        case CREATE_ORDER_SUCCESS:
            return state
        case LIST_ORDERS:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
        case GET_STATUS_VALUES:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
        case UPDATE_STATUS_VALUE:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
            default:
                return state
    }
}