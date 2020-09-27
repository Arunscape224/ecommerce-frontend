import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import CartItem from './cart-item.component'


const CartItemContainer = ({ cartItems, updateCartItems }) => {
  const noItemsMessage = () => (
    <h2>You cart is empty. <Link to="/shop">Continue Shopping!</Link></h2>
  )
  
  const showItems = (items) => {
  return items.map((product, i) => <CartItem key={i} updateCartItems={updateCartItems} product={product}/>)
}

  return (
    <Row>
       <Col>
       { cartItems.length > 0 ? showItems(cartItems) : noItemsMessage()}
       </Col>
    </Row>
  )
}

export default CartItemContainer