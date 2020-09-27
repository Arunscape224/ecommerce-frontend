import React, { useState } from 'react'
import { Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

const ContactForm = () => {
    
    const theme = useSelector(state => state.theme)
    // const dispatch = useDispatch()
    // let history = useHistory()

    const [values, setValues] = useState({
        contactEmail: '',
        subject: '',
        message: ''
    })

    const { contactEmail, subject, message } = values

    const handleChange = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value})
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     dispatch(loginUser(values)).then((res) => {
    //         res.data.user.admin ? history.push('/admin/dashboard') : history.push('/user/dashboard')
    //     }).catch((err) => alert("invalid login"))
    // }

    return (
        <Form
        className="w-100"
        //  onSubmit={handleSubmit}
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
                            <Button style={{ backgroundColor: theme.text_color }}>Submit</Button>
                         </FormGroup>
                         </Col>
                     </Row>
                     </div>
                
                </Form>
    )
}

export default ContactForm