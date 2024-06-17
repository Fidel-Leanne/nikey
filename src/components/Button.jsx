import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex   bg-red-600 justify-center  items-center rounded-full px-7 py-4 gap-2 h-3 text-lg text-white-400 font-montserrat border leading-none'>
      {label}
      <img src={iconURL} alt="icon" />
    </button>
  )
}

export default Button