import React from 'react'
import { FormGroup, Input } from 'reactstrap';
import { updateStatusValue } from '../../actions/order.action'
import { useDispatch } from 'react-redux'
import { isAuthenticated } from '../../helper_methods/index'
const ShowStatus = ({ order, statusValues, loadOrders }) => {
    const dispatch = useDispatch()
    const userId = isAuthenticated().user._id
    const token = isAuthenticated().token
    const handleStatusChange = (e, orderId) => {
        // console.log(userId)
        dispatch(updateStatusValue(userId, token, orderId, e.target.value)).then((data) => {
            loadOrders()
        })
    }

    return (
        <FormGroup>
                <Input onChange={(e) => handleStatusChange(e, order._id)} type="select" name="select" id="exampleSelect" className="form-control">
                    { statusValues.map((status, i) => <option key={i} value={status}>{status}</option>) }
                </Input>
        </FormGroup>
    )
}

export default ShowStatus