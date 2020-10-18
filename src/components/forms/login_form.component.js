import React, { useState } from 'react'
import { Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../actions/user.action'
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    let history = useHistory()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const { email, password } = values

    const handleChange = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(loginUser(values)).then((res) => {
            res.data.user.admin ? history.push('/admin/dashboard') : history.push('/user/dashboard')
        }).catch((err) => alert("invalid login"))
    }

    return (
        <Form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column" 
                             style={{ marginTop: '1rem' }}>

                        {/* Email */}
                        <div className="col-12"
                             style={{ marginBottom: '1rem' }}>
                            <FormGroup>
                                <Input  type="email"
                                        onChange={handleChange('email')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="email" 
                                        value={email}
                                        id="email" 
                                        placeholder="Email"/>
                            </FormGroup>
                        </div>
                        {/* Password */}
                        <div className="col-12"
                             style={{ marginBottom: '1rem' }}>
                            <FormGroup>
                                <Input  type="password"
                                        onChange={handleChange('password')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="password" 
                                        value={password}
                                        id="password" 
                                        placeholder="Password"/>
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
    )
}

export default LoginForm