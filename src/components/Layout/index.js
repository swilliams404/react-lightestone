import './index.scss'
import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="page">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
