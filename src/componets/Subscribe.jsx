import React from 'react'
import telegram from '../assets/telegram.png'

const Subscribe = () => {
  return (
    <>
    <div className='bg-[#101E2C] w-full text-white py-15'>
      <div className='md:mx-30 px-5'>
        <div className='text-center'>
          <h3 className='text-5xl font-bold text-[#FF4D1B]'>Subscribe Now</h3>
          <p className='py-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat officiis, quo modi ullam magnam dolore pariatur? Amet, ipsam! Iusto, unde atque. Ipsum eveniet asperiores beatae aperiam, accusantium voluptatem. Repellat, reprehenderit!</p>
        </div>

        <div className='flex gap-2 justify-center'>
          <input type="checkbox"/>
          <p>Yes, i would like receive comunication by email</p>
        </div>

        <div className='text-center mt-5 flex justify-center'>
          <input type="text" className='border bg-white md:w-100 p-2 text-black focus-visible:border-white' />
          <span className='h-auto bg-orange-500'><img src={telegram} alt="" className='w-10'/></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Subscribe