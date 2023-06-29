import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import { ImLocation2, ImPhone } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import ModalLoginForm from '../components/ModalLoginForm';

const Contact = () => {
  return (
    
    <div>
        <NavBar className='sticky top-0' />
        <div className='flex flex-col justify-center items-center h-screen w-full bg-slate-200'>
          <div className='flex flex-col justify-center items-center rounded-md bg-background w-3/4 h-full my-20 py-10'>
            <h1 className='font-display text-3xl mb-10'>Contact Us</h1>
            <address className='font-body text-center text-xl'>
              Address: <br />
              <br />
              <ImLocation2 size={40} className='text-[#800ABF] mx-auto' /> <br />
              5555 W 55th St <br />
              Phoenix, Arizona <br />
              85034-1111 <br />
              USA <br />
              <br />
              Email: <br />
              <br />
              <GrMail size={40} className='text-[#800ABF] mx-auto' /> <br />
              <a href="mailto:voltspot@fakemail.com"> voltspot@fakemail.com</a> <br />
              <br />
              Phone: <br />
              <br />
              <ImPhone size={40} className='text-[#800ABF] mx-auto' /> <br />
              <a href="tel:+14805555555">(480) 555-5555</a>
            </address>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact;