import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layouts/Navbar'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Footer from './layouts/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
