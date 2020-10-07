import { CREATE_USER, LOGIN_USER, LOGIN_USER_SUCCESS, CREATE_USER_SUCCESS, LOGOUT_USER, UPDATE_USER, UPDATE_LS_USER, GET_PURCHASE_HISTORY, GET_PURCHASE_HISTORY_SUCCESS } from '../action_types/user.types'

const initState = {
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return action.user
        case CREATE_USER_SUCCESS:
            return action.payload
        case LOGIN_USER:
            return action.user
        case LOGOUT_USER:
            return state
        case LOGIN_USER_SUCCESS:
            return action.user
        case GET_PURCHASE_HISTORY:
            return state
        case GET_PURCHASE_HISTORY_SUCCESS:
            return state
        case UPDATE_USER:
            return state
        case UPDATE_LS_USER:
            return state
            default:
                return state
    }
}

