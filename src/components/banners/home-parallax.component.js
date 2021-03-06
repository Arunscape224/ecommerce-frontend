import React from 'react'
import { Parallax } from "react-parallax";
import { Row, Col } from 'reactstrap'

const HomeParallax = () => {
    const image1 = "https://cdn.shopify.com/s/files/1/0265/0039/9213/files/about-banner2.jpg?v=1577971013"

    return (
        <Row>
        <Col className="p-0">
        <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
</div>
    </Parallax>
 </Col>
 </Row>
    )
}

export default HomeParallax