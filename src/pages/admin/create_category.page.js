import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import { useSelector } from 'react-redux'
import  CategoryForm from '../../components/forms/category_form.component'

const CreateCategory = () => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <Row className="p-5 text-center">
                <Col>
                    <h1 >Create A Category</h1>
                </Col>
            </Row>
            <Row className="p-5 d-flex justify-content-center">

      
                <Col xs ="6" >
                       <Card className="p-5 shadow-lg">
                       <h2 className="mb-4 mt-4 text-center">Fill Out Form below</h2>
                         <p className="text-center mb-4 mb-4">Please ensure all fields are filled in before you click submit!</p>
                    <CategoryForm />
                       </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default CreateCategory