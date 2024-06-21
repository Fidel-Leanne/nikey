import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { offer } from '../assets/images'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img
        src={offer}
        width={773}
        height={687}
        className='object-contain w-full'
        />
      </div>
         <div className='flex flex-1 flex-col'>

    
<h2 className='font-bold font-palanquin text-4xl capitalize lg:max-w-lg
 '>
 <span className='text-red-800'>Special</span> offer<br />
 

</h2>

<p className='mt-4 lg:max-w-lg info-text '>
  Ensuring premium comfort and style , our meticulously crafted footwear is designed to elevate your experience , providing you with unmatched quality , innovation, and a touch of elegance.
</p>

<p className='mt-6 lg:max-w-lg info-text'>
  Our dedication to detail and excellence ensures your satisfaction

</p>
<div className='mt-11 gap-5 flex flex-wrap '>
  
  <Button label='Shop now' iconURL={arrowRight}  />

  <Button label='Learn more'  
  backgroundColor='bg-white'
  borderColor='border-slate-900'
  textColor= 'text-slate-900'/>
  
</div>



</div>
    </section>
    

  )
}

export default SpecialOffers
