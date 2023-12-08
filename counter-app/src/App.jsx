
import './App.css'
import React, { useState } from 'react'
import Cal from './conponent/Cal'
import Login from './conponent/Login'
import Register from './conponent/Register'
import  {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';



const App = () => {
  
  
  return (

    <>
      <Router>
        <Routes>
          <Route path='Login' element={<Login/>}/>
          <Route path='Register' element={<Register/>}/>
        </Routes>
      </Router>
    
    </>
  
  )
}

export default App

