import { lightMode } from '../theme'
import { TOGGLE_THEME } from '../action_types/theme.types'

const initState = {
    theme: lightMode
}

export const themeReducer = (state = initState.theme, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return action.theme
            default:
                return state
    }

}