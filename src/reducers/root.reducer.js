import { combineReducers } from 'redux'
import { themeReducer } from './theme.reducer'
import { sliderReducer } from './slider.reducer'
import { navReducer } from './nav.reducer'
import { productReducer } from './product.reducer'
import { reviewReducer } from './review.reducer'
import { userReducer } from './user.reducer'
import { categoryReducer } from './category.reducer'
import { braintreeReducer } from './braintree.reducer'
import { orderReducer } from './order.reducer'

export const rootReducer = combineReducers({
    theme: themeReducer,
    slider: sliderReducer,
    isOpen: navReducer,
    products: productReducer,
    reviews: reviewReducer,
    user: userReducer,
    categories: categoryReducer,
    braintree: braintreeReducer,
    order: orderReducer
})

