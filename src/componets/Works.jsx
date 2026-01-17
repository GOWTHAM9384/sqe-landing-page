import React from 'react'
import Button from '../common/Button'
import portfolio1 from '../assets/portfolio/portfolio-01.jpg'
import portfolio2 from '../assets/portfolio/portfolio-02.jpg'
import portfolio3 from '../assets/portfolio/portfolio-03.jpg'
import portfolio4 from '../assets/portfolio/portfolio-04.jpg'
import portfolio5 from '../assets/portfolio/portfolio-05.jpg'
import portfolio6 from '../assets/portfolio/portfolio-06.jpg'

const Works = () => {
  return (
    <>
      <div className='py-30 md:mx-30 px-5 '>

        <div className='text-center flex flex-col gap-4 justify-center'>
          <h2 className='text-5xl font-bold'>Recent works</h2>
          <p className='text-gray-500'>We provide hight standard clean websites for your business sloutions </p>

          <div className='flex gap-10 justify-center  flex-wrap'>
            <Button property={'border-2 px-3 border-orange-600  p-2 font-bold bg-orange-600 text-white'} text={"All"} />
            <Button property={'border-2 px-3 border-orange-600  p-2 font-bold'} text={"Brand"} />
            <Button property={'border-2 px-3 border-orange-600  p-2 font-bold'} text={"Photoshop"} />
            <Button property={'border-2 px-3 border-orange-600  p-2 font-bold'} text={"Web Design"} />
            <Button property={'border-2 px-3 border-orange-600  p-2 font-bold'} text={"Graphics"} />
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 my-10'>
          <img src={portfolio1} alt="" className='hover:scale-110 transition cursor-pointer rounded-2xl' />
          <img src={portfolio2} alt="" className='hover:scale-110 transition cursor-pointer rounded-2xl' />
          <img src={portfolio3} alt="" className='hover:scale-110 transition cursor-pointer rounded-2xl' />
          <img src={portfolio4} alt="" className='hover:scale-110 transition cursor-pointer rounded-2xl' />
          <img src={portfolio5} alt="" className='hover:scale-110 transition cursor-pointer rounded-2xl' />
          <img src={portfolio6} alt="" className='hover:scale-110 transition cursor-pointer rounded-2xl' />
        </div>
      </div>
    </>
  )
}


export default Works