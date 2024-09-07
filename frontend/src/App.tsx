import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/navbar/navbar'
import Home from './Pages/Home/homePage'

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
          <Route>
            <Route></Route>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App