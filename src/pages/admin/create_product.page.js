import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import  ProductForm from '../../components/forms/product_form.component'

const CreateProduct = () => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <Row style={{borderLeft: `2px solid ${theme.text_color}` , borderRight: `2px solid ${theme.text_color}`, borderTop: `2px solid ${theme.text_color}`}}>
                <Col>
                    <h1 >Create A New Product</h1>
                </Col>
            </Row>
            <Row style={{border: `2px solid ${theme.text_color}`}}>

                <Col xs="7">
                </Col>

                <Col xs ="5" 
                     style={{ borderLeft: `2px solid ${theme.text_color}` }}>
                         <h2 className="mb-4 mt-4 text-center">Create Product</h2>
                         <p className="text-center mb-4 mb-4">Please fill out the fields below and click submit in order to create a new product.</p>
                    <ProductForm />
                </Col>
            </Row>

        </Container>
    )
}

export default CreateProduct