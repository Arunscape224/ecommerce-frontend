import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import  CategoryForm from '../../components/forms/category_form.component'

const CreateCategory = () => {
    
    const theme = useSelector(state => state.theme)
     
   
    return (
        <Container fluid>
            <Row style={{borderLeft: `2px solid ${theme.text_color}` , borderRight: `2px solid ${theme.text_color}`, borderTop: `2px solid ${theme.text_color}`}}>
                <Col>
                    <h1 >Create A New Category</h1>
                </Col>
            </Row>
            <Row style={{border: `2px solid ${theme.text_color}`}}>

                <Col xs="7">
                </Col>

                <Col xs ="5" 
                     style={{ borderLeft: `2px solid ${theme.text_color}` }}>
                         <h2 className="mb-4 mt-4 text-center">Fill Out Form below</h2>
                         <p className="text-center mb-4 mb-4">Please ensure all fields are filled in before you click submit!</p>
                    <CategoryForm />
                </Col>
            </Row>

        </Container>
    )
}

export default CreateCategory