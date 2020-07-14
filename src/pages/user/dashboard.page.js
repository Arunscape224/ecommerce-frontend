import React from 'react'
import { isAuthenticated } from '../../helper_methods/index'
const Dashboard = () => {

    const { user: { firstName, lastName } } = isAuthenticated()


    return (
    <div><h1>{firstName + ' ' + lastName}</h1></div>
    )
}

export default Dashboard