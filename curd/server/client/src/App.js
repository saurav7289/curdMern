import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Edit from './pages/Edit'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/update/:id" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
