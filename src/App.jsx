import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from './store/slices/products.slice'

function App() {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  console.log(products)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
