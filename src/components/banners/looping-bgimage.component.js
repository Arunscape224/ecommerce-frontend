import React from 'react'
import { Container, Row, Col, } from 'reactstrap'
const LoopingBanner = () => {
    return (
        <Container fluid style={{ height: '320px' }} className="d-flex align-items-center ">
            <div className="wrapper w-100 h-100 d-flex align-items-center">

            <div className="sliding-background position-absolute"/>
            <div className="h-100 d-flex justify-content-between p-4"  style={{width: '100%'}}>
                <Col xs={9} className="border h-100">
                    
                </Col>
                <Col xs={3} className="border h-100">
                    
                </Col>
            </div>
        </div>
        </Container>
    )
}

export default LoopingBanner