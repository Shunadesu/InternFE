import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Nav, TopHeader, Footer} from '../../components'


const Public = ({cartItem}) => {
  return (
    <div className='w-full flex flex-col items-center'>
        <TopHeader/>
        <Header cartItem={cartItem}/>
        <Nav />
        <div className='w-full'>
        <Outlet />
        </div>
        <Footer/>
    </div>

  )
}

export default Public