import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl shadow-purple-500/45 px-10 py-16'>
        <div className='flex w-11 h-11 justify-center items-center bg-gradient-to-tr from-red-900 to-yellow-300 rounded-full '>
            <img src={imgURL} alt={label}
            width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-slate-900'>
            {subtext}
        </p>
        </div>
  )
}

export default ServiceCard