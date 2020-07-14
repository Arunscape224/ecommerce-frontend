import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.action'

const Shop = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state =>  state.theme)
    const products = useSelector(state =>  state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <Container >
            <Row>
                <Col xs={12}
                    style={{ 
                        border: `2px solid ${theme.text_color}`
                    }}>
                    <h2>Shop</h2>
                </Col>
                <Col xs={12}
                    style={{ 
                        border: `2px solid ${theme.text_color}`
                    }}>
                    {
                        products.data.map((product) => <div key={product._id}>{product.name}</div>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Shop