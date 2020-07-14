import React from 'react'
import { isAuthenticated } from '../../helper_methods/index'

const AdminDashboard = () => {

    const { user: { firstName, lastName } } = isAuthenticated()


    return (
    <div>
        <h1>{firstName + ' ' + lastName}</h1>
        <p>Admin Dashboard</p>
    </div>
    )
}

export default AdminDashboard