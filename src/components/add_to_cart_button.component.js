import React, { useEffect } from 'react'
import { Button, Row } from 'reactstrap'  
import { useSelector, useDispatch } from 'react-redux'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addItemToCart, itemTotal } from '../helper_methods/index'
import { useHistory } from "react-router-dom";
import { getItemTotal } from '../actions/cart.action'
const AddToCartButton = ({product, qty}) => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    let history = useHistory();
    const addToCart = () => {
        addItemToCart(product, qty, () => {
            history.push('/cart')
            dispatch(getItemTotal())
        })
    }

    useEffect(() => {
        itemTotal()
    }, [])
    return (
        <Row>
        <Button className="m-3" style={{ marginBottom: '1rem', backgroundColor: theme.button_color }} onClick={addToCart}>
                        Add To Cart <FontAwesomeIcon className="ml-2" icon={faCartPlus} />
        </Button>
        </Row>
    )
}

export default AddToCartButton