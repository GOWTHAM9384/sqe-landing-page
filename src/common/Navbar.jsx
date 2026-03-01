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
            <a href="#hero"
            className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75 cursor-pointer'>Home</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75 
             cursor-pointer' href="#about" >About</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'
            href='#service'>Service</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'
            href='#work'>Work</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'
            href='#team'>Team</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'
            href='#price'>Price</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'
            href='#blog'>Block</a>
            <a className='border-b-2 border-t-2 border-transparent hover:border-red-400 transition delay-75  cursor-pointer'
            href='#contact'>Contact</a>
          </div>

          <div className=' md:hidden gap-5 ' onClick={() => setisTrue(!isTrue)}>
            <img src={navbar} alt="" className='w-10' />
          </div>
        </nav>

        {isTrue && (
          <div className='flex flex-col list-none gap-2 text-center py-10  w-full  md:hidden bg-black/50 text-white  '>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#hero'>Home</a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#about'>About</a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#service'>Service</a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#work'>Works</a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#team'>Team </a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#price'>Price</a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#blog'>Blog</a>
            <a className='font-bold p-2 cursor-pointer hover:underline' href='#contact'>Contact</a>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar