import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <Header/>
        <div className='Outlet'>
          <Outlet/>

        </div>
    </main>
  )
}

export default Layout