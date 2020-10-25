import React from 'react'
import { API } from '../config'

const Image = ({ product, url, theme }) => (
    <div className="product-img mt-1" style={theme ? { boxShadow: `0 10px 16px 0 ${theme.box_shadow}, 0 6px 20px 0 ${theme.box_shadow}` } : {}}>
        <img src={`${API}/${url}/photo/${product._id}`} alt={product.name} className="mh-100 mw-100"/>
    </div>
)

export default Image