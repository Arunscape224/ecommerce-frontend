import { TOGGLE_THEME } from '../action_types/theme.types'

export const toggleTheme = (theme) => {
    return async (dispatch) => {
        await dispatch({
            type: TOGGLE_THEME,
            theme: theme
        })
    }
}