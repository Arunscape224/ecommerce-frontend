import { IS_OPEN } from '../action_types/nav.types'

const initState = {
    isOpen: false
}

export const navReducer = (state = initState, action) => {
    switch (action.type) {
        case IS_OPEN:
            return action.isOpen
            default:
                return state
    }
}