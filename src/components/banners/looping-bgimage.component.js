import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
const LoopingBanner = ({ theme }) => {
    return (
        <Container fluid className="d-flex align-items-center ">
            <div className="wrapper w-100 h-100 d-flex align-items-center">

            <div className="sliding-background position-absolute"/>
            <div className="h-100 d-flex justify-content-between"  style={{width: '100%'}}>
                <Container fluid>
                    <Row>
                    <Col sm="7" style={{border: `2px solid ${theme.text_color}`}} className="left-banner d-flex justify-content-center align-items-center">
                        <Card style={{opacity: '0.5', color: theme.text_color, backgroundColor: theme.background_color}} className="d-flex flex-column p-5 text-center"><h1>"We're Experts In Natural Stone"</h1><em className="mt-4">Nobody knows stone like Surface Group. Feel free to message us if you have any questions!</em></Card>
                    </Col>
                    <Col sm="5" id="right-banner" style={{ height: '320px' }}  className=" h-100">
                        
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </Container>
    )
}

export default LoopingBanner