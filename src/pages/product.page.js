import React, { useState, useEffect } from 'react'
import {Container, Card, Row, Col, Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../actions/product.action'
import ReviewForm from '../components/forms/review_form.component'
import ReviewContainer from '../components/review/review_container.component'
import { getReviews } from '../actions/review.action'
import AvgRating from '../components/review/avg_rating.component'
import ProductInfo from '../components/product/product_info.component'
import ProductDescription from '../components/product/product_description.component'
import ProductSize from '../components/product/product_size.component'
import ProductFinish from '../components/product/product_finish.component'
import ProductColor from '../components/product/product_color.component'
import Calculator from '../components/calculator/calculator_container.component'
import AddToCartButton from '../components/add_to_cart_button.component'
import { Link } from 'react-router-dom'
import ProductQuantitySelector from '../components/product/product_quantity_selector.component'
import { CalculateQty } from '../helper_methods/index'
import MagImage from '../components/mag-image.component'
import { Spinner } from 'reactstrap';

const Product = (props) => {
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [qty, setQty] = useState(1)
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const jwt = JSON.parse(localStorage.getItem('jwt'))
    const id = props.match.params.productId

    const fetchReviews = () => {
         dispatch(getReviews(id)).then(res => {
            setReviews(res.data)
        })
    }


    const submitCalculator = async (sf) => {
        setQty(CalculateQty(sf, product.sfPerBox))
        // console.log(CalculateQty(sf, product.sfPerBox))
    }
    
    
    useEffect(() => {
        dispatch(getSingleProduct(id)).then(res => {
            setProduct(res)
            setLoaded(true)
        })
        fetchReviews()
    }, [dispatch, reviews.length, loaded])
    
    const { name, description, soldPer, price, pcPerBox, sfPerBox, sfPerPiece, size, thickness, finish, color  } = product
    if (loaded) {
        return (
            <Container fluid="xl" className="mt-3">
                <Row>
                    <Col sm="6">
                        <MagImage theme={theme} product={product} url="product"/>
                    </Col>
                    <Col sm="6">
    
                        <Row className="d-block pl-3 pr-3">
                            <h1 style={{ color: theme.text_color }}>{name}</h1>        
                            <AvgRating theme={theme} reviews={reviews} theme={theme}/>
                            <p style={{ color: theme.text_color }}>${price} / {soldPer}</p>
                        </Row>
    
                        <ProductInfo theme={theme} pcPerBox={pcPerBox} sfPerBox={sfPerBox} sfPerPiece={sfPerPiece}/>
    
                        
                        
                         <ProductSize theme={theme} thickness={thickness} size={size} />
                         <ProductFinish theme={theme} finish={finish}/>
                         <ProductColor theme={theme} color={color}/>
    
                            <Calculator theme={theme} submitCalculator={submitCalculator}/>
                            <AddToCartButton product={product} qty={qty} />
                            <ProductQuantitySelector qty={qty} setQty={setQty} soldPer={soldPer} /> 
    
    
    
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
    
                <ProductDescription theme={theme} description={description} />
                
                <Card className="mt-4" style={{backgroundColor: theme.background_color}}>
                    <ReviewContainer theme={theme} reviews={reviews} />
                { jwt ? <ReviewForm product={product} fetchReviews={fetchReviews}/> : <div className="p-4 ml-3" style={{ color: theme.text_color }}>please <Link to="/login">login</Link> to leave a review</div> }
                </Card>
            </Container>
        ) 
    } else {
        return (
            <Spinner className="m-5" style={{ color: theme.text_color, width: '5rem', height: '5rem'}} />
        )
    }
}

export default Product