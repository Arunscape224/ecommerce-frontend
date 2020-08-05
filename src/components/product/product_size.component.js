import React from 'react'
import { Row } from 'reactstrap'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductSize = ({ size, thickness }) => {
    if (size) {
    return (
    <Row className="pl-3 pr-3 mt-0">
        <div><FontAwesomeIcon className="mr-2" icon={faRulerCombined}/>{size} x <span className="fraction">{thickness}</span></div>
    </Row>
    )
    } else {
        return (<div></div>)
    }
}

export default ProductSize