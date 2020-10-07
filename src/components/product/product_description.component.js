import React from 'react'
import { Container, UncontrolledCollapse } from 'reactstrap'

const ProductDescription = ({ description, theme }) => {
    if (description) {
        return (
            <Container fluid>
                <UncontrolledCollapse toggler="#toggler2">
                    <div className="p-4">
                        <em style={{ color: theme.text_color }}>"{description}"</em>
                    </div>                
                </UncontrolledCollapse>
            </Container>
        )
    }

    
        return (
            <em className="text-center mt-2" style={{ color: theme.text_color }}>please add a brief product description</em>
        )
}

export default ProductDescription