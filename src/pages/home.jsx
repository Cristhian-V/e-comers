import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import Product from '../components/Product'

const home = () => {
  const products = useSelector(state => state.products)
  const [productFiltrate, setProductFiltrate] = useState()
  const [renderFilter, setrenderFilter] = useState(true)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (products) {
      setProductFiltrate(products)
    }
  }, [products])

  const handleSubmit = e => {
    e.preventDefault()
    const from = Math.floor(e.target.priceFrom.value)
    const to = Math.floor(e.target.priceTo.value)

    if (!isNaN(from) && !isNaN(to) && from < to) {
      const validaProduc = (price) => {
        if (Math.floor(price) > from && Math.floor(price) < to) return true
      }

      setProductFiltrate(
        products.filter(produc => validaProduc(produc.price))
      )

      setrenderFilter(true)
    } else {
      window.alert('Por favor ingresa el rango de precios correctamente')
      setrenderFilter(false)
    }

  }

  const hadlechange = e => {
    const nameShare = e.target.value
    console.log(nameShare)

    const validaProduc = (title) => {
      if (title.toLowerCase().indexOf(nameShare.toLowerCase()) > -1) return true
    }
    setProductFiltrate(
      products.filter(product => validaProduc(product.title))
    )
    console.log(productFiltrate)
    if (productFiltrate.length > 0) {
      setrenderFilter(true)
    } else {
      setrenderFilter(false)
    }
  }

  return (
    <section>
      <header>
        <h1>e-commerce</h1>
      </header>
      <section>
        <div>
          <h2>Price</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <label htmlFor="priceFrom"> From</label>
            <input type="text" id='priceFrom' />
            <label htmlFor="priceTo"> To </label>
            <input type="text" id='priceTo' />
            <button> Filter price </button>
          </form>
        </div>
      </section>
      <section>
        <input type="text" onChange={hadlechange} />
        <div>
          {
            renderFilter
              ? productFiltrate?.map(product => (
                <Product
                  key={product.id}
                  product={product}
                />
              ))
              : <h2> No se encontraron elementos</h2>
          }
        </div>
      </section>
    </section>
  )
}

export default home