import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footers/Footer'


export default function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <div className='content'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
