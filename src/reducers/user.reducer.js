import { CREATE_USER, LOGIN_USER, LOGIN_USER_SUCCESS, CREATE_USER_SUCCESS, LOGOUT_USER } from '../action_types/user.types'

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
            default:
                return state
    }
}

