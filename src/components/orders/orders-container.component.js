import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../../helper_methods/index'
import { useSelector, useDispatch } from 'react-redux'
import { listOrders, getStatusValues } from '../../actions/order.action'
import Order from './order.component'

const OrdersContainer = ({ orders, loadOrders }) => {
    const [statusValues, setstatusValues] = useState([])
    const dispatch = useDispatch()
    const { user, token } = isAuthenticated()
    const theme = useSelector(state => state.theme)

    useEffect(() => {
        dispatch(getStatusValues(user._id, token)).then((statValues) => setstatusValues(statValues))
    }, [])

    return (
        <div>
                <div style={{ border: `2px solid ${theme.text_color}` }}>
                    { orders.map((order) => <Order loadOrders={loadOrders} order={order} statusValues={statusValues}/>) }
                </div>
        </div>
    )
}

export default OrdersContainer