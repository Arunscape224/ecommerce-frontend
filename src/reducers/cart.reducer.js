import { GET_ITEM_TOTAL } from '../action_types/cart.types'
import { itemTotal } from '../helper_methods/index'

const initState = {
    itemTotal: itemTotal()
}

export const cartReducer = (state = initState.itemTotal, action) => {
    switch (action.type) {
        case GET_ITEM_TOTAL:
            return action.itemTotal
            default:
                return state
    }

}