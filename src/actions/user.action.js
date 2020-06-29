import { CREATE_USER } from '../action_types/user.types'
import axios from 'axios'

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
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
    }
}
