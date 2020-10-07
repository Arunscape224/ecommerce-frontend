import React from 'react'
import { Row, Col, Jumbotron } from 'reactstrap'
import { isAuthenticated } from '../helper_methods'
import ContactForm from './forms/contact_form.component'
import { useSelector } from 'react-redux'
const ContactFormContainer = () => {
    const theme = useSelector(state => state.theme)
 return (
                  <Row className="justify-content-center align-items-center p-4">
                       
          <Col sm="8" className="justify-content-center align-items-center">
          <Jumbotron className="text-center" style={{backgroundColor: theme.background_color}}>
                <h1 style={{color: theme.text_color}}>Send Us A Message!</h1>
            </Jumbotron>
            <ContactForm />
            </Col>
        </Row>
 )

}

export default ContactFormContainer