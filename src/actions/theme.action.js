import { TOGGLE_THEME } from '../action_types/theme.types'
import { setTheme } from '../helper_methods/index'

export const toggleTheme = (theme) => {
    setTheme(theme)
    return async (dispatch) => {
        await dispatch({
            type: TOGGLE_THEME,
            theme: theme
        })
       
    }
    
}