import { BUY, BUY_SUCCESS, BUY_ERR, PROCESS_PAYMENT, PROCESS_PAYMENT_SUCCESS, PROCESS_PAYMENT_ERR } from '../action_types/braintree.types'

const initState = {
    data: {}
}

export const braintreeReducer = (state = initState, action) => {
    switch (action.type) {
        case BUY:
            return {
                ...state,
                data: {},
                loading: true,
                error: ''
            }
        case BUY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case BUY_ERR:
        return {
            ...state,
            data: {},
            loading: false,
            error: 'There was a sad error'
        }
        case PROCESS_PAYMENT:
            return {
                ...state,
                data: {},
                loading: true,
                error: ''
            }
        case PROCESS_PAYMENT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case PROCESS_PAYMENT_ERR:
        return {
            ...state,
            data: {},
            loading: false,
            error: 'There was a sad error'
        }
            default:
                return state
    }
}