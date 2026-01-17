import React from 'react'
import favicon from '../assets/favicon.ico'
import Card from '../common/Card'

const Awards = () => {
  return (
    <div className='bg-[#FB6D47] py-15'>

      <div className='md:mx-30 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
        <Card text={"2500"} para={"OUT CUSTOMERS"}  varient={"text-white p-4"} img={favicon} h2={"text-4xl"}/>
        <Card text={"2100"} para={"HAPPY CLIENTS"}  varient={"text-white p-4"} img={favicon} h2={"text-4xl"}/>
        <Card text={"2025"} para={"PROJECT COMPLETED"}  varient={"text-white p-4"} img={favicon} h2={"text-4xl"}/>
        <Card text={"2025"} para={"AWARDS"}  varient={"text-white p-4"} img={favicon} h2={"text-4xl"}/>
      </div>

    </div>
  )
}

export default Awards