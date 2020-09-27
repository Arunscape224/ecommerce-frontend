import React from 'react'
import { Container, UncontrolledCollapse } from 'reactstrap'

const ProductDescription = ({ description }) => {
    if (description) {
        return (
            <Container fluid>
                <UncontrolledCollapse toggler="#toggler2">
                    <div className="p-4">
                        <em>"{description}"</em>
                    </div>                
                </UncontrolledCollapse>
            </Container>
        )
    }

    
        return (
            <em className="text-center mt-2">please add a brief product description</em>
        )
}

export default ProductDescription