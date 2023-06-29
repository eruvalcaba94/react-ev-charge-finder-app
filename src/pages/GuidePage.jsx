import React from 'react'
import NavBar from '../components/NavBar'
import Guides from '../components/Guides'
import Footer from '../components/Footer'

const GuidePage = () => {
  return (
    <div>
      <NavBar className='sticky top-0' />
      <Guides />
      <Footer />
    </div>
  )
}

export default GuidePage