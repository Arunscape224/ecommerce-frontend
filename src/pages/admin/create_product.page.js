import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { useSelector } from 'react-redux'
import  ProductForm from '../../components/forms/product_form.component'

const CreateProduct = () => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <Row >
                <Col className="text-center p-5">
                    <h1>Create A New Product</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">


                <Col xs ="6" className="p-5">
                         <Card className="shadow-lg p-5">
                         <h2 className="mb-4 mt-4 text-center">Read Instructions Carefully!</h2>
                         <p className="text-center mb-4 mb-4">Please fill out the fields below and click submit in order to create a new product.</p>
                    <ProductForm />
                         </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default CreateProduct