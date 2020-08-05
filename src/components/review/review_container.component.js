import React from 'react'
import { Container, UncontrolledCollapse } from 'reactstrap'
import { useSelector } from 'react-redux'
import ReviewCard from './review_card.component'

const ReviewContainer = ({ reviews }) => {
    const theme = useSelector(state => state.theme)
    if (reviews.length) {
        return (
            <Container fluid>
                
                <UncontrolledCollapse toggler="#toggler" className="p2">
                {
                    reviews.map(review => <ReviewCard review={review}/>)
                }
                </UncontrolledCollapse>
            </Container>
        )
    }

    
        return (
            <em className="text-center mt-2">no reviews yet!</em>
        )
}

export default ReviewContainer