import { GET_ITEM_TOTAL } from '../action_types/cart.types'
import { itemTotal } from '../helper_methods/index'

export const getItemTotal = () => {
    return async dispatch => {
        dispatch({
            type: GET_ITEM_TOTAL,
            itemTotal: itemTotal()
        })
        return await itemTotal()
    }
}
