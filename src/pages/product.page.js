import React, { useState, useEffect } from 'react'
import {Container, Card, Row, Col, Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../actions/product.action'
import Image from '../components/image.component'
import ReviewForm from '../components/forms/review_form.component'
import ReviewContainer from '../components/review/review_container.component'
import { getReviews } from '../actions/review.action'
import AvgRating from '../components/review/avg_rating.component'
import ProductInfo from '../components/product/product_info.component'
import ProductDescription from '../components/product/product_description.component'
import ProductSize from '../components/product/product_size.component'
import ProductFinish from '../components/product/product_finish.component'
import Calculator from '../components/calculator/calculator_container.component'

const Product = (props) => {
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const jwt = JSON.parse(localStorage.getItem('jwt'))
    const id = props.match.params.productId

    const fetchReviews = () => {
         dispatch(getReviews(id)).then(res => {
            setReviews(res.data)
        })
    }

    
    
    useEffect(() => {
        dispatch(getSingleProduct(id)).then(res => setProduct(res))
        fetchReviews()
    }, [dispatch, reviews.length])
    
    const { name, description, soldPer, price, pcPerBox, sfPerBox, sfPerPiece, size, thickness, finish  } = product
    return (
        <Container fluid>
            <Row>
                <Col sm="6">
                    <Image product={product} url="product"/>
                </Col>
                <Col sm="6">

                    <Row className="d-block pl-3 pr-3">
                        <h1>{name}</h1>
                       
                        <AvgRating reviews={reviews} theme={theme}/>
                        <p>${price} / {soldPer}</p>
                    </Row>

                   
                    <ProductInfo pcPerBox={pcPerBox}
                                 sfPerBox={sfPerBox}
                                 sfPerPiece={sfPerPiece}/>

                    <Calculator />
                     <ProductSize thickness={thickness}
                                     size={size} />
                     <ProductFinish finish={finish}/>

                </Col>
            </Row>

            {/* buttons */}
            <Row>
                {
                    reviews.length ? 
                    <Button className="m-3" id="toggler" style={{ marginBottom: '1rem', backgroundColor: theme.button_color }}>
                        Show Reviews <em>({reviews.length})</em>
                    </Button>
                    : <></>
                }

                {
                    description ? 
                    <Button className="m-3" id="toggler2" style={{ marginBottom: '1rem', backgroundColor: theme.button_color }}>
                        Show Description
                    </Button>
                    : <></>
                }
            </Row>

            <ProductDescription description={description} />
            
            <Card>
                <ReviewContainer reviews={reviews} />
            { jwt ? <ReviewForm product={product} fetchReviews={fetchReviews}/> : <div>please log in to leave a review</div> }
            </Card>
        </Container>
    )
}

export default Product