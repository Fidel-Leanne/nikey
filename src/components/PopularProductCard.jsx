import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img
        src={imgURL}
        alt={name}
        className='w-[280px] h-[280px] cursor-pointer'
        />

        <div className='mt-8  flex justify-start gap-2.5'>
            <img
            src={star} alt='rating'
            width={24} height={24}
            />
            <p className='font-montserrat text-xl leading-normal text-slate-700'>(4.5)</p>
        </div>

        <h3 className='font-palanquin font-bold text-2xl mt-2'>{name}</h3>
        <p className='font-montserrat text-xl text-red-900 leading-normal '>{price}</p>

        </div>
  )
}

export default PopularProductCard