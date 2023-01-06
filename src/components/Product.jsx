import React from 'react'

const products = ({ product }) => {

    return (
        <div>
            <figure>
                <img src={product.productImgs[0]} alt="foto del Producto" />
            </figure>
            <hr />
            <h3>{product.title}</h3>
            <div>
                <p>Price</p>
                <p>$ {product.price}</p>
            </div>
        </div>
    )
}

export default products