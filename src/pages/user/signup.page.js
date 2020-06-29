import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import  SignupForm from '../../components/forms/signup_form.component'

const Signup = () => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <Row style={{borderLeft: `2px solid ${theme.text_color}` , borderRight: `2px solid ${theme.text_color}`, borderTop: `2px solid ${theme.text_color}`}}>
                <Col>
                    <h1 >Apply For Our Trade Program!</h1>
                </Col>
            </Row>
            <Row style={{border: `2px solid ${theme.text_color}`}}>

                <Col xs="8">
                </Col>

                <Col xs ="4" 
                     style={{ borderLeft: `2px solid ${theme.text_color}` }}>
                         <h2 className="mb-4 mt-4 text-center">Signup</h2>
                         <p className="text-center mb-4 mb-4">Welcome to our signup form! Create an account with us to keep track of your orders, favorites and shipping!</p>
                    <SignupForm />
                </Col>
            </Row>

        </Container>
    )
}

export default Signup