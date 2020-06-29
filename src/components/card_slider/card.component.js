import React from 'react';
import PropTypes from 'prop-types';
import { SingleCard } from '../styles/card.styles'
import { data } from '../../slider_data/data' 
const Card = ({property}) => {
    const {index, name, price, soldPer} = property;

    return (
        <SingleCard id={`card-${index}`}  className="single-card">
            
            <img src={data.properties[0].photo} alt={name} />
            <div className="details">
                <p className="location">
                    {name}<br />
                    ${price}
                </p>
                <span>sold per {soldPer}</span>
             
            </div>
        </SingleCard>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;