import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import DasBoard from './pages/Dasboard'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Dasboard'element={<DasBoard/>}/>
        </Routes>
      </BrowserRouter>
            

    </>
  )
}

export default App
