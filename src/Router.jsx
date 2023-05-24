import React from 'react'
import { Routes, Route } from 'react-router-dom';
import App from './App'
import Edit from './Edit';
import Add from './Add';

const Router = () => {
  return (
    <Routes>
     <Route path='/' element={<App/>}/>
     <Route path='/add' element={<Add/>}/>
     <Route path='/edit/:empid' element={<Edit/>}/>
    </Routes>
  )
}

export default Router