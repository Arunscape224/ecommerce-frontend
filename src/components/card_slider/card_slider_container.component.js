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
    const theme = useSelector(state => state.theme)
    const firstSix = products.data.slice(0, 6)
    useEffect(() => {
        dispatch(getProducts())
        
    }, [dispatch])


    return (
        <Row style={{backgroundColor: `${theme.background_color} !important`}}>

          <Col className="d-flex justify-content-between align-items-center" style={{ height: '420px',  zIndex: '10000000000000'}}>
            <div className="d-flex justify-content-between w-100 align-items-center" style={{ height: '500px', zIndex: '1000000000000000000000000 !important' }}>
              <button className="p-4 clear-button" disabled={slider.property.index === 0} onClick={() => dispatch(slideLeft(slider))}><FontAwesomeIcon size="lg" icon={faChevronLeft}/></button>
              <button className="p-4 clear-button" disabled={slider.property.index === slider.properties.length - 1} onClick={() => dispatch(slideRight(slider))}><FontAwesomeIcon size="lg" icon={faChevronRight}/></button>
            </div>
          </Col>
          <Col className="position-absolute p-5">
            <CardSlider products={firstSix} />
          </Col>
    </Row>
    )
}

export default CardSliderContainer