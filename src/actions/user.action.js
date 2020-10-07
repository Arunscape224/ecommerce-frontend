import { CREATE_USER, LOGIN_USER, LOGIN_USER_SUCCESS, CREATE_USER_SUCCESS, LOGOUT_USER, UPDATE_USER, UPDATE_LS_USER, GET_PURCHASE_HISTORY, GET_PURCHASE_HISTORY_SUCCESS } from '../action_types/user.types'
import axios from 'axios'
import { authenticate, signout } from '../helper_methods/index'


export const createUser = (user) => {
    return async (dispatch) => {
        console.log(user)
        await dispatch({
            type: CREATE_USER,
            user: user        
        })
        return await axios({
            method: 'post',
            url: 'http://localhost:8000/api/signup',
            data: user
          })
        .then(response => {
                console.log(response.data)
                dispatch({
                    type: CREATE_USER_SUCCESS,
                    user: response.data.user        
                })
            
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const loginUser = (user) => {
    return async (dispatch) => {
        
        await dispatch({
            type: LOGIN_USER,
            user        
        })
        return await axios({
            method: 'post',
            url: 'http://localhost:8000/api/login',
            data: user
          })
        .then(response => {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                user: response.data.user
            })
            authenticate(response.data)
            return response
        })
        .catch(err => {
            console.log(err);
        });
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        
        await dispatch({
            type: LOGOUT_USER
        })

        return await signout()
        
    }
}


export const getPurchaseHistory = (userId, token) => {
    return async dispatch => {
        dispatch({
            type: GET_PURCHASE_HISTORY,
        })
        return fetch(`http://localhost:8000/api/orders/by/user/${userId}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`
            } 
        })
        .then(response => {
            dispatch({
                type: GET_PURCHASE_HISTORY_SUCCESS,
            })
            return response.json()
        })
        .catch(err => console.log(err))
}
}

// Still Being Worked On
export const updateUser = (userId, token, updatedUser, next) => {
    return async (dispatch) => {
        await dispatch({
            type: UPDATE_USER,
        })
        return await fetch(`http://localhost:8000/api/user/${userId}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => {
            dispatch({
                type: UPDATE_LS_USER,
                user: res.json()
            })
            if(typeof window !== 'undefined') {
                if(localStorage.getItem('jwt')) {
                    let auth = JSON.parse(localStorage.getItem('jwt'))
                    auth.user = updateUser
                    localStorage.setItem('jwt', JSON.stringify(auth))
                    next()
                }
            } 
                return res.json()
        })
        .catch(err => {
            console.log(err);
        });
    }
}
