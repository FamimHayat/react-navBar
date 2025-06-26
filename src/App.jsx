import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Index'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Demo from './pages/Demo'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={ <Home/>} />
            <Route path='/about' element={ <About/>} />
            <Route path='/services' element={ <Services/>} />
            <Route path='/demo' element={ <Demo/>} />
            <Route path='/contact' element={ <Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App