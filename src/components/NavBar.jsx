import React, { useState } from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { BiLogoReact, BiLogoTailwindCss, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ModalLoginForm from './ModalLoginForm';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className='flex bg-background sticky top-0 z-10'>
      <div className='flex justify-between items-center w-full h-24 mx-8 px-4'>
        <h1 className='flex items-center w-full text-3xl font-display text-[#800ABF]'>
          <Link to='/react-ev-charge-finder-app'>
            Volt<span className='text-textColor'>Spot </span>
          </Link>
          <BsFillLightningChargeFill />
        </h1>
        <ul className='cursor-pointer md:flex hidden'>
          <li className='p-4'>
            <Link to='/map'>Map</Link>
          </li>
          <li className='p-4 w-max'>
            <Link to='/*'>Map Beta</Link>
          </li>
          <li className='p-4'>
            <Link to="/guidepage">Guides</Link>
          </li>
          <li className='p-4'>
            <Link to='/*'>Store</Link>
          </li>
          <li className='p-4 w-max'>
            <Link to='/mobileapp'>Mobile App</Link>
          </li>
          <li className='flex items-center p-4' onClick={handleLoginClick}>
            Login <BiUserCircle size={22} />
          </li>
        </ul>
        <div onClick={toggleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div></div>
        <div
          className={
            nav
              ? 'z-10 bg-gray-800 border-l border-l-gray-800 fixed top-24 right-0 w-[60%] h-screen ease-in duration-500'
              : 'z-10 border-l border-l-gray-800 fixed top-24 right-[-100%] h-screen ease-linear duration-300'
          }
        >
          <div>
            <ul className='uppercase bg-gray-500 cursor-pointer'>
              <li className=' flex p-[22px] border-b-2 border-gray-600 transition-all ease-in-out duration-200 hover:bg-gray-600' onClick={handleLoginClick}>
                Login / Sign up
              </li>
              <li className='p-[22px] transition-all ease-in-out duration-200 hover:bg-gray-600'>
                <Link to='/*'>Forgot Password</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='bg-background cursor-pointer'>
              <li className='p-8 border-b-2 transition-all ease-in-out duration-200 hover:bg-gray-300'>
                <Link to='/map'>Map</Link>
              </li>
              <li className='p-8 border-b-2 transition-all ease-in-out duration-200 hover:bg-gray-300'>
                <Link to='/*'>Map Beta</Link>
              </li>
              <li className='p-8 border-b-2 transition-all ease-in-out duration-200 hover:bg-gray-300'>
                <Link to="/guidepage">Guides</Link>
              </li>
              <li className='p-8 border-b-2 transition-all ease-in-out duration-200 hover:bg-gray-300'>
                <Link to='/*'>Store</Link>
              </li>
              <li className='p-8 transition-all ease-in-out duration-200 hover:bg-gray-200'>
                <Link to='/mobileapp'>Mobile App</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='pt-4 pl-4 text-slate-100'>Made With:</h2>
            <ul className='flex p-3 text-slate-100'>
              <li><AiFillGithub size={40} /></li>
              <li><BiLogoReact size={40} /></li>
              <li><BiLogoTailwindCss size={40} /></li>
              <li><AiFillHtml5 size={40} /></li>
            </ul>
            <ul className='uppercase cursor-pointer'>
              <li className='p-3 text-sm text-slate-100 transition-all ease-in-out duration-200 hover:text-slate-400'>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li className='p-3 text-sm text-slate-100 transition-all ease-in-out duration-200 hover:text-slate-400'>
                Privacy Policy
              </li>
              <li className='p-3 text-sm text-slate-100 transition-all ease-in-out duration-200 hover:text-slate-400'>
                Terms of Use
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showLoginModal && <ModalLoginForm onClose={handleCloseModal} />}
    </div>
  );
};

export default NavBar;
