import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import ProductInfo from './pages/ProductInfo'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo />} />
      </Routes>
    </div>
  )
}

export default App
