import React from 'react'
import { Row, Col } from 'reactstrap'

const OrderItem = ({ item, theme }) => (
    <Row className="m-3" style={{ border: `2px solid ${theme.text_color}` }}>
        <Col xs={12}>
            <Row>
                <Col xs={12}>
                 <span>Name: {item.name}</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
<span><strong className="text-success">${item.price}</strong> (x{item.count})</span>
                </Col>
            </Row>
            
        </Col>
    </Row>
)

export default OrderItem