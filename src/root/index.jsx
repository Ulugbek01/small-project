import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CardVisit from '../components/CardVisit';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';

export const Root = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        {navbar.map(({id, path, Element}) => 
            <Route key={id} path={path} element={Element}/>
        )}
        <Route path='/' element={<Home/>}/>
        <Route path='/home/cardvisit:id' element={<CardVisit/>}/>
        <Route path='*' element={<div>Page not Found</div>}/>
    </Routes>
    </div>
  )
}

export default Root;