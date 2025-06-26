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
            <Route path='/' element={ <About/>} />
            <Route path='/' element={ <Services/>} />
            <Route path='/' element={ <Demo/>} />
            <Route path='/' element={ <Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App