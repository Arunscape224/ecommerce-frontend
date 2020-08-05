import React from 'react'
import { Row } from 'reactstrap'
import { faSprayCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductFinish = ({ finish }) => {
    if (finish) {
    return (<Row className="pl-3 pr-3 mt-0"><FontAwesomeIcon className="mr-2" icon={faSprayCan}/> <div>{finish} finish</div></Row>)
    } else {
        return (<div></div>)
    }
}

export default ProductFinish