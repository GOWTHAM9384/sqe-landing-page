import React from 'react'
import Card from '../common/Card'
import hero1 from '../assets/hero-03.jpg'
import hero2 from '../assets/hero-02.jpg'
import hero3 from '../assets/hero-01.jpg'
import Button from '../common/Button'

const Blog = () => {
  return (
    <>
      <div className='md:mx-30 py-30 px-5 '>
        <div className='text-center flex flex-col gap-5'>
          <h2 className='text-5xl font-bold'>Our Blog</h2>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem harum fugit necessitatibus sint cumque natus vero commodi aspernatur, velit repudiandae est mollitia beatae ipsam totam, vitae tenetur cupiditate ipsum nulla!</p>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 place-items-center'>

          <div className='shadow-2xl w-fit'>
            <div>
              <Card text={"EMILY"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque! itaque eveniet in, omnis vero facere dolorem mollitia iure quia accusamus reprehenderit sit voluptatibus sunt"} varient={"bg-white items-center "} img={hero1} imgstyle={'w-300'} content={"text-left w-full p-4  rounded"} parastyle={"w-full"} />
              <div className='my-3 px-5'>
                <Button property={'border-2 px-3 border-[#1B2733] bg-[#1B2733] text-white p-2 font-bold'} text={"Read More"} />
              </div>
            </div>
          </div>

          <div className='shadow-2xl w-fit'>
            <div>
              <Card text={"EMILY"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque! itaque eveniet in, omnis vero facere dolorem mollitia iure quia accusamus reprehenderit sit voluptatibus sunt"} varient={"bg-white items-center "} img={hero2} imgstyle={'w-full'} content={"text-left w-full p-4  rounded"} parastyle={"w-full"} />
              <div className='my-3 px-5'>
                <Button property={'border-2 px-3 border-[#1B2733] bg-[#1B2733] text-white p-2 font-bold'} text={"Read More"} />
              </div>
            </div>
          </div>

          <div className='shadow-2xl w-fit'>
            <div>
              <Card text={"EMILY"} para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque! itaque eveniet in, omnis vero facere dolorem mollitia iure quia accusamus reprehenderit sit voluptatibus sunt"} varient={"bg-white items-center "} img={hero3} imgstyle={'w-full'} content={"text-left w-full p-4  rounded"} parastyle={"w-full"} />
              <div className='my-3 px-5'>
                <Button property={'border-2 px-3 border-[#1B2733] bg-[#1B2733] text-white p-2 font-bold'} text={"Read More"} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Blog