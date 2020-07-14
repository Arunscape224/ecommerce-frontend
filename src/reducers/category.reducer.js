import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES, GET_CATEGORIES_ERR } from '../action_types/category.types'


const initState = {
    data: [],
    loading: false,
    error: ''
}

export const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
        case GET_CATEGORIES_ERR:
        return {
            ...state,
            data: [],
            loading: false,
            error: 'There was a sad error'
        }
            default:
                return state
    }
}