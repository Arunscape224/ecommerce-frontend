import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Total from './total.component'
import { isAuthenticated, emptyCart } from '../../helper_methods/index'
import { 
    getBraintreeToken, 
    processPayment 
} from '../../actions/braintree.action'
import { createOrder } from '../../actions/order.action'
// import { processPayment } from '../../helper_methods/index'
import DropIn from 'braintree-web-drop-in-react'
import { Container, Col, Row, Button, Input, InputGroup } from 'reactstrap'

const CheckoutContainer = ({ products }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {}
    })

    const [address, setAddress] = useState('')

    const handleAddress = (event) => {
        setAddress(event.target.value)
    }

    const getTotal = () => {
        return products.reduce((currentVal, nextVal) => {
            return currentVal + nextVal.count * nextVal.price
        }, 0)
    }

    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token
    
    const getToken = (userId, token) => {
        dispatch(getBraintreeToken(userId, token)).then((data) => {
            if (data.error) {
                setData({...data, error: data.error})
            } else {
                setData({clientToken: data.clientToken})
            }
        })
       
    }

    const buy = () => {
        setData({ loading: true })

        let nonce
        let getNonce = data.instance
        .requestPaymentMethod()
        .then(data => {
            console.log(data)
            nonce = data.nonce
            const paymentData = {
                paymentMethodNonce: nonce,
                amount: getTotal(products)
            }

            /* 
            Can not get this shit to work with Axios..
            maybe something with the headers (content-type?..)
            opting out for fetch api for now... 
            */
            dispatch(processPayment(userId, token, paymentData)).then(res => {
                const orderData = {
                    products: products,
                    transaction_id: res.transaction.id,
                    amount: res.transaction.amount,
                    address: address
                }
                dispatch(createOrder(orderData, userId, token))
                setData({ ...data, success: res.success})
                emptyCart().then(() => {
                    setData({ loading: false })
                })
                
            })
        })
        .catch(error => {
            console.log('dropin error:', error)
            setData({...data, error: error.message})
        })
    }

    const showError = (err) => (
        <div className="alert alert-danger" style={{
            display: err ? "" : "none" 
        }}>
            {err}
        </div>
    )

    const showSuccess = (success) => (
        <div className="alert alert-success" style={{
            display: success ? "" : "none" 
        }}>
                Thank You! Your payment was successful.
        </div>
    )

    const showLoading = loading => loading && <h2>loading...</h2>
    

    useEffect(() => {
        getToken(userId, token)
    }, [])

    return (
        <Container onBlur={() => setData({ ...data, error: "" })}>
           
           <Row className="d-flex justify-content-center mt-4">
                <h1>Checkout</h1>
           </Row>
             { data.clientToken !== null && products.length > 0 ? 
                <Container className="text-center">
                    <Row className="d-flex justify-content-center">
                         <DropIn options={{ 
                             authorization: data.clientToken,
                             paypal: {
                                 flow: "vault"
                             }
                            }} 
                                 onInstance={instance => (data.instance = instance)} />
                                 
                    </Row>
                    <Row  className="d-flex justify-content-center">
                  
                    <Col xs={6}>
                    <Input type="textarea" onChange={handleAddress} className="form-control mb-3" value={address} placeholder="Enter your delivery address here" />
                    </Col>
                    
                    </Row>
                    <Row className="d-flex justify-content-center">
                        { showSuccess(data.success) }
                        { showError(data.error) }
                        { showLoading(data.loading)  }
                        
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button onClick={buy} color="success">Checkout</Button>
                    </Row>
                </Container>
             : null }

<Row className="d-flex justify-content-center mt-4">
                <Total getTotal={getTotal}/>
            </Row>
        </Container>
    )
}

export default CheckoutContainer