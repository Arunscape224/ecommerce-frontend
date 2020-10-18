
import React from 'react'
import Card from './card.component'
import { useSelector } from 'react-redux'
import { CardsSlider, GradientWrapper, CardSliderWrapper } from '../styles/card_slider.styles'
import { getTheme } from '../../helper_methods/index'
const CardSlider = ({ products }) => {

    const theme = useSelector(state => state.theme)
    const slider = useSelector(state => state.slider)
    const lsTheme = getTheme()
    return (
        
        <GradientWrapper zInd={lsTheme.status === "light" ? '100000' : '-1'} gradient1={theme.gradient_1} gradient0={theme.gradient_0} backgroundColor={theme.background_color}>
           
            <CardsSlider  backgroundColor={theme.backgroundColor} borderColor={theme.text_color} className={`cards-slider active-slide-${slider.property.index}`}>
            <CardSliderWrapper  className="cards-slider-wrapper"
                  style={{ 
                      transform: `translateX(-${slider.property.index*(100/products.length)}%)`
                   }}>
                       
            {
                products ? products.map((property) => <Card onClick={() => console.log(property._id)} key={property._id} property={property} />) : <div>Loading</div>
            }
            </CardSliderWrapper>
        </CardsSlider>
        </GradientWrapper>
        
    )
}

export default CardSlider;