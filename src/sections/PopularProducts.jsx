import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products'
    className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold font-palaquin'>
          <span className='text-red-800'>Popular</span> Products</h2>
        <p className='text-sm font-montserrat font-medium text-gray-500 lg:max-w-lg mt-2 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          
        </p>
        
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
    
  )
}

export default PopularProducts
