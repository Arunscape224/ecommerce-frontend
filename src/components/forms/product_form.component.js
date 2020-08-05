import React, { useCallback, useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap'
import {useDropzone} from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, getProducts } from '../../actions/product.action'
import { getCategories } from '../../actions/category.action'
import { useHistory } from "react-router-dom";
import { faDollarSign, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ProductForm = () => {
    
    const theme = useSelector(state => state.theme)
    const allCategories = useSelector(state => state.categories)
    const allProducts = useSelector(state => state.products)
    const dispatch = useDispatch()
    let history = useHistory();
    const jwt = JSON.parse(localStorage.getItem('jwt'))

    

    const [values, setValues] = useState({
        categories: [],
        soldPer: 'pc',
        name: '',
        description: '',
        color: '',
        finish: '',
        size: '',
        pcPerBox: 0,
        shadeVariation: 'V2',
        sfPerBox: 0,
        sfPerPiece: 0,
        materialType: '',
        style: '',
        price: 10,
        index: 0,
        weight: 0,
        quantity: 10,
        shipping: true,
        variants: [],
        photo: '',
        formData: new FormData()
    })

    const [chosenCategories, setChosenCategories] = useState([])
    const [productsFetched, setProductsFetched] = useState(false)
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
   

    const { name, description, color, finish, size, shadeVariation, weight, materialType, style, pcPerBox, sfPerBox, sfPerPiece, soldPer, price, quantity, categories, index, formData } = values

    const handleChange = name => event => {
        const value = event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const handleChangeCategory = (event) => {
        var selectedCategory = event.target.value
        
        if(!chosenCategories.includes(selectedCategory)) {
            chosenCategories.push(selectedCategory)
            categories.push(JSON.parse(selectedCategory)._id)
            formData.append(categories, JSON.parse(selectedCategory)._id)
        }
        setCurrentSelectedCategory(JSON.parse(selectedCategory))
        console.log(currentSelectedCategory)
        
    }

    const onDrop = useCallback(acceptedFiles => {
        const value = acceptedFiles[0]
        formData.set('photo', value)
        setValues({ ...values, photo: value })
      }, [values, formData])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/jpeg, image/png' })

    const handleSubmit = (event) => {
        event.preventDefault()
        // let categoriesArray =  Array.from(chosenCategories)
        // let result = categoriesArray.map(category => {
        //     let obj = JSON.parse(category)
        //     console.log(obj.name)
        //     return obj._id
        // });
        // console.log(result)
        setValues({ ...values})
        
        dispatch(createProduct(formData, jwt.user._id, jwt.token)).then(() => {
            setValues({ 
                ...values,
                categories: [],
                soldPer: '',
                index: 0,
                name: '',
                description: '',
                shadeVariation: 'V2',
                color: '',
                finish: '',
                size: '',
                pcPerBox: 0,
                sfPerBox: 0,
                sfPerPiece: 0,
                weight: 0,
                materialType: '',
                style: '',
                price: '',
                quantity: 100,
                shipping: true,
                variants: [],
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
                            <p>Quantity:</p>
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
                            <p>Price:</p>
                            <FormGroup>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FontAwesomeIcon icon={faDollarSign} style={{ color: theme.text_color }} /></InputGroupText>
                                </InputGroupAddon>
                                <Input  type="number" 
                                        onChange={handleChange('price')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }}
                                        name="price"
                                        value={price} 
                                        id="price" 
                                        placeholder="Price"/>
                                </InputGroup>
                            </FormGroup>
                            </div>

            
                            
                        </div>

                        <div className="col-12">
                        <p>Name:</p>
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

                        <div className="col-12">
                        <p>Size:</p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('size')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="size"
                                       value={size} 
                                       id="size" 
                                       />
                        </FormGroup>
                        </div>

                        <div className="col-12">
                        <p>Finish:</p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('finish')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="finish"
                                       value={finish} 
                                       id="finish" 
                                       />
                        </FormGroup>
                        </div>


                        <div className="col-12">
                        <p>Material Type:</p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('materialType')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="materialType"
                                       value={materialType} 
                                       id="materialType" 
                                       />
                        </FormGroup>
                        </div>

                        <div className="col-12">
                        <p>Shade Variation:</p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('shadeVariation')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="shadeVariation"
                                       value={shadeVariation} 
                                       id="shadeVariation" 
                                       />
                        </FormGroup>
                        </div>

                        <div className="col-12">
                        <p>Style <em>(eg. subway tile)</em></p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('style')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="style"
                                       value={style} 
                                       id="style" 
                                       />
                        </FormGroup>
                        </div>


                        <div className="col-12">
                        <p>Color:</p>
                        <FormGroup>
                                <Input type="text"
                                       onChange={handleChange('color')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="color"
                                       value={color} 
                                       id="color" 
                                       />
                        </FormGroup>
                        </div>


                        <div className="d-flex" 
                             style={{ marginTop: '1rem' }}>

                            <div className="col-6">
                            <p>Sq. Ft / <strong>Box</strong>:</p>
                            <FormGroup>
                                <Input type="number"
                                       onChange={handleChange('sfPerBox')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="sfPerBox"
                                       value={sfPerBox} 
                                       id="sfPerBox"/>
                            </FormGroup>
                            </div>
                            
                            <div className="col-6">
                            <p>Sq. Ft / <strong>Piece</strong> :</p>
                            <FormGroup>
                                <Input  type="number" 
                                        onChange={handleChange('sfPerPiece')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }}
                                        name="sfPerPiece"
                                        value={sfPerPiece} 
                                        id="sfPerPiece" 
                                        />
                            </FormGroup>
                            </div>

            
                            
                        </div>

                        <div className="d-flex" 
                             style={{ marginTop: '1rem' }}>

                            <div className="col-6">
                            <p>Pieces / <strong>Box</strong>:</p>
                            <FormGroup>
                                <Input type="number"
                                       onChange={handleChange('pcPerBox')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="pcPerBox"
                                       value={pcPerBox} 
                                       id="pcPerBox"/>
                            </FormGroup>
                            </div>
                            
                            <div className="col-6">
                            <p>Weight (lbs):</p>
                            <FormGroup>
                                <Input  type="number" 
                                        onChange={handleChange('weight')}
                                        style={{
                                            border: `2px solid ${theme.text_color}`
                                        }}
                                        name="weight"
                                        value={weight} 
                                        id="weight"/>
                            </FormGroup>
                            </div>

            
                            
                        </div>

                        <div className="col-12">
                        <p>Description:</p>
                        <FormGroup>
                                <Input type="textarea"
                                       onChange={handleChange('description')}
                                       style={{
                                           border: `2px solid ${theme.text_color}`
                                       }} 
                                       name="description"
                                       value={description} 
                                       id="description" 
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
                                
                                <Container style={{ height: '100px', border: `2px solid ${theme.text_color}`, marginBottom: '1rem', borderRadius: '5px' }}><FontAwesomeIcon icon={faCamera}/></Container>
                            }
                    </div>
                    </Container>

                    <Container className="col-12" style={{ marginBottom: '2rem' }}>
                        <Container style={{ minHeight: '50px', border: `2px solid ${theme.text_color}`, marginBottom: '1rem', borderRadius: '5px', padding: '20px' }} onClick={() => console.log(categories.size)}>
                        {
                            categories.length > 0 ? categories.map((category) => <div>{category}</div>) : <div>Choose Categories From The Dropdown Below</div>
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
                                            allCategories ? allCategories.data.map((category) => <option value={JSON.stringify(category)}>{category.name}</option>) : <option>No Categories Found</option>
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