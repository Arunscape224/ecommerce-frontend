import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product.action'
import { getCategories } from '../actions/category.action'
import ShopCard from '../components/product/shop_card.component'

const Shop = () => {
    const dispatch = useDispatch()
    const products = useSelector(state =>  state.products)
    const categories = useSelector(state =>  state.categories)
    const theme = useSelector(state =>  state.theme)
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    return (
        <Container fluid className="pl-4 pr-4">
            <Row>
                <Col xs={12}
                     className="p-4 text-center">
                    <h1 style={{ color: theme.text_color }}>All Products</h1>
                </Col>
                <Col xs={12}>
                    <Row>
                        <div className="grid-container">
                        {
                          products.data ? products.data.map((product) => <Link key={product._id} to={`/product/${product._id}`}><ShopCard product={product}/></Link>) : <h1>Loading...</h1>
                        }
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop