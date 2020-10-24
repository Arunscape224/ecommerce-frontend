import axios from 'axios'
import { BUY, BUY_SUCCESS, BUY_ERR, PROCESS_PAYMENT, PROCESS_PAYMENT_SUCCESS, PROCESS_PAYMENT_ERR } from '../action_types/braintree.types'
import { API } from '../config'
export const getBraintreeToken = (userId, token) => {
    return async dispatch => {
        await dispatch({
            type: BUY,
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'get',
            url: `${API}/braintree/getToken/${userId}`,
            headers
            })
                .then(res => {
                    dispatch({
                        type: BUY_SUCCESS,
                        payload: res.data,
                       
                    })
                    return res.data
                })
                .catch(error => {
                    dispatch({
                        type: BUY_ERR,
                        payload: ''
                    })
                })
    }
}

export const processPayment = (userId, token, paymentData) => {
    return async dispatch => {
        await dispatch({
            type: PROCESS_PAYMENT,
        })
        // const headers = { Authorization: `Bearer ${token}` };
        // return await axios({
        //     method: 'post',
        //     url: `http://localhost:8000/api/braintree/payment/${userId}`,
        //     headers,
        //     data: JSON.stringify(paymentData)
        //     })
        return await fetch(`${API}/braintree/payment/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
     .then(res => {
         dispatch({
             type: PROCESS_PAYMENT_SUCCESS,
             payload: res.data
         })
         return res.json()
     })
    .catch(error => {
        dispatch({
            type: PROCESS_PAYMENT_ERR,
            payload: ''
        })
    })
    }
}