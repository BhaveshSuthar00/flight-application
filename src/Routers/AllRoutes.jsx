import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'
import Signin from '../Components/Signin/Signin'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
    </Routes>
  )
}

export default AllRoutes