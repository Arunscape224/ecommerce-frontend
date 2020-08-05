import React from 'react'
import { Container, UncontrolledCollapse, Card } from 'reactstrap'
import { useSelector } from 'react-redux'

const ProductDescription = ({ description }) => {
    const theme = useSelector(state => state.theme)
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