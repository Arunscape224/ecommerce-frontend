import React, { useState, useEffect } from 'react'
import { getReviewAvg } from '../../helper_methods/index'
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AvgRating = ({ reviews, theme }) => {
    const [ratings, setRatings] = useState([])
    const [avg, setAvg] = useState(0)
    useEffect(() => {
      
        if(reviews.length) {
            if(reviews.length != 1) {
                let result = reviews.map(a => a.rating);
                setRatings(result)
            }
            setAvg(reviews[0].rating)
        }

        if(ratings.length) {
            setAvg(getReviewAvg(ratings))
        }
          
       
    //    alert(sum)
    }, [reviews.length, ratings.length])

    return (
        <>
             <Rating
                            emptySymbol={<FontAwesomeIcon style={{ color: theme.text_color }} icon={faStarO} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: theme.text_color }} icon={faStar} />}
                            initialRating={avg}
                            readonly
            /> 

            <em className="ml-2">({avg})</em>
        </>
    )
}

export default AvgRating