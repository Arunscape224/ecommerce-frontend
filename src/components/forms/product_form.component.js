import React, { useCallback, useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, FormGroup, Input } from 'reactstrap'
import {useDropzone} from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, getProducts } from '../../actions/product.action'
import { getCategories } from '../../actions/category.action'
import { useHistory } from "react-router-dom";

const ProductForm = () => {
    
    const theme = useSelector(state => state.theme)
    const allCategories = useSelector(state => state.category)
    const allProducts = useSelector(state => state.products)
    const dispatch = useDispatch()
    let history = useHistory();
    const jwt = JSON.parse(localStorage.getItem('jwt'))

    const [values, setValues] = useState({
        categories: [],
        soldPer: 'pc',
        name: '',
        price: 10,
        index: 0,
        quantity: 10,
        shipping: true,
        photo: '',
        formData: new FormData()
    })

    const [chosenCategories, setChosenCategories] = useState(new Set())
    const [productsFetched, setProductsFetched] = useState(false)
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
   

    const { name, soldPer, price, quantity, categories, index, formData } = values

    const handleChange = name => event => {
        const value = event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const handleChangeCategory = (event) => {
        var selectedCategory = event.target.value

        setChosenCategories(new Set(chosenCategories).add(selectedCategory))
        setCurrentSelectedCategory(selectedCategory)
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
        dispatch(createProduct(formData, jwt.user._id, jwt.token)).then(() => {
            setValues({ 
                ...values,
                categories: [],
                soldPer: '',
                index: 0,
                name: '',
                price: '',
                quantity: 100,
                shipping: true,
                photo: '',
             })
        }).then(() => history.push('/admin/dashboard'))

        console.log(values)
    }
    

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts()).then(() => setProductsFetched(true)).then(() => {
            if(allProducts.data !== undefined) {
                setValues({...values, index: allProducts.data.length})
                formData.set('index', allProducts.data.length)
            } 
        })
        
    }, [productsFetched, chosenCategories, dispatch, formData])

    return (
        <Form onSubmit={handleSubmit}>
                        <div className="d-flex" 
                             style={{ marginTop: '1rem' }}>

                            <div className="col-6">
                            <p>quantity:</p>
                            <FormGroup>
                                <Input type="number"
                                       onChange={handleChange('quantity')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="quantity"
                                       value={quantity} 
                                       id="quantity"/>
                            </FormGroup>
                            </div>
                            
                            <div className="col-6">
                            <p>price:</p>
                            <FormGroup>
                                <Input  type="number" 
                                        onChange={handleChange('price')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }}
                                        name="price"
                                        value={price} 
                                        id="price" 
                                        placeholder="Price"/>
                            </FormGroup>
                            </div>

            
                            
                        </div>

                        <div className="col-12">
                        <p>Product name:</p>
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
                        
                        <div className="col-12"
                             style={{ marginBottom: '2rem' }}>
                        
                           
                                     <p>Sold Per ...</p>
                          
                         
                                <FormGroup>
                                    <Input type="select" 
                                           name="soldPer"
                                           onChange={handleChange('soldPer')}
                                           value={soldPer}
                                           style={{
                                                border: `2px solid ${theme.text_color}`
                                            }} 
                                           id="exampleSelect">
                                        <option>pc</option>
                                        <option>box</option>
                                        <option>sf</option>
                                    </Input>
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

                    <Container className="col-12" style={{ marginBottom: '2rem' }}>
                        <Container style={{ minHeight: '50px', border: `2px solid ${theme.text_color}`, marginBottom: '1rem', borderRadius: '5px', padding: '20px' }} onClick={() => console.log(categories.size)}>
                        {
                            categories.length > 0 ? categories.map((category) => <div>{category}</div>) : <div>Use the Dropdown To Populate Add Categories</div>
                        }
                        </Container>
                    </Container>

                        <div className="col-12">
                        <FormGroup>
                                    <Input type="select" 
                                        //    name="soldPer"
                                           onChange={handleChangeCategory}
                                           value={currentSelectedCategory}
                                           style={{
                                                border: `2px solid ${theme.text_color}`
                                            }} 
                                           id="exampleSelect">

                                        {/* <option>pc</option>
                                        <option>box</option>
                                        <option>sf</option> */}
                                        {
                                            allCategories ? allCategories.data.map((category) => <option>{category.name}</option>) : <option>No Categories Found</option>
                                        }
                                    </Input>
                                </FormGroup>
                        </div>

                        <div className="col-12">
                            <FormGroup>
                                <Input type="hidden"
                                       onChange={handleChange('index')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="index"
                                       value={index} 
                                       id="index"/>
                            </FormGroup>
                            </div>



                    <Row>
                        <Col className="d-flex mb-3 justify-content-center"> 
                            <Button style={{ backgroundColor: theme.text_color }}>Submit</Button>
                        </Col>
                    </Row>
                
                </Form>
    )
}

export default ProductForm