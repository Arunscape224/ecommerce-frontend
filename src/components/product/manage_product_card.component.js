import React, { useState } from 'react'
import Image from '../image.component'
import { useSelector } from 'react-redux'
import { isAuthenticated } from '../../helper_methods/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProduct, getProducts } from '../../actions/product.action'
import { useHistory } from 'react-router-dom'
const ManageProductCard = ({ product }) => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const { user, token } = isAuthenticated()
    const history = useHistory()
    const [hovering, setHovering] = useState(false)
    return (
    <div className={`grid-item grid-item--${product.index}`}  onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)}>
        <Link key={product._id} to={`/product/${product._id}`}><Image theme={theme} product={product} url="product"/></Link>
            <div>
                <div className="mt-3" style={{color: theme.text_color}}>{product.name}</div>
               {
                   hovering ? 
                   <div>
                       <FontAwesomeIcon  icon={faTrash} onClick={() => dispatch(deleteProduct(product._id, user._id, token)).then(() => dispatch(getProducts()))}/>
                       <FontAwesomeIcon className="ml-5 text-muted" icon={faPencilAlt} onClick={() => history.push(`/admin/update/product/${product._id}`)}/>
                   </div> :
                   <p style={{color: theme.background_color, height: '30px'}}></p>
               }
            </div>
  
    </div>
    )
}
   

export default ManageProductCard