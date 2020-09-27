import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, Modal, ModalHeader, Container } from 'reactstrap';
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CalculatorMain from './calculator_main.component'

const Calculator = ({ submitCalculator }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    const theme = useSelector(state => state.theme)
    return (
        <Row className="pl-3 mt-4">
        
        <Button style={{ backgroundColor: theme.button_color }} onClick={toggle}>How Much Do I Need? <FontAwesomeIcon className="ml-2" icon={faCalculator}/></Button>
         <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
           
          
               
               
                <ModalHeader>
                  <Container fluid="sm">
                    <Row>
                  
                        <h3>How Much Do You Need?</h3>
                     
                    </Row>
                  </Container>
                  </ModalHeader>
             
        
          
            <CalculatorMain setModal={setModal} submitCalculator={submitCalculator}/>
          

        </Modal>
     
      </Row>
    )
}

export default Calculator