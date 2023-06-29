import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { BiSolidError } from 'react-icons/bi'

const NotFound = () => {
  return (
    <div>
        <NavBar className='sticky top-0' />
        <div className='flex flex-col justify-center items-center text-center w-full h-screen bg-slate-200'>
            <BiSolidError size={100} className='text-orange-600' />
            <h1 className='font-display text-6xl mb-3'>Error 404</h1>
            <p className='font-body text-xl mb-5'>This page is a test of the error 404</p>
            <p className='font-body text-sm mb-3'>..but also I was just trying to make it look like there was more links availble</p>
            <p className='font-body text-xs'>..sorry</p>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound