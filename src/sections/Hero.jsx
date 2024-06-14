import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section 
    id='home'
    className='w-full flex xl:flex-row flex-col 
   justify-center min-h-screen  gap-10  max-container border-2 border-red-800 p-3'>

    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
    <p>Our Summer Collection</p>
    <h1 className='text-5xl font-bold'>
       <span>Latest Collection </span> <br/>
       <span className='text-red-800 font-montserrat font-semibold'>New </span>
       Arrivals
    </h1>

    <p>
     Discover stylish Nike arrivals , quality comfort ,
     and innovation for your active life

    </p>

    <Button/>
      
    </div>


    </section>
  )
}

export default Hero
