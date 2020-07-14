import React, { useEffect } from 'react'
import CardSlider from '../components/card_slider/card_slider.component'
import { Container, Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { slideRight, slideLeft } from '../actions/slider.action'
import { getProducts } from '../actions/product.action'
const Home = () => {
    const dispatch = useDispatch()
    const slider = useSelector(state => state.slider)
  
    useEffect(() => {
        dispatch(getProducts())
        
    }, [dispatch])

    return (
      <Container fluid={true} className="App">
              <div>
                <button disabled={slider.property.index === 0} onClick={() => dispatch(slideLeft(slider))}>Left</button>
                <button disabled={slider.property.index === slider.properties.length - 1} onClick={() => dispatch(slideRight(slider))}>Right</button>
              </div>
          <Row>
            <Col>
              <CardSlider />
            </Col>
          </Row>
      </Container>
    )
}

export default Home