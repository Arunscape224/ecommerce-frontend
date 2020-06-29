import { IS_OPEN } from '../action_types/nav.types'

export const toggleNav = (isOpen) => {
    return async (dispatch) => {
       await dispatch({
            type: IS_OPEN,
            isOpen: { isOpen: !isOpen }
        })
    }
}