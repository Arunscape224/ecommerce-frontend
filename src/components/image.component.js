import React from 'react'

const Image = ({ product, url }) => (
    <div className="product-img">
        <img src={`http://localhost:8000/api/${url}/photo/${product._id}`} alt={product.name} className="mw-100 mh-100"/>
    </div>
)

export default Image