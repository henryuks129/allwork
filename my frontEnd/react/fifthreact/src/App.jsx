import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer.jsx'
import Home from './components/Home'
import Abouts from './components/Abouts'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Abouts' element={<Abouts/>} />
        <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
