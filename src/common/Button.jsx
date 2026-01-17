import React from 'react'

const Button = ({property,text}) => {
  return (
    <>
      <div>
        <button className={`${property}`}>{text}</button>
      </div>
    </>
  )
}

export default Button