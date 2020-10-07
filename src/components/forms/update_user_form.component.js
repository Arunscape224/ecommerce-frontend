import React, { useCallback, useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
import {useDropzone} from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../actions/user.action'
import { useHistory } from "react-router-dom";
import { read, isAuthenticated } from '../../helper_methods/index'

const UpdateUserForm = ({match}) => {
    // Left Off trying to initialize form data before I send Request Off
    
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    let history = useHistory();

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        specifier: false,
        photo: '',
        trade: '',
        company: '',
        formData: new FormData(),
        error: "",
        success: false
    })

    const { firstName, lastName, email, password, bio, trade, company, formData } = values

    const handleChange = name => event => {
        const value = event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const onDrop = useCallback(acceptedFiles => {
        const value = acceptedFiles[0]
        formData.set('photo', value)
        setValues({ ...values, photo: value })
      }, [values, formData])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/jpeg, image/png' })

    const handleSubmit = (event) => {
        event.preventDefault()
            setValues({ ...values })
        dispatch(updateUser(formData)).then(() => {
            setValues({ 
                ...values,
                firstName: '',
                lastName: '',
                bio: '',
                email: '',
                password: '',
                photo: ''
             })
        }).then(() => history.push('/'))

        // console.log(values)
    }
    const {token} = isAuthenticated()
    const init = (userId) => {
        // console.log(userId)
        read(userId, token).then(data => {
            if(data.error) {
                setValues({...values, error: true})
            } else {
                console.log(data)
                setValues({...values, firstName: data.firstName, lastName: data.lastName, bio: data.bio, email: data.email, company: data.company})
            }
        })
    }

    useEffect(() => {
        init(match.params.userId)
    }, [])
  

    return (
        <Form onSubmit={handleSubmit}>
                        <div className="d-flex" 
                             style={{ marginTop: '1rem' }}>

                            <FormGroup className="col-6">
                                <Input type="text"
                                       onChange={handleChange('firstName')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="firstName"
                                       value={firstName} 
                                       id="firstName" 
                                       placeholder="First Name"/>
                            </FormGroup>

                            <FormGroup className="col-6">
                                <Input  type="text" 
                                        onChange={handleChange('lastName')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }}
                                        name="lastName"
                                        value={lastName} 
                                        id="lastName" 
                                        placeholder="Last Name"/>
                            </FormGroup>
                            
                        </div>
                        
                        <div className="col-12"
                             style={{ marginBottom: '2rem' }}>
                        
                           
                                     <p>You are a ...</p>
                          
                         
                                <FormGroup>
                                    <Input type="select" 
                                           name="trade"
                                           onChange={handleChange('trade')}
                                           value={trade}
                                           style={{
                                                border: `2px solid ${theme.text_color}`
                                            }} 
                                           id="exampleSelect">
                                        <option>Homeowner</option>
                                        <option>Builder</option>
                                        <option>Designer</option>
                                        <option>Rep</option>
                                    </Input>
                                </FormGroup>
                           
                        
                        </div>

                        


                    


                        <div className="col-12"
                             style={{ marginBottom: '2rem' }}>

                            <FormGroup>
                                <Input  type="text"
                                        onChange={handleChange('company')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="company" 
                                        value={company}
                                        id="company" 
                                        placeholder="Company"/>
                            </FormGroup>
                        </div>

                        {/* <hr style={{marginBottom: '2rem'}}/> */}


                        <div className="d-flex"
                             style={{ marginBottom: '1rem' }}>
                            <FormGroup className="col-6">
                                <Input  type="email"
                                        onChange={handleChange('email')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="email" 
                                        value={email}
                                        id="email" 
                                        placeholder="Email" />
                            </FormGroup>

                            <FormGroup className="col-6">
                                <Input  type="password"
                                        onChange={handleChange('password')}
                                        value={password}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        name="password" 
                                        id="password" 
                                        placeholder="Password" />
                            </FormGroup>
                        </div> 
                            
                        <div className="col-12" style={{ marginBottom: '2rem' }}>
                            <FormGroup>
                                <Input  type="textarea" 
                                        name="bio"
                                        onChange={handleChange('bio')}
                                        value={bio}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }} 
                                        id="bio" 
                                        placeholder="Bio" />
                            </FormGroup>
                         </div> 
                        
                        <Container className="col-12" style={{ marginBottom: '2rem' }}>
                        <div  {...getRootProps()}>
                        <input name="photo" {...getInputProps()} />
                            {
                              isDragActive ?
                                <p>Drop the files here ...</p> :
                                
                                <Container style={{ height: '100px', border: `2px solid ${theme.text_color}`, marginBottom: '1rem', borderRadius: '5px' }}>Drag & Drop Here</Container>
                            }
                    </div>
                    </Container>


                    <Row>
                        <Col className="d-flex mb-3 justify-content-center"> 
                            <Button style={{ backgroundColor: theme.text_color }}>Submit</Button>
                        </Col>
                    </Row>
                
                </Form>
    )
}

export default UpdateUserForm