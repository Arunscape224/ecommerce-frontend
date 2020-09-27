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
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    return (
        <Container fluid>
            <Row>
                <Col xs={12}
                     className="border p-4">
                    <h2 onClick={() => console.log(categories)}>Shop</h2>
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