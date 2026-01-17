import React from 'react'
import PriceCard from '../common/PriceCard'

const Price = () => {
  return (
    <>
      <div className='py-30 md:mx-30  text-center px-10'>
        <div className='text-center '>
          <h3  className='text-5xl font-bold my-5'>Princing table</h3>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere earum temporibus? Saepe est nam molestias veritatis quis adipisci doloremque consectetur autem? Dolores necessitatibus pariatur est maiores autem libero quibusdam.</p>
        </div>


        <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 p-3 gap-5 mt-10'>
          <PriceCard date={"3"} heading={"Basic"}/>
          <PriceCard date={"10"} heading={"Standard"}/>
          <PriceCard date={"30"} heading={"Perminum"} property={"bg-[#1B2733] text-white"}/>
          <PriceCard date={"80"} heading={"Platinum"}/>
        </div>
      </div>
    </>
  )
}

export default Price