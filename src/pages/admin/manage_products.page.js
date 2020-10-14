import React, { useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../../actions/product.action'
import ManageProductCard from '../../components/product/manage_product_card.component'

const ManageProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state =>  state.products)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <Container>
            <Col xs={12}>
                    <Row>
                        <div className="grid-container">
            {
                products.data ? products.data.map((product) => <ManageProductCard product={product}/>) : <h1>Loading...</h1>
            }
            </div>
           </Row>
           </Col>
        </Container>
    )
}

export default ManageProducts