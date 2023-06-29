import React from 'react'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-around w-full px-6 pt-4 pb-10 md:justify-between md:px-4 lg:px-40 2xl:px-60 bg-gray-800'>
        <div className='flex flex-col items-start text-slate-100 w-1/2 lg:w-75% xl:w-1/4'>
            <h2 className='font-display text-lg pb-2'>Join our newsletter</h2>
            <input name='myInput' placeholder='email address' className='font-body w-full p-1 mb-4 text-black' />
            <p className='font-body text-xs'>By entering my email address, I consent to ChargeHub sending me its newsletters on a regular basis. I understand that I can withdraw my consent at any time.</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col mb-4'>
                <h2 className='font-display text-slate-100'>Made With:</h2>
                <ul className='flex text-slate-100'>
                    <li><AiFillGithub size={30} /></li>
                    <li><BiLogoReact size={30} /></li>
                    <li><BiLogoTailwindCss size={30} /></li>
                    <li><AiFillHtml5 size={30} /></li>
                </ul>
            </div>
            <div className='flex flex-col font-body text-sm text-slate-100'>
                <Link to='/contact'>Contact Us</Link>
                <a href="#">Frequently Asked Questions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
            </div>
        </div>
    </div>
  )
}

export default Footer