import React from 'react'
import logo from '../assets/logo.png'
import favicon from '../assets/favicon.ico'

const Footer = () => {
  return (
    <>
    <div className='md:mx-30  mb-10 px-5'>
      <div className='flex flex-col gap-3 text-center'>
        <img src={logo} alt="" className='w-40  mx-auto' />
        <span className='text-2xl font-bold'>Creative Template</span>
      </div>

      <div className='flex justify-center mt-10'>
        <img src={favicon} alt="" />
        <img src={favicon} alt="" />
        <img src={favicon} alt="" />
        <img src={favicon} alt="" />
      </div>

      <div className='text-center mt-5'>
        <span>©️ sqa Business theme,All Rights Reserver | Designed bt <span className='text-red-400'>GEC Designs</span></span>
      </div>
    </div>
    </>
  )
}

export default Footer