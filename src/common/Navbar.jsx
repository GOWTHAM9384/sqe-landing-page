import { useState } from 'react'
import logo from '../assets/logo.png'
import navbar from '../assets/navbar.png'
import Button from './Button'

const Navbar = () => {


  const [isTrue, setisTrue] = useState(
    false
  )

  return (
    <>

      <div className='w-full bg-black/50 text-white fixed top-0 z-1 '>
        <nav className='flex justify-between items-center md:mx-10 p-2  '>
          <div>
            <img src={logo} alt="" className='w-25 mx-auto' />
          </div>

          <div className='list-none hidden lg:flex gap-13 font-semibold'>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75 cursor-pointer'>Home</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75 
             cursor-pointer' >About</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'>Service</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'>Work</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'>Team</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'>Price</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'>Block</li>
            <li className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'>Contact</li>
          </div>

          <div className=' md:hidden gap-5 ' onClick={() => setisTrue(!isTrue)}>
            <img src={navbar} alt="" className='w-10' />
          </div>
        </nav>

        {isTrue && (
          <div className='flex flex-col list-none gap-2 text-center py-10  w-full  md:hidden bg-black/50 text-white  '>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Home</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>About</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Service</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Works</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Team </li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Price</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Blog</li>
            <li className='font-bold p-2 cursor-pointer hover:underline'>Contact</li>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar