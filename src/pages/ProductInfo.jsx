import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {

  const { id } = useParams()
  const [product, setProduct] = useState()

  const getProduct = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProduct()
  }, [])

  console.log(product)

  return (
    <section>
      <h1>{product?.title}</h1>
      <figure>
        <img src={product?.productImgs[0]} alt="imagen de producto 1" />
        <img src={product?.productImgs[1]} alt="imagen de producto 2" />
        <img src={product?.productImgs[2]} alt="imagen de producto 3" />
      </figure>
      <h2>Price  ${product?.price}</h2>
      <p>{product?.description}</p>

      {/*Pner en esta parete productos ismilares de la misma categoria*/}
    </section>
  )
}

export default ProductInfo