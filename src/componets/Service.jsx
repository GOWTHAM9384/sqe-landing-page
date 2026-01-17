import React from 'react'
import Card from '../common/Card'
import service from '../assets/services-icon.png'
import mobile from '../assets/services.png'

const Service = () => {
  return (
    <>
      <div className='md:mx-30 py-30 flex flex-col items-center px-5'>

        <div className='text-center'>
          <h3 className='text-5xl mb-5 font-bold'>Our Service</h3>
          <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo qui vero veritatis, possimus tempore ipsum est exercitationem fugiat modi. Minus, adipisci quia vitae ea, officia vero maxime rerum beatae mollitia, explicabo magni </p>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-3 place-content-center mt-20 gap-5' >

          <div className='flex flex-col gap-15 items-center'>
            <Card text={"Highly Customize"} para={"fugiat modi. Minus, adipisci quia vitae ea, officia vero maxime rerum beatae mollitia, explicabo magni"} varient={"mt-2 p-4 hover:scale-110 transition cursor-pointer"} img={service} />
            <Card text={"Optimized for Speed"} para={"fugiat modi. Minus, adipisci quia vitae ea, officia vero maxime rerum beatae mollitia, explicabo magni"} varient={"mt-2 p-4 hover:scale-110 transition cursor-pointer"} img={service} />
          </div>

          <div>
            <img src={mobile} alt="" className='w-fit md:w-100 h-180' />
          </div>


          <div className='flex flex-col gap-15 items-center'>
            <Card text={"Highly Customize"} para={"fugiat modi. Minus, adipisci quia vitae ea, officia vero maxime rerum beatae mollitia, explicabo magni"} varient={"mt-2 p-4 hover:scale-110 transition cursor-pointer"} img={service} />
            <Card text={"Optimized for Speed"} para={"fugiat modi. Minus, adipisci quia vitae ea, officia vero maxime rerum beatae mollitia, explicabo magni"} varient={"mt-2 p-4 hover:scale-110 transition cursor-pointer"} img={service} />
          </div>

        </div>
      </div>
    </>
  )
}

export default Service