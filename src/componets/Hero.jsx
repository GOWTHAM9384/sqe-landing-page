import React from 'react'
import hero from '../assets/hero.jpg'
import Button from '../common/Button'

const Hero = () => {
  return (
    <>
      <div className='h-screen bg-[url("hero.jpg")] bg-cover'>
        <div className='bg-black/50 w-full h-full p-5 flex flex-col items-center justify-center  md:items-start '>
          <div className=' w-fulll md:w-50% md:ml-30 '>
            <h2 className='text-3xl  text-orange-600 font-bold  '>Digital agency</h2>
            <p className='text-6xl text-white my-3 font-bold'><span className='md:block'>Grow your</span>
              <span className='md:block'>Business with us</span>
            </p>

            <p className='text-white my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas.</p>

            <div >
              <Button property={'border-2 px-3 border-orange-600 text-white p-2 font-bold'} text={"MORE ABOUT"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero