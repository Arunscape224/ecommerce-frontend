// import axios from 'axios'
import { CREATE_ORDER, CREATE_ORDER_SUCCESS } from '../action_types/order.types'

export const createOrder = (orderData, userId, token) => {
    return async (dispatch) => {
        await dispatch({
            type: CREATE_ORDER,
            order: JSON.stringify({ order: orderData })       
        })
        // again, axios is giving me issues with this one...i'll come back to this.
        // also, CREATE_ORDER is not returning a correct response...fix that as well 
        return await fetch(`http://localhost:8000/api/order/create/${userId}`, {
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