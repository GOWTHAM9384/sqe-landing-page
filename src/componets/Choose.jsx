import React from 'react'
import Card from '../common/Card'
import about from '../assets/about.png'

const Choose = () => {
  return (
    <div className='md:mx-30 py-20 px-5'>

      <div className='flex gap-20 mx-auto flex-wrap justify-center'>

        <div className='w-100 '>
          <h2 className='text-5xl text-center md:text-left mt-10 font-bold'>Why Choose Us</h2>

          <div className='mt-5 flex flex-col gap-10 text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex facilis dolorum id fugit quas tempora ratione illo saepe, corporis nemo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!
              adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!
               adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!
               adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!
            </p>
          </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center md:place-items-stretch w-fit gap-10 relative'>
          <Card text={"Strategy & Research"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!"} img={about} varient={" shadow-2xl md:relative top-10 p-4 hover:scale-110 transition cursor-pointer"} />
          <Card text={"Design & Development"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!"} img={about}
            varient={"shadow-2xl p-4 hover:scale-110 transition cursor-pointer"} />
          <Card text={"Management & Marketing"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!"} img={about} varient={" shadow-2xl md:relative top-10 p-4 hover:scale-110 transition cursor-pointer"} />
          <Card text={"Analysing & Checking"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque!"} img={about} varient={"shadow-2xl p-4 hover:scale-110 transition cursor-pointer"} />
        </div>
      </div>
    </div>
  )
}

export default Choose