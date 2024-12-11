import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout'
import "@fontsource/montserrat"; // Defaults to weight 400
import './index.css'


function App() {
  return (
    <div className=' w-[100%]'>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
