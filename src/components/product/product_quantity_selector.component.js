import React from 'react'
import {
    InputGroup,
    Input,
    Row,
    Col
   } from 'reactstrap'


const ProductQuantitySelector = ({ qty, setQty, soldPer }) => {


  const handleChange = productId => event => {
    setQty(event.target.value < 1 ? 1 : event.target.value)
  }

    return (
    <Row>
        <Col xs="6">
        <InputGroup>
            <Input value={qty} onChange={handleChange()} type="number" placeholder={`enter ${soldPer} quantity`}/>
      </InputGroup>
        </Col>
      </Row>

        
    
    )
}

export default ProductQuantitySelector