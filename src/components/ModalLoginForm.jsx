import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const ModalLoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-black opacity-30' onClick={onClose}></div>
      <div className='bg-white w-full mx-4 md:w-1/2 h-auto rounded-lg z-10'>
        <div className='flex flex-row-reverse justify-between items-center bg-purple-300 p-4 rounded-t-lg'>
          <div className='flex justify-end'>
            <FaTimes onClick={onClose} className='cursor-pointer' />
          </div>
          <h2 className='text-xl font-display'>Welcome back to VoltSpot</h2>
        </div>
        <form onSubmit={handleSubmit} className='mx-4 px-4 py-8 border-b border-b-slate-400'>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-lg font-display text-gray-700'>
              Login:
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
              className='border border-gray-300 font-body rounded-md p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              className='border border-gray-300 font-body rounded-md p-2 w-full'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-purple-400 text-textColor font-display rounded-md px-4 py-2 hover:bg-purple-600'
          >
            Login
          </button>
        </form>
        <div className='flex justify-center items-center'>
        <Link to='/*'>
          <button type="button" className='bg-purple-400 text-textColor rounded m-5 p-2 font-body text-lg hover:bg-purple-600 transition-all duration-300'>
            Forgot Password?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalLoginForm;
