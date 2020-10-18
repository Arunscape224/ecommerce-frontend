import React from 'react'
import { Container, UncontrolledCollapse } from 'reactstrap'
import ReviewCard from './review_card.component'

const ReviewContainer = ({ reviews, theme }) => {
    if (reviews.length) {
        return (
            <Container style={{backgroundColor: theme.background_color}}>
                
                <UncontrolledCollapse toggler="#toggler">
                {
                    reviews.map(review => <ReviewCard theme={theme} review={review}/>)
                }
                </UncontrolledCollapse>
            </Container>
        )
    }

    
        return (
            <em className="text-center mt-2"  style={{color: theme.text_color}}>no reviews yet!</em>
        )
}

export default ReviewContainer