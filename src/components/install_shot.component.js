import React from 'react'

const InstallShot = ({ product, url }) => (
    <div className="product-img mt-2">
        <img src={`http://localhost:8000/api/${url}/installshot/${product._id}`} alt={product.name} className="mw-100 mh-100"/>
    </div>
)

export default InstallShot