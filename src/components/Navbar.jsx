import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
         
        <nav className='bg-indigo-400 h-16 w-full flex px-4 rounded py-2 gap-8 items-end justify-end text-white'>
<h4 className='items-start  flex text-start' >My App</h4>
    <Link to ='/' >Home</Link>
    <Link to ='/about' >About</Link>
    <Link to ='/services' >Services</Link>
    <Link to ='/contact' >Contact</Link>
        </nav>
         </div>
  )
}

export default Navbar