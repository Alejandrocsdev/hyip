// 鉤子函式
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
// 組件
import Header from './Header'
import Footer from './Footer'

// 樣式組件
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
