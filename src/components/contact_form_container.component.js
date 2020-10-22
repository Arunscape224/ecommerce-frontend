import React from 'react'
import { Row, Col, Jumbotron, Card } from 'reactstrap'
import { isAuthenticated } from '../helper_methods'
import ContactForm from './forms/contact_form.component'
import { useSelector } from 'react-redux'
const ContactFormContainer = () => {
    const theme = useSelector(state => state.theme)
 return (
                  <Row id='contact-form-container' className="justify-content-center align-items-center mt-5 border-top p-5" id="contact-form-container" style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), ${theme.background_color}), url("https://cdn.shopify.com/s/files/1/0265/0039/9213/files/calacatta-marble.jpg?v=1603025257")`}}>
                       
          <Col sm="6" className="justify-content-center align-items-center">
          
            <Card className="p-5 shadow-lg" style={{opacity: '0.9', backgroundColor: theme.background_color, border: `2px solid ${theme.text_color}`}}>
            <Jumbotron className="text-center" style={{backgroundColor: theme.background_color}}>
                <h1 style={{color: theme.text_color}}>Send Us A Message!</h1>
            </Jumbotron>
                <ContactForm />
            </Card>
            </Col>
        </Row>
 )

}

export default ContactFormContainer