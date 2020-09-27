import React from 'react'
import { Row } from 'reactstrap'


const ProductFinish = ({ finish }) => {
    if (finish) {
    return (
    <Row className="d-flex align-items-center pl-3 pr-3 mt-0"><strong>finish:</strong> <div className="ml-2">{finish}</div></Row>
    )
    } else {
        return (<div></div>)
    }
}

export default ProductFinish