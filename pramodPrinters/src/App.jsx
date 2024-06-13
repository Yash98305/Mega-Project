import './App.css'
import { Login } from './Login/login'
import { Home } from './Home/home'
import {Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
     <ToastContainer />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
