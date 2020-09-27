import React, { useState } from 'react'
import Image from '../image.component'
import { useSelector } from 'react-redux'

const ShopCard = ({ product }) => {
    const theme = useSelector(state => state.theme)
    const [hovering, setHovering] = useState(false)
    return (
    <div className={`grid-item grid-item--${product.index}`}  onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)}>
        <Image product={product} url="product"/>
            <div>
                <div>{product.name}</div>
               {
                   hovering ? 
                   <p className="text-muted ">${product.price} / {product.soldPer}</p> :
                   <p style={{color: theme.background_color, height: '30px'}}></p>
               }
            </div>
  
    </div>
    )
}
   

export default ShopCard