import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PhoneApp from '../assets/phone-app.jpg'
import { ImLocation2, ImUser, ImList, ImMap, ImUsers, ImAppleinc, ImAndroid } from 'react-icons/im'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'

const MobileApp = () => {
  return (
    
    <div>
        <NavBar className='sticky top-0' />
        <div className='flex justify-center items-center h-[560px] overflow-hidden bg-purple-900'>
            <img src={PhoneApp} alt="/" className='relative opacity-30' />
            <div className='absolute flex justify-center items-center flex-col'>
                <span></span>
                <h1 className='font-display text-center text-background text-4xl px-10 pb-6'>
                  Discover your next EV charging station with VoltSpot, the premier EV charging station app.
                  </h1>
                <p className='font-body text-center text-background text-lg px-24 lg:px-40'>
                  The VoltSpot app is meticulously crafted to assist electric vehicle drivers across the United States and Canada.
                  </p>
                  <button type="button" className='bg-purple-950 text-background w-1/2 lg:w-1/4 h-12 rounded mt-5 mb-10 hover:bg-[#800ABF] transition-all duration-300'>Download the free app</button>
            </div>
        </div>
        <div className='flex flex-col w-full px-12 md:max-w-5xl md:mx-auto '>
          <h2 className='font-display text-3xl mt-10 mb-6'>VoltSpot App Features</h2>
          <div className='grid gap-6 grid-cols-2 grid-rows-3 border-b border-b-slate-900'>
            <div className='grid gap-1 grid-cols-2 justify-start mb-8'>
              <h2 className='col-span-2 font-display text-lg'>
                Find all the charging stations in North America
                </h2>
              <ImLocation2 size={100} className='self-center text-[#800ABF]' />
              <p className='font-body text-md'>
                VoltSpot aggregates all the charging stations in North America in an easy to use interface. With its search feature and filter option, you can easily find the nearest public charging stations for your electric car.
                </p>
            </div>
            <div className='grid gap-1 grid-cols-2 justify-start mb-8'>
              <h2 className='col-span-2 font-display text-lg'>
                Customizable profile
                </h2>
              <ImUser size={100} className='self-center text-[#800ABF]' />
              <p className='font-body text-md'>
                Create a profile that responds to your need; build your own bookmarks, save your filters and customize your notifications to know when there is a new public charging station in your area.
                </p>
            </div>
            <div className='grid gap-1 grid-cols-2 justify-start mb-8'>
              <h2 className='col-span-2 font-display text-lg'>
                Most accurate and detailed information
                </h2>
              <ImList size={100} className='self-center text-[#800ABF]' />
              <p className='font-body text-md'>
                VoltSpot displays daily updated details for all the charging stations available in North America. With the charging stations description you have all the necessary information to plan your charge.
                </p>
            </div>
            <div className='grid gap-1 grid-cols-2 justify-start mb-8'>
              <h2 className='col-span-2 font-display text-lg'>
                Find all the charging stations in North America
                </h2>
              <ImMap size={100} className='self-center text-[#800ABF]' />
              <p className='font-body text-md'>
                Find all the charging stations along your route and get turn-by-turn directions to your next charging point. With the VoltSpot EV trip planner you can quickly find your next charging point with the filter tool and search feature.
                </p>
            </div>
            <div className='grid gap-1 grid-cols-2 justify-start mb-8'>
              <h2 className='col-span-2 font-display text-lg'>
                Easily connect with other electric car drivers
                </h2>
              <HiChatBubbleLeftRight size={100} className='self-center text-[#800ABF]' />
              <p className='font-body text-md'>
                Easily communicate with other users with the in app messaging system. Request to unplug a users electric car, coordinate your charging or ask for any other info you need to charge your EV.
                </p>
            </div>
            <div className='grid gap-1 grid-cols-2 justify-start mb-8'>
              <h2 className='col-span-2 font-display text-lg'>
                Be a member of an active EV community
                </h2>
              <ImUsers size={100} className='self-center text-[#800ABF]' />
              <p className='font-body text-md'>
                Join a vibrant community that is committed to helping anyone charge everywhere. Add a new public charging station when you see one. Check-in, leave comments, add photos and edit the station information while you are using it.
                </p>
            </div>
          </div>
          <h2 className='font-display text-center text-3xl mt-10 mb-6'>Thanks to all the features available on the VoltSpot app, it is the best EV charging station app to help all the electric car drivers in North America plan their EV trip.</h2>
          <p className='font-body text-center text-xl'>The ChargeHub App is free and is available on iOS and Android</p>
          <div className='flex justify-center items-center gap-16 mt-8 mb-10'>
            <a href=""><ImAppleinc size={150} className='text-[#800ABF]' /></a>
            <a href=""><ImAndroid size={150} className='text-[#800ABF]' /></a>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default MobileApp;