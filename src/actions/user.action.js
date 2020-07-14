import { CREATE_USER, LOGIN_USER, LOGIN_USER_SUCCESS, CREATE_USER_SUCCESS, LOGOUT_USER } from '../action_types/user.types'
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
