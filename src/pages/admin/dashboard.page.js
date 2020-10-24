import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../../helper_methods/index'
import OrdersContainer from '../../components/orders/orders-container.component'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { listOrders } from '../../actions/order.action'
import { useHistory } from 'react-router-dom'
import {getPurchaseHistory} from '../../actions/user.action'
// import {getPurchaseHistory} from '../../helper_methods/index'
import {  useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'reactstrap';


const AdminDashboard = () => {
    const dispatch = useDispatch()
    const { user: { firstName, lastName, _id }, token } = isAuthenticated()
    const history = useHistory()
    const theme = useSelector(state => state.theme)
    const [orders, setOrders] = useState([])
    const [purchaseHistory, setPurchaseHistory] = useState([])
    const loadOrders = () => {
        dispatch(listOrders(_id, token)).then((orders) => setOrders(orders))
    }

    useEffect(() => {
        loadOrders()
        dispatch(getPurchaseHistory(_id, token)).then(res => setPurchaseHistory(res))
    }, [])


    return (
    <Container>
        <Row>
            <Col xs={12} className="p-5 text-center">
                <h1>Welcome, {firstName + ' ' + lastName}!</h1>
                <em>Admin Dashboard</em>
            </Col>
        </Row>
   

      <Row>
      <Col>
                    <h3>There are {orders.length ? orders.length :  <Spinner style={{ color: theme.text_color, width: '2rem', height: '2rem' }} />} orders</h3>
                </Col>
      </Row>
       <Row>
           
           <Col xs={6}>
                <OrdersContainer orders={orders} loadOrders={loadOrders}/>
           </Col>
           <Col xs={6}>
                <Card>
                    <CardBody>
                        <Container>
                        <Row>
                            <Col xs={12}><h2 className="cursor-pointer" onClick={() => history.push('/admin/create/product')}>Create A Product</h2></Col>
                            <Col xs={12}><h2 className="cursor-pointer" onClick={() => history.push('/admin/create/category')}>Create A Category</h2></Col>
                            <Col xs={12}><h2 className="cursor-pointer" onClick={() => history.push('/admin/manage/products')}>Manage Products</h2></Col>
                        </Row>
                        </Container>
                    </CardBody>
                </Card>
           </Col>
       </Row>
        
       


    </Container>
    )
}

export default AdminDashboard