import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../helper_methods/index'

const PrivateRoute = ({component: Component, ...rest}) => {
    let history = useHistory()
    return (
    <Route {...rest} render={props => isAuthenticated() ? (<Component {...props}/>) : history.push('/login')}/>
    )
}

export default PrivateRoute
