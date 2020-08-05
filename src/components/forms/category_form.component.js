import React, { useCallback, useState } from 'react'
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
import {useDropzone} from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { createCategory } from '../../actions/category.action'
import { useHistory } from "react-router-dom";

const CategoryForm = () => {
    
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    let history = useHistory();
    const jwt = JSON.parse(localStorage.getItem('jwt'))

    const [values, setValues] = useState({
        products: [],
        name: '',
        photo: '',
        formData: new FormData()
    })
   
    const { name, formData } = values

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
        dispatch(createCategory(formData, jwt.user._id, jwt.token)).then(() => {
            setValues({ 
                ...values,
                name: '',
                products: [],
                photo: ''
             })
        }).then(() => history.push('/admin/dashboard'))

        console.log(values)
    }
    


    return (
        <Form onSubmit={handleSubmit}>
                    

                        <div className="col-12">
                        <p>Category name:</p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('name')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="name"
                                       value={name} 
                                       id="name" 
                                       />
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

export default CategoryForm


