import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../helper_methods/index'

const AdminRoute = ({ component: Component, ...rest }) => {
    let history = useHistory()
    return (
        <Route {...rest} render={props => isAuthenticated() && isAuthenticated().user.admin === true ? (<Component {...props}/>) : history.push('/')}/>
    )
}

export default AdminRoute
