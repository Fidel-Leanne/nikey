import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName, rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img
        src={imgURL}
        alt={customerName}
        className='w-[100px] h-[100px] rounded-full object-cover'
        />




        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div>
            <img src={star} alt="" 
            className='object-contain m-0 '/>
            <p className='text-slate-900 font-montserrat'>({rating})</p>
        </div>

<h3 className='font-bold font-palanquin text-2xl capitalize'>{customerName}</h3>


      
    </div>
  )
}

export default ReviewCard
