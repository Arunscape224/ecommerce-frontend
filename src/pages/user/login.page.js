import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
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
            <Row className="text-center p-4">
                <Col>
                    <h1 style={{color: theme.text_color}}>Login To Your Profile</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center p-5">

  
            <Card style={{backgroundColor: theme.background_color}}>
                <Col xs ="12">
                         <h2 style={{color: theme.text_color}} onClick={() => dispatch(logoutUser()).then(() => history.push('/'))} className="mb-4 mt-4 text-center">We Missed You!</h2>
                         <p className="text-center mb-4 mb-4" style={{color: theme.text_color}}>Enter your email and password to get logged in!</p>
                    
                        <LoginForm />
                    
                </Col>
                </Card>
            </Row>

        </Container>
    )
}

export default Login