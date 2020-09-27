import React from 'react'
import Card from './card.component'
import { useSelector } from 'react-redux'
import { CardsSlider, GradientWrapper, CardSliderWrapper } from '../styles/card_slider.styles'

const CardSlider = ({ products }) => {

    const theme = useSelector(state => state.theme)
    const slider = useSelector(state => state.slider)
    
    return (
        
        <GradientWrapper onClick={() => console.log(products)}>
           
            <CardsSlider borderColor={theme.text_color} className={`cards-slider active-slide-${slider.property.index}`}>
            <CardSliderWrapper  className="cards-slider-wrapper"
                  style={{ 
                      transform: `translateX(-${slider.property.index*(100/products.length)}%)`
                   }}>
                       
            {
                products ? products.map((property) => <Card key={property._id} property={property} />) : <div>Loading</div>
            }
            </CardSliderWrapper>
        </CardsSlider>
        </GradientWrapper>
        
    )
}

export default CardSlider;
