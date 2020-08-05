import React from 'react'
import { Card, CardBody, CardText, CardHeader } from 'reactstrap'
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewCard = ({ review }) => {
    const { createdAt, rating, subject, textBody, userName, userTrade } = review
    return (
        <Card className="mt-4">
            
            <CardHeader>
                <div>
               
                    <h2>{subject}</h2>
                    <Rating
                            emptySymbol={<FontAwesomeIcon icon={faStarO} />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} />}
                            fractions={2}
                            initialRating={rating}
                            readonly
            />
            
                    
                   <div>
                       {createdAt}
                   </div>
                    
                </div>
            </CardHeader>
            <CardBody>
            
           
    <CardText><span style={{ fontSize: '1.3em' }}>"{textBody}"</span> - <em><strong>{userName} ({userTrade})</strong></em></CardText>
            </CardBody>
            
        </Card>
    )
}

export default ReviewCard