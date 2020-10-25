import React from 'react'
import { API } from '../config'

const InstallShot = ({ product, url }) => (
    <div className="product-img mt-2">
        <img src={`${API}/${url}/installshot/${product._id}`} alt={product.name} className="mw-100 mh-100"/>
    </div>
)

export default InstallShot