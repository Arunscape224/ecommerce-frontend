import { data } from '../slider_data/data'
import { SLIDE_RIGHT, SLIDE_LEFT } from '../action_types/slider.types'

const initState = {
    properties: data.properties,
    property: data.properties[0]
}

export const sliderReducer = (state = initState, action) => {
    switch (action.type) {
        case SLIDE_RIGHT:
            return action.slider
        case SLIDE_LEFT:
            return action.slider
            default:
                return state
    }
}