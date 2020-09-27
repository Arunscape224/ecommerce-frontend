import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { getCart } from '../helper_methods/index'
import CartItemContainer from '../components/cart/cart-item-container.component'
import CheckoutContainer from '../components/checkout/checkout-container.component'
const Cart = () => {
    const [cartItems, setCartItems] = useState([])
  
    const updateCartItems = () => {
      setCartItems(getCart())
    }
    useEffect(() => {
       updateCartItems()
    }, [])

    return (
      <Container fluid={true} className="mt-2">
        <Row>
          <Col xs={12}>
            <h1 className="border p-4 mb-4">
              {`You have ${cartItems.length} items in your cart`}
            </h1>
          </Col>
        </Row>
        <Container fluid>
        <Row>
          <Col xs={6} className="p-4">
            {/* { cartItems.length > 0 ? showItems(cartItems) : noItemsMessage()} */}
            <CartItemContainer cartItems={cartItems}  updateCartItems={updateCartItems}/>
          </Col>
          <Col xs={6} className="p-4 border">
            <CheckoutContainer products={cartItems} />
          </Col>
        </Row>
        </Container>
           
      </Container>
    )
}

export default Cart