import React from 'react';
import { Button } from 'reactstrap'
import PropTypes from 'prop-types';
import { SingleCard } from '../styles/card.styles'
import Image from '../image.component'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Card = ({property}) => {
    const {index, _id, name, price, soldPer} = property;
    const theme = useSelector(state => state.theme)
    return (
        <SingleCard id={`card-${index}`} backgroundColor={theme.background_color} textColor={theme.text_color}  className="single-card">
            
            {/* <img src={data.properties[0].photo} alt={name} /> */}
            <Link to={`/product/${_id}`}><Image  product={property} url="product"/></Link>
            <div className="details">
                <p className="location">
                    <strong className="mb-1">{name}</strong><br />
                    <div className="mb-3"><em>${price} / {soldPer}</em></div>
                    <Link to={`/product/${_id}`}><Button style={{zIndex: '9999999999999 !important', backgroundImage: `linear-gradient(to right, ${theme.text_color} 0%, ${theme.status === 'light' ? '#9BA7A8' : '#968c77'} 100%)`}}>View Product</Button></Link>
                    
                </p>
               
             
            </div>
        </SingleCard>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;