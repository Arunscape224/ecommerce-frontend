import { SLIDE_LEFT, SLIDE_RIGHT } from '../action_types/slider.types'


export const slideRight = (slider) => {
    return async (dispatch) => {
        let newIndex = slider.property.index+1
        await dispatch({
            type: SLIDE_RIGHT,
            slider: { ...slider, property: slider.properties[newIndex] }
        })
    }
}

export const slideLeft = (slider) => {
    return async (dispatch) => {
        let newIndex = slider.property.index-1
        await dispatch({
            type: SLIDE_LEFT,
            slider: { ...slider, property: slider.properties[newIndex] }
        })
    }
}