import React from 'react'
import { Row } from 'reactstrap'

const ProductSize = ({ size, thickness, theme }) => {
    if (size) {
    return (
    <Row className="pl-3 pr-3 mt-0">
    <Row className="d-flex align-items-center pl-3 pr-3 mt-0" style={{color: theme.text_color}}><strong>size</strong><div>:</div> <div className="ml-2">{size} x</div> <span  className="ml-2 fraction">{thickness}</span></Row>
    </Row>
    )
    } else {
        return (<div></div>)
    }
}

export default ProductSize