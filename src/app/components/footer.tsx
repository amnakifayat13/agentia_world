import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <div className='w-full md:w-[1170px] mx-auto h-auto bg-black'>
      <div className=' flex flex-col md:flex-row md:justify-around ml-6 '>
      <div className='cursor-pointer mt-4'>
        <h1 className='text-yellow-400 text-2xl font-bold'>@gent!a wOrLD</h1>
        <div className='flex gap-2 mt-4'>
          <Github size={36} fill='gray'/>
          <Linkedin size={36} fill='gray'/>
          <Twitter size={36} fill='gray'/>

        </div>
      </div>
      <div className='cursor-pointer mt-4' >
        <h2 className='text-gray-300 hover:text-yellow-300 text-2xl font-bold'>Product</h2>
        <p className='text-gray-300 hover:text-yellow-300'>Features</p>
        <p className='text-gray-300 hover:text-yellow-300'>Pricing</p>
        <p className='text-gray-300 hover:text-yellow-300'>Documentation</p>
        <p className='text-gray-300 hover:text-yellow-300'>API</p>
      </div>
      <div className='cursor-pointer mt-4'>
        <h2 className='text-gray-300 hover:text-yellow-300 text-2xl font-bold'>Company</h2>
        <p className='text-gray-300 hover:text-yellow-300'>About</p>
        <p className='text-gray-300 hover:text-yellow-300'>Blog</p>
        <p className='text-gray-300 hover:text-yellow-300'>Career</p>
        <p className='text-gray-300 hover:text-yellow-300'>Contact</p>
      </div>
      <div className='cursor-pointer mt-4'>
        <h2 className='text-gray-300 hover:text-yellow-300 text-2xl font-bold'>Legal</h2>
        <p className='text-gray-300 hover:text-yellow-300'>Privacy</p>
        <p className='text-gray-300 hover:text-yellow-300'>Terms</p>
        <p className='text-gray-300 hover:text-yellow-300'>Security</p>
        <p className='text-gray-300 hover:text-yellow-300'>Compliance</p>
      </div>
     
    </div>
    <div className='bg-yellow-700 w-72 md:w-[1100px] mx-auto h-[2px] mt-10'></div>
    <p className='text-gray-300 text-center text-sm mt-6 mb-16'>© 2025 Agentia World. All rights reserved.</p>
    <div className='black w-full md:w-[1170px] mx-auto h-6 '></div>
   

    </div>
  )
}

export default Footer
