import React from 'react'

const Level = ({text,count,varient,width}) => {
  return (
    <>
    <div className='flex flex-col gap-3'>
      <span>{text}</span>
      <div className='relative border rounded shadow-2xl'>
        <div className='h-2 md:w-100'>
          <div className={`bg-orange-500 h-2 ${width}`}></div>
        </div>
        <div className={` bg-black p-1 text-white ${varient}`}>{count}</div>
      </div>
    </div>
    </>
  )
}

export default Level