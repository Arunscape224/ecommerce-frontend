import React, { useState } from 'react'
import { Container, Row, Col, Input, InputGroup, Button } from 'reactstrap'
import { ModalBody, ModalFooter } from 'reactstrap';

const CalculatorMain = ({ submitCalculator, setModal }) => {
    let [sqFt, setSqFt] = useState(1)
    
    const handleChangeSF = (event) => {
        event.preventDefault();
        setSqFt(event.target.value)
    }


    // handleSubmit()

    return (
        <Container>
        <ModalBody>
        <Container>
           
            <Row className="w-100">
                
                <Col xs="12">
                <h3>Enter sq ft. to be covered</h3>
                    <InputGroup>
                        <Input type="number" onChange={handleChangeSF} value={sqFt} className="w-100" />

                    </InputGroup>
                </Col>
            </Row>
        </Container>
        </ModalBody>
        <ModalFooter>
        <Container>
           
           <Row className="w-100">
               
               <Col xs="12">
                   <InputGroup>
                   <Button onClick={() => submitCalculator(parseInt(sqFt)).then(() => setModal(false))}>Submit</Button>

                   </InputGroup>
               </Col>
           </Row>
       </Container>
            
            

        </ModalFooter>
        </Container>

    )
}

export default CalculatorMain