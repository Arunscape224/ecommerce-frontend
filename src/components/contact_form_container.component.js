import React from 'react'
import { Row, Col, Jumbotron } from 'reactstrap'
import ContactForm from './forms/contact_form.component'

const ContactFormContainer = () => (

 
                  <Row className="mt-4 justify-content-center align-items-center">
                       
          <Col sm="8" className="justify-content-center align-items-center">
          <Jumbotron className="text-center">
                <h1>Send Us A Message!</h1>
            </Jumbotron>
            <ContactForm />
            </Col>
        </Row>

)

export default ContactFormContainer