import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import VideoBG from './assets/VideoBG.mp4'
import Library from './assets/library.jpg'
import { FaBookOpen, FaMap, FaDownload, FaChargingStation, FaHome, FaDollarSign } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-center items-center bg-black'>
        <video src={VideoBG} autoPlay loop muted className='w-full h-[685px] object-cover relative opacity-60' />
        <div className='absolute flex flex-col justify-center items-center'>
            <h1 className='font-display p-4 text-4xl lg:text-6xl text-background'>Empowering the Electric Revolution</h1>
            <p className='font-body text-xl lg:text-3xl text-background'>Discover, Locate, and Charge with Ease.</p>
        </div>
      </div>
      <div>
        <div className='flex'>
            <ul className='flex flex-row justify-between w-full cursor-pointer'>
                <li className='flex flex-col justify-center items-center p-4 font-display text-center hover:bg-slate-400 transition-all duration-300 bg-slate-300 w-full h-[200px]'>
                    <span className='my-2'><FaBookOpen size={20} /></span>Learn all about electric vehicles</li>
                <li className='flex flex-col justify-center items-center p-4 font-display text-center hover:bg-slate-400 transition-all duration-300 bg-slate-300 w-full h-[200px] border-l border-l-background'>
                    <span className='my-2'><FaMap size={20} /></span>Check out the charging stations map</li>
                <li className='flex flex-col justify-center items-center p-4 font-display text-center hover:bg-slate-400 transition-all duration-300 bg-slate-300 w-full h-[200px] border-l border-l-background'>
                    <span className='my-2'><FaDownload size={20} /></span>Download our free mobile app today</li>
            </ul>
        </div>
        <div className='flex justify-center items-center h-[345px] overflow-hidden bg-purple-900'>
            <img src={Library} alt="/" className='relative opacity-30' />
            <div className='absolute flex justify-center items-center flex-col'>
                <span></span>
                <h1 className='font-display text-background text-5xl pb-8'>
                    VoltSpot Guides</h1>
                <p className='font-body text-center text-background text-xl px-24 lg:px-40'>
                    Explore VoltSpot Guides and uncover the world of electric vehicles. Discover range, charging, savings, and eco-impact. Embrace electric cars today!</p>
            </div>
        </div>
        <div className='flex'>
            <ul className='flex flex-row justify-between w-full cursor-pointer'>
                <a href="#public" className='flex flex-col justify-center items-center p-4 font-display text-background text-center hover:bg-slate-700 transition-all duration-300 bg-slate-800 w-full h-[75px]'>
                    <li>Public Charging</li>
                </a>
                <a href="#charging" className='flex flex-col justify-center items-center p-4 font-display text-background text-center hover:bg-slate-700 transition-all duration-300 bg-slate-800 w-full h-[75px]'>
                    <li>Home Charging</li>
                </a>
                <a href="#savings" className='flex flex-col justify-center items-center p-4 font-display text-background text-center hover:bg-slate-700 transition-all duration-300 bg-slate-800 w-full h-[75px]'>
                    <li>EV Savings</li>
                </a>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-slate-200'> 
            <div className='flex flex-col m-4 p-5 lg:mx-24 lg:p-9 xl:mx-60 max-w-5xl bg-background rounded' id='public'>
                <span className='flex justify-center pb-2 text-[#800ABF]'><FaChargingStation size={60} /></span>
                <h1 className='font-display text-4xl text-center pb-5'>
                    Public Charging for EVs</h1>
                <p className='font-body px-6 pb-2'>
                    In this essential charging 101 guide, we delve into three fundamental concepts for recharging your electric car. But first, let's familiarize ourselves with the different terms commonly used for charging stations, all of which essentially mean the same thing:</p>
                <ul className='list-disc font-body pl-14'>
                    <li>Charging Station</li>
                    <li>Charging Outlet</li>
                    <li>Charging Outlet</li>
                    <li>Charging Port</li>
                    <li>Charger</li>
                    <li>Electric Vehicle Supply Equipment</li>
                </ul>
                <button type="button" className='bg-[#800ABF] text-background h-12 rounded mt-5 hover:bg-purple-950 transition-all duration-300'>Read the full guide</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-slate-200'> 
            <div className='flex flex-col m-4 p-5 lg:mx-24 lg:p-9 xl:mx-60 max-w-5xl bg-background rounded' id='charging'>
                <span className='flex justify-center pb-2 text-[#800ABF]'><FaHome size={60} /></span>
                <h1 className='font-display text-4xl text-center pb-5'>
                    Charging EVs at Home</h1>
                <p className='font-body px-6 pb-2'>
                    Simplify your search for the perfect charging station with this invaluable guide. Compare the market's top-rated charging stations effortlessly, ensuring you find a level 2 charger that meets all your charging requirements, encompasses desired features, and falls within your budgetary constraints. Let us assist you in discovering the ideal charging solution tailored to your needs.</p>
                <button type="button" className='bg-[#800ABF] text-background h-12 rounded mt-5 hover:bg-purple-950 transition-all duration-300'>Read the full guide</button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full bg-slate-200'> 
            <div className='flex flex-col m-4 p-5 lg:mx-24 lg:p-9 xl:mx-60 max-w-5xl bg-background rounded' id='savings'>
                <span className='flex justify-center pb-2 text-[#800ABF]'><FaDollarSign size={60} /></span>
                <h1 className='font-display text-4xl text-center pb-5'>
                    <span className='text-[#800ABF]'>Saving more</span> with an EV</h1>
                <p className='font-body px-6 pb-2'>
                    Several incentive programs are available to assist Americans in acquiring an electric car, plug-in hybrid EV, or hydrogen fuel-cell vehicle. Typically managed by one of three primary levels of government: federal, state, or local. These rebates exclusively apply to residents within the respective jurisdiction. Take advantage of these programs and make your sustainable vehicle purchase more affordable today!</p>
                <button type="button" className='bg-[#800ABF] text-background h-12 rounded mt-5 hover:bg-purple-950 transition-all duration-300'>Learn how to save</button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;