import { combineReducers } from 'redux'
import { themeReducer } from './theme.reducer'
import { sliderReducer } from './slider.reducer'
import { navReducer } from './nav.reducer'
import { productReducer } from './product.reducer'
import { userReducer } from './user.reducer'
export const rootReducer = combineReducers({
    theme: themeReducer,
    slider: sliderReducer,
    isOpen: navReducer,
    products: productReducer,
    user: userReducer
})

