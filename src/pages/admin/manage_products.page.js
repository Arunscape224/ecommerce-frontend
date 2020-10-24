import React, { useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/product.action'
import ManageProductCard from '../../components/product/manage_product_card.component'
import { Spinner } from 'reactstrap';

const ManageProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state =>  state.products)
    const theme = useSelector(state =>  state.theme)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <Container>
            <Col xs={12}>
                    <Row>
                        <div className="grid-container">
            {
                products.data ? products.data.map((product) => <ManageProductCard product={product}/>) : <Spinner style={{ color: theme.text_color, width: '3rem', height: '3rem' }} />
            }
            </div>
           </Row>
           </Col>
        </Container>
    )
}

export default ManageProducts