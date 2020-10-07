import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import UpdateUserForm from '../../components/forms/update_user_form.component'
const UpdateUser = ({match}) => {
    return (
        <Container fluid>
        <Row>
            <Col xs={12} className="text-center">
            <h1>Update User Info</h1>
            </Col>
        </Row>
           <Row>
               
               <Col xs="6">
                   <UpdateUserForm match={match} />
               </Col>
           </Row>
        </Container>
    )
}

export default UpdateUser