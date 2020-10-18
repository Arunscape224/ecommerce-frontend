import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { useSelector } from 'react-redux'
import  SignupForm from '../../components/forms/signup_form.component'

const Signup = () => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <Row className="text-center p-5">
                <Col>
                    <h1 >Apply For Our Trade Program!</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">

               
                <Col xs ="8" >
                <Card className="p-5">
                         <h2 className="mb-4 mt-4 text-center">Signup</h2>
                         <p className="text-center mb-4 mb-4">Welcome to our signup form! Create an account with us to keep track of your orders, favorites and shipping!</p>
                    <SignupForm />
                    </Card>
                </Col>
                

                
            </Row>

        </Container>
    )
}

export default Signup