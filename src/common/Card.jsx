import React from 'react'

const Card = ({img,text,para,varient,h2 ,imgstyle,parastyle,content}) => {
  return (
    <div className={`flex flex-col gap-5 ${varient} w-80  rounded `}>
      <img src={img} alt="" className={`w-25 mx-auto ${imgstyle}`} />
      
      <div className={`text-center mt-2 ${content}`}>
        <h2 className={`text-2xl mb-2 ${h2}`}>{text}</h2>
        <p className={`w-50 mx-auto ${parastyle}`}>{para}</p>
      </div>
    </div>
  )
}

export default Card