import React from 'react'
import { Row } from 'reactstrap'

const ProductColor = ({ color }) => {
    if (color) {
    return (
        <Row className="d-flex align-items-center pl-3 pr-3 mt-0"><strong>color:</strong> <div className="ml-2">{color}</div></Row>
        )
    } else {
        return (<div></div>)
    }
}

export default ProductColor