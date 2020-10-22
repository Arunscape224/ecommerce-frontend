import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { useSelector } from 'react-redux'
import  UpdateProductForm from '../../components/forms/product_update_form.component'

const UpdateProduct = (props) => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <div className="p-5 text-center">
                <Col>
                    <h1>Update Existing Product</h1>
                </Col>
            </div>
            <Row className="p-5 d-flex justify-content-center">


                <Col xs ="6">
                         <Card className="p-5 shadow-lg">
                         <h2 className="mb-4 mt-4 text-center">Update Product Form</h2>
                         <p className="text-center mb-4 mb-4">Please change the fields below and click submit in order to update an existing product.</p>
                    <UpdateProductForm props={props} />
                         </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default UpdateProduct