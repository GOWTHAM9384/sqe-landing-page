import React from 'react'
import Button from './Button'

const PriceCard = ({ heading, date, property}) => {
  return (
    <>
      <div>
        <div className={`shadow-2xl ${property} rounded-2xl`}>
          <h2 className='text-white  bg-[#1B2733] p-5 mt-3 rounded shadow-2xl'>{heading}</h2>
          <div>
            <p className='flex gap-2 items-center justify-center my-12'><span className='text-5xl'>{date}</span> <span>/ Month</span></p>
          </div>

          <div className='flex flex-col gap-10 mt-5  p-3'>
            <span>2GB Disk Space</span>
            <span>1 Domain Names</span>
            <span>2 Email Address</span>
            <span>Enhanced Security</span>
            <span>United SUpport</span>
          </div>

          <Button property={'border-2 px-3 border-orange-600  p-2 my-5 font-bold '} text={"ORDER NOW"} />
        </div>
      </div>
    </>
  )
}

export default PriceCard