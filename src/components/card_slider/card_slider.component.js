import React from 'react'
import Card from './card.component'
import { useSelector } from 'react-redux'
import { CardsSlider, GradientWrapper, CardSliderWrapper } from '../styles/card_slider.styles'

const CardSlider = () => {

    const theme = useSelector(state => state.theme)
    const slider = useSelector(state => state.slider)
    const products = useSelector(state => state.products)
    const firstSix = products.data.slice(0, 6)
    
    
    return (
        <GradientWrapper onClick={() => console.log(firstSix)}>
            <CardsSlider borderColor={theme.text_color} className={`cards-slider active-slide-${slider.property.index}`}>
            <CardSliderWrapper  className="cards-slider-wrapper"
                  style={{ 
                      transform: `translateX(-${slider.property.index*(100/firstSix.length)}%)`
                   }}>
                       
            {
                firstSix.map((property) => <Card key={property._id} property={property} />)
            }
            </CardSliderWrapper>
        </CardsSlider>
        </GradientWrapper>
    )
}

export default CardSlider;
