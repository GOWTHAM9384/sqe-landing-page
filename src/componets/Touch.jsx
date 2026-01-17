import React from 'react'
import Card from '../common/Card'
import react from '../assets/react.svg'

const Touch = () => {
  return (
    <>
      <div className='md:mx-30 py-30 p-5'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Get In Touch</h2>
          <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, odit.</p>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 mt-10 '>
          <Card text={"Address:"} para={"2885 walt Nuzum farm Road"} content={"text-left p-2 w-full"} parastyle={"w-full"} varient={"bg-gray-300 flex-row p-3  md:w-100 gap-[5px]"} img={react} imgstyle={"w-[80px]"} />
          <Card text={"Address:"} para={"2885 walt Nuzum farm Road"} content={"text-left p-2 w-full"} parastyle={"w-full"} varient={"bg-gray-300 flex-row p-3  md:w-100 gap-[5px]"} img={react} imgstyle={"w-[80px]"} />
          <Card text={"Address:"} para={"2885 walt Nuzum farm Road"} content={"text-left p-2 w-full"} parastyle={"w-full"} varient={"bg-gray-300 flex-row p-3  md:w-100 gap-[5px] "} img={react} imgstyle={"w-[80px]"} />
          <Card text={"Address:"} para={"2885 walt Nuzum farm Road"} content={"text-left p-2 w-full"} parastyle={"w-full"} varient={"bg-gray-300 flex-row p-3  md:w-100 gap-[5px]"} img={react} imgstyle={"w-[80px]"} />
        </div>


        <div className=' p-5  mt-30 rounded w-full lg:w-200  mx-auto  '>
          <form action="" className='flex flex-col gap-3 w-full  bg-gray-300 p-5'>
            <input type="text" placeholder='Name' className=' p-2 bg-white ' />
            <input type="text" placeholder='Email' className=' p-2 bg-white' />
            <input type="text" placeholder='Subject' className=' p-2 bg-white' />
            <textarea type="text" placeholder='Message' className=' h-30 p-2 bg-white' ></textarea>
          <div className='mt-5 text-center'>
            <button type='submit' className='bg-[#FF4E1C] p-2 text-white font-semibold px-10 lg:px-30 cursor-pointer rounded '>Send Message</button>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

// className='flex flex-col gap-3 w-fit md:w-[80%] mx-auto  bg-gray-300 p-5
export default Touch