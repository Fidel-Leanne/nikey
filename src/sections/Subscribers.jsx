import React from 'react';
import Button from '../components/Button';

const Subscribers = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up For
        <span>
          <span className='text-red-800 font-montserrat font-semibold'> Nikey </span>
          Newsletter
        </span>
      </h3>

      <div className='lg:max-w-[40rem] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-900 rounded-full'>
        <input
          type="text"
          placeholder='Subscribe'
          className='flex-1 p-2 rounded-full sm:border-none focus:outline-none'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button
            label='Sign Up'
            backgroundColor='bg-red-900'
            textColor='text-white'
            borderColor='border-red-900'
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribers;
