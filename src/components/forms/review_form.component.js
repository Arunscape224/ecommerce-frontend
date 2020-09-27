import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
// import {useDropzone} from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { createReview } from '../../actions/review.action'
import Rating from 'react-rating'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewForm = ({ product, fetchReviews }) => {
    
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const jwt = JSON.parse(localStorage.getItem('jwt'))

    const [values, setValues] = useState({
        productId: '',
        userId: '',
        userName: '',
        userTrade: '',
        photo: '',
        subject: '',
        textBody: '',
        rating: 4,
        formData: new FormData()
    })


   
    const { subject, textBody, rating, formData } = values

    const handleChange = name => event => {
        const value = event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }





    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values})
        
        dispatch(createReview(formData, jwt.user._id, jwt.token)).then(() => {
            setValues({ 
                ...values,
                productId: '',
                userId: '',
                userName: '',
                userTrade: '',
                photo: '',
                subject: '',
                textBody: '',
                rating: 4,
                formData: new FormData()
             })
        }).then(() => fetchReviews()).then(() => {
            setValues({ ...values, 
                productId: product._id, 
                userName: jwt.user.firstName + ' ' + jwt.user.lastName,
                userId: jwt.user._id,
                userTrade: jwt.user.trade ? jwt.user.trade : 'Homeowner',
                photo: '',
                subject: '',
                textBody: '',
                rating: 4,
                })
                
            formData.set('productId', product._id)
            formData.set('userName', jwt.user.firstName + ' ' + jwt.user.lastName)
            formData.set('userId', jwt.user._id)
            formData.set('userTrade', jwt.user.trade ? jwt.user.trade : 'Homeowner')
        })

        console.log(values)
    }

    useEffect(() => {
       
            setValues({ ...values, 
                productId: product._id, 
                userName: jwt.user.firstName + ' ' + jwt.user.lastName,
                userId: jwt.user._id,
                userTrade: jwt.user.trade ? jwt.user.trade : 'Homeowner'
                 })
                
            formData.set('productId', product._id)
            formData.set('userName', jwt.user.firstName + ' ' + jwt.user.lastName)
            formData.set('userId', jwt.user._id)
            formData.set('userTrade', jwt.user.trade ? jwt.user.trade : 'Homeowner')
                 
    }, [product])
    


    return (
        <Container>
            <h2 className="text-center mt-3">We Love Feedback!</h2>
            <Form onSubmit={handleSubmit} className="p-4">
                    

                    <div className="col-12">
                    <FormGroup>
                        <Rating
                            emptySymbol={<FontAwesomeIcon icon={faStarO} />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} />}
                            fractions={2}
                            initialRating={rating}
                            onChange={(rate) => {
                                setValues({ ...values, rating: rate })
                                formData.set('rating', rate)
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                            <Input type="text"
                                   onChange={handleChange('subject')}
                                   style={{
                                       border: `2px solid ${theme.text_color}`
                                   }} 
                                   name="subject"
                                   value={subject} 
                                   id="subject" 
                                   placeholder="Subject"
                                   />
                        </FormGroup>
                    </div>

                    <div className="col-12">
                    <FormGroup>
                            <Input type="textarea"
                                   onChange={handleChange('textBody')}
                                   style={{
                                       border: `2px solid ${theme.text_color}`
                                   }} 
                                   name="textBody"
                                   value={textBody} 
                                   id="textBody" 
                                   placeholder="Review"
                                   />
                        </FormGroup>
                    </div>
                    




                

                  

                <Row>
                    <Col className="d-flex mb-3 justify-content-center"> 
                        <Button style={{ backgroundColor: theme.text_color }}>Submit</Button>
                    </Col>
                </Row>
            
            </Form>
        </Container>
    )
}

export default ReviewForm


