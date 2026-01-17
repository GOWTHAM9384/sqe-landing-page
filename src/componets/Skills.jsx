import React from 'react'
import Level from '../common/Level'
import skills from '../assets/skills.jpg'

const Skills = () => {
  return (
    <>
      <div className='py-30 grid grid-cols-1 lg:grid-cols-2 md:mx-30 place-items-center px-5 '>

        <div className=' w-fit md:w-120'>
          <div className='text-center md:text-left px-5 md:p-0'>
            <h3 className='text-5xl font-vold  font-bold'>Our Skills</h3>
            <p className='text-gray-500 my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi perspiciatis odio odit magnam nostrum ipsa quod voluptatem fugit commodi, adipisci id reiciendis cupiditate atque distinctio eligendi hic culpa fugiat! Ab nemo, et dolorum quia assumenda accusamus eum placeat ipsum!</p>
          </div>

          <div className='mt-10 flex flex-col gap-5 px-5 md:px-0 '>
            <Level text={"web Design"} count={"95"} varient={"absolute top-0 md:left-95 left-[95%]"} width={"md:w-95 w-[95%]"} />
            <Level text={"Graphic Design"} count={"80"} varient={"absolute top-0 md:left-80 left-[80%]"} width={"md:w-80 w-[80%]"} />
            <Level text={"web Develpoment"} count={"90"} varient={"absolute top-0 md:left-90 left-[90%]"} width={"md:w-90 w-[90%]"} />
            <Level text={"Photoshop"} count={"92"} varient={"absolute top-0 md:left-92 left-[92%]"} width={"md:w-92 w-[92%]"} />
          </div>
        </div>

        <div className='mt-25 lg:m-0 w-full h-full'>
          <img src={skills} alt="" className='w-full h-full rounded' />
        </div>
      </div>
    </>
  )
}

export default Skills