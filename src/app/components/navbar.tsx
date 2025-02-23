"use client"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {Menu, X } from "lucide-react"
import Link from 'next/link'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-full md:w-[1170px] mx-auto h-20 bg-black fixed top-0 left-1/2 -translate-x-1/2 z-[100] navbar-bg flex gap-6'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold p-4'>@gent!a wOrLD</h1>
        <div className='hidden md:flex gap-4 p-5 text-2xl font-bold ml-8 cursor-pointer'>
            <Link href="/feature"><h3 className='hover:text-yellow-500'>Features</h3></Link>
           <Link href="/tech"><h3 className='hover:text-yellow-500'>Technology</h3></Link> 
            <Link href="/agent"><h3 className='hover:text-yellow-500'>Agents</h3></Link>
            <Link href="/price"><h3 className='hover:text-yellow-500'>Pricing</h3></Link>
           <Link href="/cont"><h3 className='hover:text-yellow-500'>Contact</h3></Link> 
        </div>
        <Button className='hidden md:flex md:justify-center text-yellow-500 text-xl font-semibold p-8 mt-2 '>Explore More</Button>
        
       {/* Mobile Menu Button */}
      <button className="md:hidden text-yellow-400 ml-24" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={32} /> : <Menu size={32} />} 
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-yellow-400 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/feature"><h3 className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Features</h3></Link>
          <Link href="/tech"><h3 className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Technology</h3></Link>
          <Link href="/agent"><h3 className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Agents</h3></Link>
          <Link href="/price"><h3 className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Pricing</h3></Link>
          <Link href="/cont"><h3 className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Contact</h3></Link>
          <Button className="text-yellow-500 text-xl font-semibold">Explore More</Button>
        </div>
      )}
      
      
    </div>
  )
}

export default Navbar
