import { CREATE_USER } from '../action_types/user.types'

const initState = {
    
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return action.user
            default:
                return state
    }
}