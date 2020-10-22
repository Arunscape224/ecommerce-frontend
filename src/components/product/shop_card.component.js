import React, { useState } from 'react'
import Image from '../image.component'
import { useSelector } from 'react-redux'

const ShopCard = ({ product }) => {
    const theme = useSelector(state => state.theme)
    const [hovering, setHovering] = useState(false)
    return (
    <div className={`grid-item grid-item--${product.index}`}  onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)}>
        <Image theme={theme} product={product} url="product"/>
            <div>
                <div className="mt-3" style={{color: theme.text_color}}>{product.name}</div>
               {
                   hovering ? 
                   <p style={{color: theme.text_color}} >${product.price} / <span style={{color: theme.button_color}}>{product.soldPer}</span></p> :
                   <p style={{height: '30px'}}></p>
               }
            </div>
  
    </div>
    )
}
   

export default ShopCard