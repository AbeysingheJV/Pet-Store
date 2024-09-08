import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/navbar/navbar'
import Home from './Pages/Home/homePage'
import Products from './Pages/Products/productsPage'
import AddProduct from './Pages/Add Product/addProductPage'

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Wrapper */}
      <div className="wrapper">
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products'>
            <Route index element={<Products></Products>}></Route>
            <Route path='add' element={<AddProduct></AddProduct>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App