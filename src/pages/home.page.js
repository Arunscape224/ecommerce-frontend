import React from 'react'
import { Container } from 'reactstrap'
import LoopingBanner from '../components/banners/looping-bgimage.component'
import HomeParallax from '../components/banners/home-parallax.component'
import ContactFormContainer from '../components/contact_form_container.component'
import CardSliderContainer from '../components/card_slider/card_slider_container.component'
import { useSelector } from 'react-redux'
const Home = () => {
    const theme = useSelector(state => state.theme)
    return (
      <Container fluid className="App">
      
      <LoopingBanner />
          <HomeParallax />



      <CardSliderContainer/>
      
      
            <ContactFormContainer />
         
         
 
{/* 
        <Row className="mb-4">
          <Col className="position-absolute d-flex justify-content-between align-items-center" style={{ height: '264px',  zIndex: '10000000000000'}}>
            <div className="d-flex justify-content-between w-100 align-items-center" style={{ height: '264px' }}>
              <button className="p-4 clear-button" disabled={slider.property.index === 0} onClick={() => dispatch(slideLeft(slider))}><FontAwesomeIcon size="lg" icon={faChevronLeft}/></button>
              <button className="p-4 clear-button" disabled={slider.property.index === slider.properties.length - 1} onClick={() => dispatch(slideRight(slider))}><FontAwesomeIcon size="lg" icon={faChevronRight}/></button>
            </div>
          </Col>
          <Col className="position-absolute">
            <CardSlider products={firstSix} />
          </Col>
        </Row> */}


       
      </Container>
    )
}

export default Home