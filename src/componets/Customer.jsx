import React from 'react'
import Card from '../common/Card'
import testimonal1 from '../assets/testimonial/test-01.jpg'
import testimonal2 from '../assets/testimonial/test-02.jpg'

const Customer = () => {
  return (
    <>
      <div className='w-full bg-[#FE5A16]'>
        <div className='py-30 md:mx-30  p-5'>
          <div className='text-center text-white'>
            <h1 className='text-5xl font-bold'>Customer Review</h1>
            <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, alias, quaerat quam commodi ut quis itaque eveniet in, omnis vero facere dolorem mollitia iure quia accusamus reprehenderit sit voluptatibus sunt.</p>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <Card text={"EMILY"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque! itaque eveniet in, omnis vero facere dolorem mollitia iure quia accusamus reprehenderit sit voluptatibus sunt"} varient={"bg-white w-full items-center p-4"} img={testimonal1} imgstyle={"border-5 border-dotted border-orange-600 hover:rounded-[50px]  duration-500 cursor-pointer"} />

            <Card text={"SOHIA"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque! itaque eveniet in, omnis vero facere dolorem mollitia iure quia accusamus reprehenderit sit voluptatibus sunt"} varient={"bg-white w-full items-center p-4"} img={testimonal2} imgstyle={"border-5 border-dotted border-orange-600 hover:rounded-[50px]  duration-500 cursor-pointer"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Customer