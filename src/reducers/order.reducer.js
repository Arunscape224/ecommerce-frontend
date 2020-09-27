import { CREATE_ORDER, CREATE_ORDER_SUCCESS } from '../action_types/order.types'

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
            default:
                return state
    }
}