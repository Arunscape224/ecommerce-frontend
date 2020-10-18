import React, { useState } from 'react'
import { Row, Col, Collapse, Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import OrderItem from './order-item.component'
import moment from 'moment'
import ShowStatus from './showStatus.component'

const Order = ({ order, statusValues, loadOrders }) => {
    const theme = useSelector(state => state.theme)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  
    return (
    <Row onClick={() => console.log(order)}>
        <Col xs={12} className="p-2">

            {/* Order Status */}
            <Row className="m-3 p-3 shadow-lg" >
                <Col xs={12}>
                    {/* Order Status */}
                    <Row>
                        <Col xs={12}>
                            <h3>Order Status: <u>{order.status}</u></h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <span>Ordered On: {moment(order.createdAt).fromNow()}</span>
                        </Col>
                    </Row>   


                     {/* User ID (for now) / Name */}
                    <Row>
                        <Col xs={12}>
                            <span>Customer: <em>{order.user.firstName + ' ' + order.user.lastName}</em></span>
                        </Col>
                    </Row>

                    {/* Amount Total */}
                    <Row>
                        <Col xs={12}>
                            <span>Total: <strong className="text-success">${order.amount}</strong></span>
                        </Col>
                    </Row>    

                    {/* Delivery Address */}
                    <Row>
                        <Col xs={12}>
                            <span>Address: {order.address ? order.address : <span className="text-danger">contact customer</span>}</span>
                        </Col>
                    </Row>   

                    <Row>
                        <Col xs={12} className="pt-4">
                            <ShowStatus loadOrders={loadOrders} order={order} statusValues={statusValues} />
                        </Col>
                    </Row>   


                     {/* 
                        Products Container
                            - Collapsable
                      */}
                    <Row>
                        <Col xs={12}>
                    <Button color="primary" onClick={toggle} className="mt-2 mb-2">Show Products <em>({order.products.length})</em></Button>
                            <Collapse isOpen={isOpen}>
                                { order.products.map((product) => <OrderItem  theme={theme} item={product} />) }
                            </Collapse>
                        </Col>
                    </Row>                     
                </Col>
            </Row>

        
          

        </Col>  
    </Row>
    )
}

export default Order