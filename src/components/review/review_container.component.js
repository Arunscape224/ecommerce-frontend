import React from 'react'
import { Container, UncontrolledCollapse } from 'reactstrap'
import ReviewCard from './review_card.component'

const ReviewContainer = ({ reviews }) => {
    if (reviews.length) {
        return (
            <Container>
                
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