import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Calculator = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    const theme = useSelector(state => state.theme)
    return (
        <Row className="pb-4 pl-3">
        
        <Button style={{ backgroundColor: theme.button_color }} onClick={toggle}>How Much Do I Need? <FontAwesomeIcon icon={faCalculator}/></Button>
         <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
          <ModalHeader>Enter Sq. Ft Needing To Be Covered</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
     
      </Row>
    )
}

export default Calculator