import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import Image from '../image.component'
import { Link } from 'react-router-dom'
import CartQuantitySelector from '../cart/cart_quantity_selector.component'
import { removeItem } from '../../helper_methods/index'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const CartItem = ({ product, updateCartItems }) => {

    const deleteAndUpdate = (productId) => {
        removeItem(productId)
        updateCartItems()
    }

    return (
        <Row>

        <div className="d-flex justify-content-between">
        <div className="col-6 d-flex align-items-center responsive-column">
           <Col xs={6} className="d-flex flex-column justify-content-center align-items-center">
                <Link to={`product/${product._id}`}>
                    <Image product={product} url="product" />
                </Link>
            </Col>
            <Col xs={6} id="name-price-responsive" className="d-flex flex-column justify-content-center">
                <h4>{product.name}</h4>
                <p>${product.price}</p>
            </Col>
           </div>
           <div className="col-6 d-flex align-items-center justify-content-end">
           <Col xs={6} className="d-flex flex-column justify-content-center align-items-center p-0">
                <CartQuantitySelector updateCartItems={updateCartItems} product={product}/>
            </Col>
            <Col xs={6} className="d-flex flex-column justify-content-center align-items-center p-0">
                <Button onClick={() => deleteAndUpdate(product._id)} className="btn btn-danger"><FontAwesomeIcon icon={faWindowClose}/></Button>
            </Col>
           </div>
        </div>  
          
        </Row>
    )
}

export default CartItem