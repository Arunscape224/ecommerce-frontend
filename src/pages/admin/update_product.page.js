import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import  UpdateProductForm from '../../components/forms/product_update_form.component'

const UpdateProduct = (props) => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <div style={{borderLeft: `2px solid ${theme.text_color}` , borderRight: `2px solid ${theme.text_color}`, borderTop: `2px solid ${theme.text_color}`}}>
                <Col>
                    <h1>Update Existing Product</h1>
                </Col>
            </div>
            <Row style={{border: `2px solid ${theme.text_color}`}}>

                <Col xs="7">
                </Col>

                <Col xs ="5" 
                     style={{ borderLeft: `2px solid ${theme.text_color}` }}>
                         <h2 className="mb-4 mt-4 text-center">Update Product Form</h2>
                         <p className="text-center mb-4 mb-4">Please change the fields below and click submit in order to update an existing product.</p>
                    <UpdateProductForm props={props} />
                </Col>
            </Row>

        </Container>
    )
}

export default UpdateProduct