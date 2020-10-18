import React from 'react'
import { Container, Row } from 'reactstrap'
import LoopingBanner from '../components/banners/looping-bgimage.component'
import LoopingBannerReverse from '../components/banners/looping-banner-reverse.component'
import HomeParallax from '../components/banners/home-parallax.component'
import ThreeValues from '../components/banners/three-values.component'
import ContactFormContainer from '../components/contact_form_container.component'
import CardSliderContainer from '../components/card_slider/card_slider_container.component'
import { useSelector } from 'react-redux'
const Home = () => {
    const theme = useSelector(state => state.theme)
    return (
      <Container fluid className="App">
      <HomeParallax />
      <ThreeValues theme={theme} />
   
      <LoopingBannerReverse theme={theme} />
      
          
      <div  className="text-center mt-5">
<h1 style={{ color: theme.text_color }}>Our Favorites</h1>
</div>
      <CardSliderContainer/>
      <LoopingBanner theme={theme} />

      
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