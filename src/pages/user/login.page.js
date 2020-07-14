import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import  LoginForm from '../../components/forms/login_form.component'
import {logoutUser} from '../../actions/user.action'
import {useHistory} from 'react-router-dom'
const Login = () => {
    
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    let history = useHistory();

   
    return (
        <Container fluid>
            <Row style={{borderLeft: `2px solid ${theme.text_color}` , borderRight: `2px solid ${theme.text_color}`, borderTop: `2px solid ${theme.text_color}`}}>
                <Col>
                    <h1>Login To Your Profile</h1>
                </Col>
            </Row>
            <Row style={{border: `2px solid ${theme.text_color}`}}>

                <Col xs="7">
                </Col>

                <Col xs ="5" 
                     style={{ borderLeft: `2px solid ${theme.text_color}` }}>
                         <h2 onClick={() => dispatch(logoutUser()).then(() => history.push('/'))} className="mb-4 mt-4 text-center">We Missed You!</h2>
                         <p className="text-center mb-4 mb-4">Enter your email and password to get logged in!</p>
                    <LoginForm />
                </Col>
            </Row>

        </Container>
    )
}

export default Login