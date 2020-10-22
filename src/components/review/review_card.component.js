import React from 'react'
import { Card, CardBody, CardText, CardHeader } from 'reactstrap'
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'moment';

const ReviewCard = ({ review, theme }) => {
    const { createdAt, rating, subject, textBody, userName, userTrade } = review
    return (
        <Card className="m-5" style={{backgroundColor: theme.background_color, color: theme.text_color, border: `2px solid ${theme.text_color}`, boxShadow: `5px 10px 18px ${theme.box_shadow}`}}>
            
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
                       {Moment(createdAt).format('MM/DD/YYYY')}
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