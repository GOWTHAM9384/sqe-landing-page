import React from 'react'
import Button from '../common/Button'

const Map = () => {
  return (
    <div className='py-30'>

      <div className='md:w-full relative '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63675.83806166285!2d77.6811867493436!3d9.180463600305231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b0733befdd8d%3A0x1b5342bf29e3dc9!2sPillaiyarnatham%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1767646142032!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>



        <div className='absolute shadow top-5 left-138   flex-col gap-5 p-5 px-10 bg-white rounded hidden md:flex'>
          <h3 className='text-2xl font-semibold'>Google</h3>
          <p>This page Can't load Google Map Correctly</p>
          <div className='flex justify-between items-center'>
            <span>Do You Own nThis Website</span>
            <Button text={"OK"} property={"p-2 border text-blue-400"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map