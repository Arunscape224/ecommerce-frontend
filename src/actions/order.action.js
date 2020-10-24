import axios from 'axios'
import { CREATE_ORDER, CREATE_ORDER_SUCCESS, LIST_ORDERS, GET_STATUS_VALUES, UPDATE_STATUS_VALUE } from '../action_types/order.types'
import { API } from '../config'

export const createOrder = (orderData, userId, token) => {
    return async (dispatch) => {
        await dispatch({
            type: CREATE_ORDER,
            order: JSON.stringify({ order: orderData })       
        })
        // again, axios is giving me issues with this one...i'll come back to this.
        // also, CREATE_ORDER is not returning a correct response...fix that as well 
        return await fetch(`${API}/order/create/${userId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ order: orderData })
        })
        // const headers = { Authorization: `Bearer ${token}` };
        // return await axios({
        //     method: 'post',
        //     url: `http://localhost:8000/api/order/create/${userId}`,
        //     headers,
        //     data: JSON.stringify({ order: orderData })
        //   })

        .then(response => {
                console.log(`THIS IS WORKING OMG: ${response.json()}`)
                dispatch({
                    type: CREATE_ORDER_SUCCESS    
                })
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const listOrders = (userId, token) => {
    return async dispatch => {
        await dispatch({
            type: LIST_ORDERS,
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'get',
            url: `${API}/order/list/${userId}`,
            headers
            })
            .then(res => {
                return res.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getStatusValues = (userId, token) => {
    return async dispatch => {
        await dispatch({
            type: GET_STATUS_VALUES,
        })
        const headers = { Authorization: `Bearer ${token}` };
        return await axios({
            method: 'get',
            url: `${API}/order/status-values/${userId}`,
            headers
            })
            .then(res => {
                return res.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const updateStatusValue = (userId, token, orderId, status) => {
    return async (dispatch) => {
        await dispatch({
            type: UPDATE_STATUS_VALUE,
        })
        return await fetch(`${API}/order/${orderId}/status/${userId}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ orderId, status })
        })
        .then(res => {
                return res.json()
        })
        .catch(err => {
            console.log(err);
        });
    }
}