import React, { useState } from 'react'
import {
    InputGroup,
    Input,
    Row,
    Col
   } from 'reactstrap'
import { updateItem } from '../../helper_methods/index'


const CartQuantitySelector = ({ product, updateCartItems }) => {
    let [count, setCount] = useState(product.count)
  
    
    const handleChange = productId => event => {
      setCount(event.target.value < 1 ? 1 : event.target.value)
      if(event.target.value >= 1) {
        updateItem(productId, event.target.value)
        updateCartItems()
      }
    }

    return (
    <Row>
        <Col>
        <InputGroup>
            <Input onChange={handleChange(product._id)} type="number" value={count} placeholder={`enter ${product.soldPer} quantity`}/>
      </InputGroup>
        </Col>
      </Row>

        
    
    )
}

export default CartQuantitySelector