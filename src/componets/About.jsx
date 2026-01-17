import React from 'react'
import about from '../assets/about.png'
import Button from '../common/Button'

const About = () => {
  return (
    <>
      <div className='md:mx-30 py-30 grid grid-cols-1 lg:grid-cols-2 place-items-center text-center md:text-left'>
        <div className=''>
          <img src={about} alt="" className='md:w-200 ' />
        </div> 

        <div className='p-10 mt-15 w-ful lg:w-fit'>
          <h3 className='text-5xl font-bold mb-5'>About</h3>
          <div className='flex flex-col gap-2'>
            <span className='font-bold text-2xl'>Who We Are</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eveniet dolore animi placeat, ducimus dolor quaerat ratione repellendus ut! Quisquam nobis ipsum quibusdam nisi excepturi, asperiores optio veniam et? A.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore, error nobis illo placeat maiores cupiditate tempora adipisci quis. Reiciendis voluptas qui rerum praesentium culpa veritatis in nemo esse nisi!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur deleniti in facere error nesciunt voluptas sequi ipsum ipsam! Laboriosam blanditiis ad incidunt distinctio possimus pariatur voluptatem perferendis deserunt assumenda?
            </p>
          </div>

          <div className='mt-5'>
            <Button property={'border-2 px-3 border-orange-600  p-2 font-bold '} text={"READ MORE"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default About