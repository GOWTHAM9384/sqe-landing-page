import React from 'react'
import team1 from '../assets/team/team-01.jpg'
import team2 from '../assets/team/team-02.jpg'
import team3 from '../assets/team/team-03.jpg'

const Team = () => {
  return (
    <>
      <div className='py-50 md:mx-30 px-5'>
        <div className='text-center'>
          <h1 className='text-5xl mb-5 font-bold'>Our Team</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi, dolorum modi nulla eveniet ipsam atque ad sapiente vel, repudiandae</p>
        </div>

        <div className='grid grid-rows-1 md:grid-cols-3 place-items-center gap-10 mt-20'>
          <img src={team1} alt="" className='w-100 rounded-2xl hover:scale-110 transition cursor-pointer' />
          <img src={team2} alt="" className='w-100 rounded-2xl hover:scale-110 transition cursor-pointer' />
          <img src={team3} alt="" className='w-100 rounded-2xl hover:scale-110 transition cursor-pointer' />
        </div>
      </div>
    </>
  )
}

export default Team