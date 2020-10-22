import React, { useState } from 'react'
import { Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com'

import { Alert } from 'reactstrap';

const ContactForm = () => {
    
    const theme = useSelector(state => state.theme)
    // const dispatch = useDispatch()
    // let history = useHistory()

    const [values, setValues] = useState({
        contactEmail: '',
        subject: '',
        message: ''
    })

    const [visible, setVisible] = useState(false);

    const onDismiss = () => setVisible(false);

    const { contactEmail, subject, message } = values

    const handleChange = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value})
    }

    


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(process.env.REACT_APP_USER_ID)
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_USER_ID).then((result) => {
            console.log(result.text)
            setValues({
                contactEmail: '',
                subject: '',
                message: ''
            })
            setVisible(true)
        }, (error) => { 
            console.log(error.text)
         } )
        

        // 
    }

    return (
        <div>
        <Form
        className="w-100"
         onSubmit={handleSubmit}
         >
                        <div className="d-flex flex-column w-100" 
                             style={{ marginTop: '1rem' }}>

                        {/* Email */}
                        <div className="col-12"
                             style={{ marginBottom: '1rem' }}>
                            <FormGroup>
                                <Input  type="email"
                                        onChange={handleChange('contactEmail')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="contactEmail" 
                                        value={contactEmail}
                                        id="contactEmail" 
                                        placeholder="Email"/>
                            </FormGroup>
                        </div>
                        {/* Subject */}
                        <div className="col-12"
                             style={{ marginBottom: '1rem' }}>
                            <FormGroup>
                                <Input  type="text"
                                        onChange={handleChange('subject')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="subject" 
                                        value={subject}
                                        id="subject" 
                                        placeholder="Subject"/>
                            </FormGroup>
                        </div>
                        {/* Subject */}
                        <div className="col-12"
                             style={{ marginBottom: '1rem' }}>
                            <FormGroup>
                                <Input  type="textarea"
                                        onChange={handleChange('message')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="message" 
                                        value={message}
                                        id="message" 
                                        placeholder="Message"/>
                            </FormGroup>
                        </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center"
                             style={{ marginBottom: '2rem' }}>
                     <Row>
                         <Col>
                         <FormGroup>
                            <Button style={{ backgroundColor: theme.button_color }}>Submit</Button>
                         </FormGroup>
                         </Col>
                     </Row>
                     </div>
                     
                
                </Form>

                <Alert color="success" isOpen={visible} toggle={onDismiss}>
                    Thank you for your submission! We'll contact you as soon as possible.
                </Alert>
                </div>
    )
}

export default ContactForm