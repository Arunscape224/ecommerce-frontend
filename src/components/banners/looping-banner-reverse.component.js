
import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
const LoopingBannerReverse = ({ theme }) => {
    return (

        <Container fluid className="d-flex align-items-center ">
        <div className="wrapper w-100 h-100 d-flex align-items-center">

        <div className="sliding-background-reverse position-absolute"/>
        <div className="h-100 d-flex justify-content-between"  style={{width: '100%'}}>
            <Container fluid>
                <Row>
                <Col sm="5" id="left-banner-reverse" style={{ height: '320px' }} className="border h-100">
                    
                </Col>
                <Col sm="7" style={{border: `2px solid ${theme.text_color}`}} className="left-banner d-flex justify-content-center align-items-center">
                    <Card style={{opacity: '0.5', color: theme.text_color, backgroundColor: theme.background_color}} className="d-flex flex-column p-5 text-center"><h1>"Design Is Key"</h1><em className="mt-4">Our in house design team is always willing to go the extra mile to ensure our customers are happy!</em></Card>
                </Col>
                
                </Row>
            </Container>
        </div>
    </div>
    </Container>
        // <Container fluid style={{ height: '320px' }} className="d-flex align-items-center">
        //     <div className="wrapper w-100 h-100 d-flex align-items-center">

        //     <div className="sliding-background-reverse position-absolute"/>
        //     <div className="h-100 d-flex justify-content-between"  style={{width: '100%'}}>
        //         <Col sm="5" id="left-banner-reverse" className="border h-100">
                    
        //         </Col>
        //         <Col sm="7" className="left-banner border d-flex justify-content-center align-items-center h-100">
        //                 <Card style={{opacity: '0.5'}} className="d-flex flex-column p-5 text-center"><h1>"Design Is Key"</h1><em className="mt-4">Our in house design team is always willing to go the extra mile to ensure our customers are happy!</em></Card>
        //             </Col>
        //     </div>
        // </div>
        // </Container>
    )
}

export default LoopingBannerReverse