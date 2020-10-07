import React from 'react'
import { Row, Table } from 'reactstrap'
import { faCubes, faCube, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeConsumer } from 'styled-components'
const ProductInfo = ({ sfPerPiece, sfPerBox, pcPerBox, theme }) => {
    if (sfPerBox && sfPerPiece && pcPerBox) {
        return (
            <Row className="p-3">
        <Table responsive bordered>
            <thead  style={{backgroundColor: ThemeConsumer.background_color}}>
                <tr>
                    
                    <th><div style={{color: theme.text_color}} className="text-center d-flex flex-column align-items-center"><FontAwesomeIcon icon={faSquare} /></div></th>
                    <th><div style={{color: theme.text_color}} className="text-center d-flex flex-column align-items-center"><FontAwesomeIcon icon={faCube} /></div></th>
                    <th><div style={{color: theme.text_color}} className="text-center d-flex flex-column align-items-center"><FontAwesomeIcon icon={faCubes} /></div></th>
                </tr>
            </thead>

            <tbody>
            <tr>
         <td className="text-center" style={{color: theme.text_color}}>{sfPerPiece} <small>sf / pc</small></td>
         <td className="text-center" style={{color: theme.text_color}}>{sfPerBox} <small>sf / box</small></td>
          <td className="text-center" style={{color: theme.text_color}}>{pcPerBox} <small className="fraction">pc / box</small></td>

        </tr>
            </tbody>
        </Table>
    </Row>
        )
    } else {
        return (
            <div></div>
        )
    }
}
export default ProductInfo