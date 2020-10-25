import React, {useEffect} from 'react'
import { slideRight, slideLeft } from '../../actions/slider.action'
import { useSelector, useDispatch } from 'react-redux'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import CardSlider from '../../components/card_slider/card_slider.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getProducts } from '../../actions/product.action'
import {  Row, Col } from 'reactstrap'

const CardSliderContainer = () => {
    const dispatch = useDispatch()
    const slider = useSelector(state => state.slider)
    const products = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProducts())
        
    }, [dispatch])


    return (
        <div className="mt-5 card-slider-container" style={{marginBottom: '150px'}}>
          
          <Col className="d-flex justify-content-between align-items-center  position-absolute" style={{ height: '325px'}}>
            <div className="d-flex justify-content-between w-100 align-items-center" style={{ height: '325px', zIndex: '10000000000000 !important' }}>
              <button id="slider-buttons" className="p-4 clear-button" style={{  zIndex: '999999999999999999999999999999  !important' }} disabled={slider.property.index === 0} onClick={() => dispatch(slideLeft(slider))}><FontAwesomeIcon style={{  zIndex: '100000000000000000000000000 !important' }}  size="lg" icon={faChevronLeft}/></button>
              <button id="slider-buttons" className="p-4 clear-button" style={{  zIndex: '999999999999999999999999999999  !important' }} disabled={slider.property.index === slider.properties.length - 1} onClick={() => dispatch(slideRight(slider))}><FontAwesomeIcon style={{  zIndex: '100000000000000000000000000 !important' }}  size="lg" icon={faChevronRight}/></button>
            </div>
          </Col>
          
          <Col>
            <CardSlider products={products.data} />
          </Col>
    </div>
    )
}

export default CardSliderContainer